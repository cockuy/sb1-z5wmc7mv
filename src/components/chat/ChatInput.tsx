import React, { useState } from 'react';
import { Send, Smile } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4 bg-white">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600"
          aria-label="Add emoji"
        >
          <Smile className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-full border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent px-4 py-2"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}