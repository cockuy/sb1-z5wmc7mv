import React from 'react';
import { ChatRoom } from './ChatRoom';
import type { ChatRoom as ChatRoomType } from '../../types';

const mockRoom: ChatRoomType = {
  id: '1',
  name: 'Match Discussion',
  participants: 253,
  isLive: true
};

export function ChatSection() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <ChatRoom room={mockRoom} />
    </div>
  );
}