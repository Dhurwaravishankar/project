import React from 'react';
import { Trophy, Calendar, Clock, Users } from 'lucide-react';

const contests = [
  {
    id: 1,
    title: "Weekly Challenge #45",
    startTime: "2024-03-20T15:00:00Z",
    duration: "2 hours",
    participants: 256,
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Algorithm Sprint",
    startTime: "2024-03-22T18:00:00Z",
    duration: "3 hours",
    participants: 128,
    status: "Upcoming"
  },
  {
    id: 3,
    title: "Code Masters Cup",
    startTime: "2024-03-25T20:00:00Z",
    duration: "4 hours",
    participants: 512,
    status: "Registration Open"
  }
];

export default function Contests() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Contests</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          Create Contest
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {contests.map((contest) => (
            <li key={contest.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 text-indigo-500 mr-3" />
                    <p className="text-lg font-medium text-indigo-600 truncate">
                      {contest.title}
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {contest.status}
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {new Date(contest.startTime).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {contest.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {contest.participants} participants
                  </div>
                </div>
                <div className="mt-4">
                  <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                    Register Now
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 bg-indigo-50 rounded-lg p-6">
        <h2 className="text-lg font-medium text-indigo-900">Contest Guidelines</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>• Contests are held in real-time with participants worldwide</li>
          <li>• Solutions are automatically evaluated for correctness and efficiency</li>
          <li>• Rankings are based on problems solved and time taken</li>
          <li>• Practice contests are available for beginners</li>
        </ul>
      </div>
    </div>
  );
}