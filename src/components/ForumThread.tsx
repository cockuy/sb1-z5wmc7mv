import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, Tag } from 'lucide-react';
import type { ForumThread as ForumThreadType } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface ForumThreadProps {
  thread: ForumThreadType;
}

export function ForumThread({ thread }: ForumThreadProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start space-x-4">
        <img
          src={thread.author.avatar}
          alt={thread.author.username}
          className="w-12 h-12 rounded-full"
        />
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{thread.title}</h3>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
            <span>{thread.author.username}</span>
            <span>•</span>
            <span>{formatDistanceToNow(new Date(thread.createdAt))} ago</span>
          </div>
          
          <p className="mt-2 text-gray-700">{thread.content}</p>
          
          <div className="mt-4 flex items-center space-x-6">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
              <ThumbsUp className="w-5 h-5" />
              <span>{thread.upvotes}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
              <MessageSquare className="w-5 h-5" />
              <span>{thread.comments}</span>
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {thread.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
              >
                <Tag className="w-4 h-4 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}