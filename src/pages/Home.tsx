import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, BookOpen, Star } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: 'Practice Problems',
      description: 'Enhance your skills with our curated collection of programming challenges.',
      icon: BookOpen,
      link: '/practice'
    },
    {
      title: 'Live Contests',
      description: 'Participate in competitive programming contests and test your abilities.',
      icon: Trophy,
      link: '/contests'
    },
    {
      title: 'Learning Tracks',
      description: 'Follow structured learning paths to master different programming concepts.',
      icon: Star,
      link: '/practice'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Master Competitive Programming
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Join our platform to practice, compete, and improve your programming skills.
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                to={feature.link}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-16 bg-indigo-50 rounded-2xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Ready to start learning?</h2>
          <p className="mt-4 text-lg text-gray-500">
            Begin your journey in competitive programming today.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/practice"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Start Practice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}