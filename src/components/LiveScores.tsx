import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, MapPin } from 'lucide-react';
import type { LiveScore } from '../types';

const mockScores: LiveScore[] = [
  {
    id: '1',
    sport: 'cricket',
    homeTeam: {
      name: 'India',
      score: '245/6',
      logo: 'https://images.unsplash.com/photo-1602763288580-988c12c9db7c?w=50&h=50&fit=crop',
    },
    awayTeam: {
      name: 'Australia',
      score: '230/8',
      logo: 'https://images.unsplash.com/photo-1608476268141-2d71fd318714?w=50&h=50&fit=crop',
    },
    status: 'live',
    startTime: '2024-03-15T14:00:00Z',
    venue: 'Eden Gardens, Kolkata',
  },
];

export function LiveScores() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Trophy className="mr-2" />
        Live Scores
      </h2>
      
      <div className="space-y-4">
        {mockScores.map((match) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{match.homeTeam.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {match.homeTeam.score}
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                  LIVE
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <h3 className="font-semibold">{match.awayTeam.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {match.awayTeam.score}
                  </p>
                </div>
                <img
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.name}
                  className="w-12 h-12 rounded-full"
                />
              </div>
            </div>
            
            <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {new Date(match.startTime).toLocaleTimeString()}
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {match.venue}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}