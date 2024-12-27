import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (sport: string) => void;
}

export function SearchBar({ onSearch, onFilter }: SearchBarProps) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search discussions..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="rounded-lg border border-gray-300 py-2 pl-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="">All Sports</option>
        <option value="cricket">Cricket</option>
        <option value="football">Football</option>
        <option value="hockey">Hockey</option>
      </select>
    </div>
  );
}