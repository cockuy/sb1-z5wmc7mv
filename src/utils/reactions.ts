import type { ChatMessage } from '../types';

export function updateMessageReactions(
  messages: ChatMessage[],
  messageId: string,
  reaction: string
): ChatMessage[] {
  return messages.map(msg => {
    if (msg.id === messageId) {
      const existingReaction = msg.reactions.find(r => r.type === reaction);
      if (existingReaction) {
        return {
          ...msg,
          reactions: msg.reactions.map(r => 
            r.type === reaction ? { ...r, count: r.count + 1 } : r
          )
        };
      }
      return {
        ...msg,
        reactions: [...msg.reactions, { type: reaction as any, count: 1 }]
      };
    }
    return msg;
  });
}