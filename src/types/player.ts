export interface Player {
  id: string;
  name: string;
  image: string;
  team: string;
  role: string;
  followers: number;
  isFollowing: boolean;
  trending?: boolean;
}

export interface PlayerStats {
  recentPerformances: Array<{
    match: string;
    score: string;
  }>;
  career: {
    matches: number;
    runs?: number;
    wickets?: number;
    average: number;
    strikeRate: number;
    centuries?: number;
    fifties?: number;
  };
  highlights: string[];
}

export interface PlayerComment {
  id: string;
  content: string;
  author: {
    id: string;
    username: string;
    avatar: string;
  };
  timestamp: string;
  reactions: Array<{
    emoji: string;
    count: number;
    active?: boolean;
  }>;
}