import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface UserPointsProps {
  points: number;
  level: number;
  rank: string;
  weeklyStreak: number;
}

export function UserPoints({ points, level, rank, weeklyStreak }: UserPointsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-india-blue to-india-orange p-6 rounded-lg text-white"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <Trophy className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">{points}</div>
          <div className="text-sm opacity-80">Total Points</div>
        </div>
        
        <div className="text-center">
          <Star className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">{level}</div>
          <div className="text-sm opacity-80">Level</div>
        </div>
        
        <div className="text-center">
          <Award className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">{rank}</div>
          <div className="text-sm opacity-80">Rank</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold">🔥 {weeklyStreak}</div>
          <div className="text-sm opacity-80">Week Streak</div>
        </div>
      </div>
    </motion.div>
  );
}