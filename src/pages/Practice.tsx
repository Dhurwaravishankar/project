import React from 'react';
import { BookOpen, Clock, Star } from 'lucide-react';

const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    solvedCount: 1234,
    timeLimit: "1 second",
    memoryLimit: "256 MB"
  },
  {
    id: 2,
    title: "Binary Tree Traversal",
    difficulty: "Medium",
    category: "Trees",
    solvedCount: 856,
    timeLimit: "2 seconds",
    memoryLimit: "256 MB"
  },
  {
    id: 3,
    title: "Dynamic Programming Basics",
    difficulty: "Hard",
    category: "DP",
    solvedCount: 432,
    timeLimit: "1 second",
    memoryLimit: "256 MB"
  }
];

const difficultyColors = {
  Easy: "text-green-600 bg-green-50",
  Medium: "text-yellow-600 bg-yellow-50",
  Hard: "text-red-600 bg-red-50"
};

export default function Practice() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Practice Problems</h1>
        <div className="flex space-x-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option>All Categories</option>
            <option>Arrays</option>
            <option>Trees</option>
            <option>Dynamic Programming</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option>All Difficulties</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {problems.map((problem) => (
            <li key={problem.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-gray-400 mr-3" />
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {problem.title}
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${difficultyColors[problem.difficulty]}`}>
                      {problem.difficulty}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <Star className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {problem.category}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {problem.timeLimit}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      {problem.solvedCount} submissions
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}