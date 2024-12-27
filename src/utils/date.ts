import { formatDistanceToNow } from 'date-fns';

export function formatMessageTime(timestamp: string): string {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
}