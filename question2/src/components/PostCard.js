import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="p-5">
        <div className="flex items-center mb-4">
          <img 
            src={post.user.avatar || `https://ui-avatars.com/api/?name=${post.user.username}&background=random`} 
            alt={post.user.username} 
            className="w-12 h-12 rounded-full mr-4 border-2 border-blue-100"
          />
          <div>
            <h3 className="font-bold text-gray-800">{post.user.username}</h3>
            <p className="text-xs text-gray-500">
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h2>
        <p className="mb-4 text-gray-600">{post.content}</p>
        
        {post.image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img src={post.image} alt="Post content" className="w-full h-auto transform hover:scale-105 transition-transform duration-300" />
          </div>
        )}
        
        <div className="flex items-center text-gray-500 pt-3 border-t border-gray-100">
          <div className="flex items-center mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <span>{post.commentCount} comments</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span>{post.likeCount} likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;