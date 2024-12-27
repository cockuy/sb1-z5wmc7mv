import React from 'react';
import { EmojiReaction } from './EmojiReaction';

interface ReactionBarProps {
  reactions: Array<{
    emoji: string;
    count: number;
    active?: boolean;
  }>;
  onReaction: (emoji: string) => void;
}

export function ReactionBar({ reactions, onReaction }: ReactionBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {reactions.map(({ emoji, count, active }) => (
        <EmojiReaction
          key={emoji}
          emoji={emoji}
          count={count}
          active={active}
          onClick={() => onReaction(emoji)}
        />
      ))}
    </div>
  );
}