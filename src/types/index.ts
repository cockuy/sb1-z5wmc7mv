// ... existing types ...

export interface ModAction {
  id: string;
  type: 'delete' | 'ban' | 'warn';
  targetId: string;
  moderatorId: string;
  reason: string;
  timestamp: string;
}

export interface SearchFilters {
  sport?: string;
  team?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
}