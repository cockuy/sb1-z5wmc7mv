import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy } from 'lucide-react';
import type { LiveScore, UpcomingMatch } from '../../types';

interface LiveEventDashboardProps {
  liveMatches: LiveScore[];
  upcomingMatches: UpcomingMatch[];
}

export function LiveEventDashboard({ liveMatches, upcomingMatches }: LiveEventDashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-india-blue" />
          Live Matches
        </h2>
        <div className="space-y-4">
          {liveMatches.map(match => (
            <div
              key={match.id}
              className="p-4 border rounded-lg hover:border-india-blue transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={match.homeTeam.logo}
                    alt={match.homeTeam.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium">{match.homeTeam.score}</span>
                </div>
                <span className="text-sm text-red-500 font-medium">LIVE</span>
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{match.awayTeam.score}</span>
                  <img
                    src={match.awayTeam.logo}
                    alt={match.awayTeam.name}
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-india-orange" />
          Upcoming Matches
        </h2>
        <div className="space-y-4">
          {upcomingMatches.map(match => (
            <div
              key={match.id}
              className="p-4 border rounded-lg hover:border-india-orange transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={match.homeTeam.logo}
                    alt={match.homeTeam.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium">{match.homeTeam.name}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(match.startTime).toLocaleTimeString()}
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{match.awayTeam.name}</span>
                  <img
                    src={match.awayTeam.logo}
                    alt={match.awayTeam.name}
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}