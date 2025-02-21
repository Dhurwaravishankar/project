import React from 'react';
import { Award, Star, Trophy, BookOpen, TrendingUp } from 'lucide-react';

export default function Profile() {
  const stats = [
    { name: 'Problems Solved', value: '125', icon: BookOpen },
    { name: 'Contest Rating', value: '1850', icon: TrendingUp },
    { name: 'Global Rank', value: '#1,234', icon: Trophy },
    { name: 'Achievements', value: '15', icon: Award },
  ];

  const recentActivity = [
    { id: 1, type: 'Solved', problem: 'Two Sum', difficulty: 'Easy', date: '2 hours ago' },
    { id: 2, type: 'Attempted', problem: 'Binary Tree Traversal', difficulty: 'Medium', date: '1 day ago' },
    { id: 3, type: 'Contest', problem: 'Weekly Challenge #44', result: 'Rank 56', date: '3 days ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center space-x-4">
          <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
            <Star className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-sm text-gray-500">Member since March 2024</p>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">john.doe@example.com</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">San Francisco, CA</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <li key={activity.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {activity.type}: {activity.problem}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {activity.difficulty || activity.result}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}