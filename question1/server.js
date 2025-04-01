const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
