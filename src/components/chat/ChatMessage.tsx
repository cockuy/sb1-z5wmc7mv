import React from 'react';
import { motion } from 'framer-motion';
import type { ChatMessage as ChatMessageType } from '../../types';
import { MessageReaction } from './MessageReaction';
import { formatMessageTime } from '../../utils/date';

interface ChatMessageProps {
  message: ChatMessageType;
  onReaction: (messageId: string, reaction: string) => void;
}

export function ChatMessage({ message, onReaction }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg"
    >
      <img
        src={message.author.avatar}
        alt={message.author.username}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-sm">{message.author.username}</span>
          <span className="text-xs text-gray-500">
            {formatMessageTime(message.timestamp)}
          </span>
        </div>
        <p className="text-sm text-gray-800 mt-1">{message.content}</p>
        <div className="flex items-center space-x-2 mt-2">
          {message.reactions.map(reaction => (
            <MessageReaction
              key={reaction.type}
              type={reaction.type}
              count={reaction.count}
              onReact={() => onReaction(message.id, reaction.type)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}