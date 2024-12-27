import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Activity } from 'lucide-react';
import type { PlayerStats as PlayerStatsType } from '../../types';

interface PlayerStatsProps {
  stats: PlayerStatsType;
}

export function PlayerStats({ stats }: PlayerStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <div className="flex items-center space-x-2 mb-2">
          <Activity className="w-5 h-5 text-india-blue" />
          <h4 className="font-semibold">Recent Form</h4>
        </div>
        <div className="space-y-2">
          {stats.recentPerformances.map((perf, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span>{perf.match}</span>
              <span className="font-medium">{perf.score}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <div className="flex items-center space-x-2 mb-2">
          <Award className="w-5 h-5 text-india-orange" />
          <h4 className="font-semibold">Career Stats</h4>
        </div>
        <div className="space-y-2">
          {Object.entries(stats.career).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between text-sm">
              <span className="capitalize">{key}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="w-5 h-5 text-green-500" />
          <h4 className="font-semibold">Highlights</h4>
        </div>
        <ul className="space-y-2 text-sm">
          {stats.highlights.map((highlight, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}