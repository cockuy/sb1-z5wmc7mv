import React from 'react';
import { ReactionBar } from '../reactions/ReactionBar';
import { formatDistanceToNow } from 'date-fns';
import type { PlayerComment } from '../../types';

interface PlayerDiscussionProps {
  comments: PlayerComment[];
  onAddComment: (content: string) => void;
  onReaction: (commentId: string, emoji: string) => void;
}

export function PlayerDiscussion({ comments, onAddComment, onReaction }: PlayerDiscussionProps) {
  const [newComment, setNewComment] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts about this player..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-india-blue focus:border-transparent"
          rows={3}
        />
        <button
          type="submit"
          disabled={!newComment.trim()}
          className="px-4 py-2 bg-india-blue text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-start space-x-3">
              <img
                src={comment.author.avatar}
                alt={comment.author.username}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{comment.author.username}</span>
                  <span className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(comment.timestamp))} ago
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{comment.content}</p>
                <div className="mt-3">
                  <ReactionBar
                    reactions={comment.reactions}
                    onReaction={(emoji) => onReaction(comment.id, emoji)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}