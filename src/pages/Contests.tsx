import React, { useState } from 'react';
import { Trophy, Calendar, Clock, Users, X } from 'lucide-react';

const initialContests = [
  {
    id: 1,
    title: "Weekly Challenge #45",
    startTime: "2024-03-20T15:00:00Z",
    duration: "2 hours",
    registeredUsers: []
  },
  {
    id: 2,
    title: "Algorithm Sprint",
    startTime: "2024-03-22T18:00:00Z",
    duration: "3 hours",
    registeredUsers: []
  },
  {
    id: 3,
    title: "Code Masters Cup",
    startTime: "2024-03-25T20:00:00Z",
    duration: "4 hours",
    registeredUsers: []
  }
];

export default function Contests() {
  const [contests, setContests] = useState(initialContests);
  const [showForm, setShowForm] = useState(false);
  const [selectedContest, setSelectedContest] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegisterClick = (contest) => {
    setSelectedContest(contest);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContests(contests.map(c => 
      c.id === selectedContest.id ? { 
        ...c, 
        registeredUsers: [...c.registeredUsers, { name, email }]
      } : c
    ));
    setShowForm(false);
    setName('');
    setEmail('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contests</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {contests.map((contest) => (
            <li key={contest.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-indigo-500 mr-3" />
                  <p className="text-lg font-medium text-indigo-600 truncate">{contest.title}</p>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1.5 h-4 w-4 text-gray-400" />
                  {contest.registeredUsers.length} participants
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
                  {new Date(contest.startTime).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
                  {contest.duration}
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => handleRegisterClick(contest)}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Register Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button onClick={() => setShowForm(false)} className="absolute top-2 right-2">
              <X className="h-5 w-5 text-gray-500" />
            </button>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Register for {selectedContest.title}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
