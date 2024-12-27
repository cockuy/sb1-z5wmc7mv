import React from 'react';
import { Shield, Flag, Ban } from 'lucide-react';
import type { ChatMessage } from '../../types';

interface ModToolsProps {
  onDeleteMessage: (messageId: string) => void;
  onBanUser: (userId: string) => void;
  message: ChatMessage;
}

export function ModTools({ onDeleteMessage, onBanUser, message }: ModToolsProps) {
  return (
    <div className="hidden group-hover:flex items-center space-x-2 absolute right-2 top-2">
      <button
        onClick={() => onDeleteMessage(message.id)}
        className="p-1 text-red-600 hover:bg-red-100 rounded"
        title="Delete message"
      >
        <Flag className="w-4 h-4" />
      </button>
      <button
        onClick={() => onBanUser(message.author.id)}
        className="p-1 text-orange-600 hover:bg-orange-100 rounded"
        title="Ban user"
      >
        <Ban className="w-4 h-4" />
      </button>
    </div>
  );
}