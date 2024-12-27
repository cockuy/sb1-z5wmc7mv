import React from 'react';

interface MessageReactionProps {
  type: string;
  count: number;
  onReact: () => void;
}

export function MessageReaction({ type, count, onReact }: MessageReactionProps) {
  return (
    <button
      onClick={onReact}
      className="flex items-center space-x-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1"
    >
      <span>{type}</span>
      <span>{count}</span>
    </button>
  );
}