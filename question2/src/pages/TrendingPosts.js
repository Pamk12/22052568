import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import { mockPosts } from '../services/mockData';

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with a timeout
    const timer = setTimeout(() => {
      // Sort posts by comment count to get trending posts
      const trendingPosts = [...mockPosts].sort((a, b) => b.commentCount - a.commentCount);
      setPosts(trendingPosts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Trending Posts</h2>
      <div className="space-y-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;