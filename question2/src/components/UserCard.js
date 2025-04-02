import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="p-5">
        <div className="flex flex-col items-center text-center">
          <img 
            src={user.avatar || `https://ui-avatars.com/api/?name=${user.username}&background=random`} 
            alt={user.username} 
            className="w-20 h-20 rounded-full mb-3 border-4 border-blue-100"
          />
          <h3 className="text-lg font-bold text-gray-800">{user.username}</h3>
          <div className="flex items-center mt-1 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {user.postCount} posts
            </span>
          </div>
          <p className="text-gray-600 text-sm">{user.bio || 'No bio available'}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-300">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;