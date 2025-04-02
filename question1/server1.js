const express = require("express");
const axios = require("axios");
const https = require("https");
const cors = require("cors"); // Add CORS support

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());
// Enable JSON parsing
app.use(express.json());

const API_ENDPOINTS = {
    USERS: "https://20.244.56.144/evaluation-service/users",
    POSTS: "http://20.244.56.144/evaluation-service/users/1/posts"
};

// Bearer token for authentication
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjA4NDc1LCJpYXQiOjE3NDM2MDgxNzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNhZjQ3MmVmLTYxZDgtNDA1ZS1hMzMzLTM2NGUzNGY1ZGE0MCIsInN1YiI6InByaXRhbTEyMzRvZmZpY2lhbEBnbWFpbC5jb20ifSwiZW1haWwiOiJwcml0YW0xMjM0b2ZmaWNpYWxAZ21haWwuY29tIiwibmFtZSI6InByaXRhbSBrYXJtYWthciIsInJvbGxObyI6IjIyMDUyNTY4IiwiYWNjZXNzQ29kZSI6Im53cHdyWiIsImNsaWVudElEIjoiM2FmNDcyZWYtNjFkOC00MDVlLWEzMzMtMzY0ZTM0ZjVkYTQwIiwiY2xpZW50U2VjcmV0IjoiUUpXbmFXeVhHRlNrSmpDdiJ9.DmJLDU4OBVRMJZDqSLWQhz274t_gOVJJoB6Q95H6AMc";

let userPostCounts = {};
let recentPosts = [];
let popularPosts = [];

async function fetchData(url) {
    try {
        console.log(`Fetching data from: ${url}`);
        
        const config = {
            timeout: 10000, // Increased timeout
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`,
                'Accept': 'application/json'
            }
        };
        
        // Add HTTPS agent only for HTTPS URLs
        if (url.startsWith('https')) {
            config.httpsAgent = new https.Agent({
                rejectUnauthorized: false
            });
        }
        
        const response = await axios.get(url, config);
        console.log(`Data received from ${url}:`, response.status);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        if (error.response) {
            console.error(`Status: ${error.response.status}`);
            console.error(`Data:`, error.response.data);
        }
        return [];
    }
}

async function refreshData() {
    try {
        console.log("Refreshing data...");
        [userPostCounts, recentPosts, popularPosts] = [{}, [], []];
        
        const posts = await fetchData(API_ENDPOINTS.POSTS);
        console.log(`Received posts data:`, typeof posts);
        
        // Handle case where posts might be wrapped in another object
        let postsArray = posts;
        if (!Array.isArray(posts) && posts && typeof posts === 'object') {
            // Try to find an array property in the response
            const possibleArrays = Object.values(posts).filter(val => Array.isArray(val));
            if (possibleArrays.length > 0) {
                postsArray = possibleArrays[0];
                console.log(`Found posts array with ${postsArray.length} items`);
            } else {
                console.log("Could not find posts array in response");
                postsArray = [];
            }
        }
        
        if (Array.isArray(postsArray) && postsArray.length > 0) {
            postsArray.forEach(post => {
                if (post.userId) {
                    userPostCounts[post.userId] = (userPostCounts[post.userId] || 0) + 1;
                }
                recentPosts.push(post);
            });
            
            // Sort by timestamp if available, otherwise by id
            recentPosts.sort((a, b) => {
                if (a.timestamp && b.timestamp) {
                    return new Date(b.timestamp) - new Date(a.timestamp);
                }
                return (b.id || 0) - (a.id || 0);
            });
            
            // Determine popular posts based on likes or other engagement metric
            const likeProperty = postsArray[0].likes !== undefined ? 'likes' : 
                                postsArray[0].likeCount !== undefined ? 'likeCount' : null;
            
            if (likeProperty) {
                popularPosts = [...postsArray].sort((a, b) => (b[likeProperty] || 0) - (a[likeProperty] || 0)).slice(0, 5);
            } else {
                // If no like property exists, just use the most recent
                popularPosts = recentPosts.slice(0, 5);
            }
        } else {
            console.error("Posts data is not a valid array:", postsArray);
        }
    } catch (error) {
        console.error("Error in refreshData:", error.message);
    }
}

const getTopUsers = () => Object.entries(userPostCounts)
    .map(([userId, postCount]) => ({ userId: Number(userId), postCount }))
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, 5);

const getLatestPosts = () => recentPosts.slice(0, 5);

// Add a simple test endpoint
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

app.get("/users", async (req, res) => {
    try {
        await refreshData();
        const users = getTopUsers();
        console.log("Sending users:", users);
        res.json(users);
    } catch (error) {
        console.error("Error in /users endpoint:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/posts", async (req, res) => {
    try {
        await refreshData();
        const { type } = req.query;
        
        if (type === "popular") {
            console.log("Sending popular posts:", popularPosts.length);
            return res.json(popularPosts);
        }
        
        if (type === "latest") {
            console.log("Sending latest posts:", getLatestPosts().length);
            return res.json(getLatestPosts());
        }
        
        res.status(400).json({ error: "Invalid query parameter. Use 'popular' or 'latest'." });
    } catch (error) {
        console.error("Error in /posts endpoint:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Add a debug endpoint to see what data we're getting
app.get("/debug", async (req, res) => {
    try {
        const postsData = await fetchData(API_ENDPOINTS.POSTS);
        res.json({
            rawData: postsData,
            dataType: typeof postsData,
            isArray: Array.isArray(postsData),
            keys: typeof postsData === 'object' ? Object.keys(postsData) : []
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
