import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Player } from '../../types';

interface PlayerCardProps {
  player: Player;
  onFollow: (playerId: string) => void;
}

export function PlayerCard({ player, onFollow }: PlayerCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-48 object-cover"
        />
        {player.trending && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            Trending
          </span>
        )}
      </div>
      
      <div className="p-4">
        <Link to={`/players/${player.id}`} className="block">
          <h3 className="text-xl font-bold text-gray-900 hover:text-india-blue">
            {player.name}
          </h3>
        </Link>
        
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <span>{player.team}</span>
          <span className="mx-2">•</span>
          <span>{player.role}</span>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm">
            <Users className="w-4 h-4 text-gray-400" />
            <span>{player.followers} followers</span>
          </div>
          
          <button
            onClick={() => onFollow(player.id)}
            className={`px-4 py-1 rounded-full text-sm font-medium
              ${player.isFollowing
                ? 'bg-india-blue text-white'
                : 'border border-india-blue text-india-blue hover:bg-india-blue hover:text-white'
              } transition-colors`}
          >
            {player.isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}