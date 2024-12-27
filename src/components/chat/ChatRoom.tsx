import React, { useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { updateMessageReactions } from '../../utils/reactions';
import type { ChatMessage as ChatMessageType, ChatRoom as ChatRoomType } from '../../types';

interface ChatRoomProps {
  room: ChatRoomType;
}

const mockMessages: ChatMessageType[] = [
  {
    id: '1',
    content: "What a shot by Kohli! 🏏",
    author: {
      id: '1',
      username: 'cricket_fan',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop',
      points: 100,
      badges: ['super-fan'],
      favoriteTeams: ['India']
    },
    timestamp: new Date().toISOString(),
    reactions: [
      { type: '👍', count: 5 },
      { type: '🎉', count: 3 }
    ]
  }
];

export function ChatRoom({ room }: ChatRoomProps) {
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessageType = {
      id: Date.now().toString(),
      content,
      author: {
        id: 'current-user',
        username: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop',
        points: 0,
        badges: [],
        favoriteTeams: []
      },
      timestamp: new Date().toISOString(),
      reactions: []
    };
    setMessages([...messages, newMessage]);
  };

  const handleReaction = (messageId: string, reaction: string) => {
    setMessages(messages => updateMessageReactions(messages, messageId, reaction));
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-md">
      <ChatHeader room={room} />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            message={message}
            onReaction={handleReaction}
          />
        ))}
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}