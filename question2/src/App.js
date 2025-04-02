

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/Feed';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex w-full">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    Social Analytics
                  </h1>
                </div>
                <div className="ml-auto flex space-x-1">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      isActive 
                        ? "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-blue-100 text-blue-700" 
                        : "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                    end
                  >
                    Top Users
                  </NavLink>
                  <NavLink 
                    to="/trending" 
                    className={({ isActive }) => 
                      isActive 
                        ? "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-blue-100 text-blue-700" 
                        : "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  >
                    Trending Posts
                  </NavLink>
                  <NavLink 
                    to="/feed" 
                    className={({ isActive }) => 
                      isActive 
                        ? "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-blue-100 text-blue-700" 
                        : "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  >
                    Feed
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Routes>
              <Route path="/" element={<TopUsers />} />
              <Route path="/trending" element={<TrendingPosts />} />
              <Route path="/feed" element={<Feed />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
