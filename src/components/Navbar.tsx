import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Trophy, BookOpen, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">LearnCompete</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/practice" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <BookOpen className="h-5 w-5" />
              <span>Practice</span>
            </Link>
            <Link to="/contests" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Trophy className="h-5 w-5" />
              <span>Contests</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}