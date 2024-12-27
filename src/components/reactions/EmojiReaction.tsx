import React from 'react';
import { motion } from 'framer-motion';

interface EmojiReactionProps {
  emoji: string;
  count: number;
  active?: boolean;
  onClick: () => void;
}

const animations = {
  '👏': {
    scale: [1, 1.2, 1],
    transition: { duration: 0.3 }
  },
  '🎉': {
    scale: [1, 1.4, 1],
    rotate: [0, 15, -15, 0],
    transition: { duration: 0.4 }
  },
  '🔥': {
    y: [0, -4, 0],
    transition: { duration: 0.3 }
  },
  '😲': {
    scale: [1, 1.2, 1],
    transition: { duration: 0.2 }
  },
  '😢': {
    y: [0, 2, 0],
    transition: { duration: 0.3 }
  }
};

export function EmojiReaction({ emoji, count, active, onClick }: EmojiReactionProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={active ? animations[emoji as keyof typeof animations] : {}}
      onClick={onClick}
      className={`flex items-center space-x-1 px-3 py-1.5 rounded-full 
        ${active ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 hover:bg-gray-200'}`}
    >
      <span className="text-xl">{emoji}</span>
      <span className="text-sm font-medium">{count}</span>
    </motion.button>
  );
}