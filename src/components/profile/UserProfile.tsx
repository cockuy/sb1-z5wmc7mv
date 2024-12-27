import React from 'react';
import { Trophy, Medal, Share2 } from 'lucide-react';
import type { User } from '../../types';

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <div className="flex items-center space-x-2 text-gray-600">
            <Trophy className="w-4 h-4" />
            <span>{user.points} points</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Badges</h3>
        <div className="flex flex-wrap gap-2">
          {user.badges.map(badge => (
            <span
              key={badge}
              className="flex items-center space-x-1 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
            >
              <Medal className="w-4 h-4" />
              <span>{badge}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Favorite Teams</h3>
        <div className="flex flex-wrap gap-2">
          {user.favoriteTeams.map(team => (
            <span
              key={team}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {team}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}