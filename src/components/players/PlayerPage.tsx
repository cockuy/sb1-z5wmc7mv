import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayerStats } from './PlayerStats';
import { PlayerDiscussion } from './PlayerDiscussion';
import { SocialShare } from '../shared/SocialShare';
import type { Player, PlayerStats as PlayerStatsType, PlayerComment } from '../../types';

interface PlayerPageProps {
  player: Player;
  stats: PlayerStatsType;
  comments: PlayerComment[];
  onFollow: (playerId: string) => void;
  onAddComment: (content: string) => void;
  onReaction: (commentId: string, emoji: string) => void;
}

export function PlayerPage({
  player,
  stats,
  comments,
  onFollow,
  onAddComment,
  onReaction
}: PlayerPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Player Info */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900">{player.name}</h1>
              <div className="mt-2 text-gray-600">
                <p>{player.team}</p>
                <p>{player.role}</p>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => onFollow(player.id)}
                  className={`w-full py-2 rounded-lg font-medium
                    ${player.isFollowing
                      ? 'bg-india-blue text-white'
                      : 'border border-india-blue text-india-blue hover:bg-india-blue hover:text-white'
                    } transition-colors`}
                >
                  {player.isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>
              
              <div className="mt-4">
                <SocialShare
                  url={`/players/${player.id}`}
                  title={`Check out ${player.name}'s profile`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Discussion */}
        <div className="md:col-span-2 space-y-8">
          <PlayerStats stats={stats} />
          <PlayerDiscussion
            comments={comments}
            onAddComment={onAddComment}
            onReaction={onReaction}
          />
        </div>
      </motion.div>
    </div>
  );
}