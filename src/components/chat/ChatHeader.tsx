import React from 'react';
import { Users } from 'lucide-react';
import type { ChatRoom } from '../../types';

interface ChatHeaderProps {
  room: ChatRoom;
}

export function ChatHeader({ room }: ChatHeaderProps) {
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <h3 className="font-semibold">{room.name}</h3>
      <div className="flex items-center text-sm text-gray-500">
        <Users className="w-4 h-4 mr-1" />
        <span>{room.participants} online</span>
      </div>
    </div>
  );
}