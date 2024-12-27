import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, MessageSquare, Users, Home } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="w-8 h-8" />
            <span className="font-bold text-xl">SportsHub India</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home />}>Home</NavLink>
            <NavLink to="/live" icon={<Trophy />}>Live Scores</NavLink>
            <NavLink to="/forums" icon={<MessageSquare />}>Forums</NavLink>
            <NavLink to="/profile" icon={<Users />}>Profile</NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, icon }: { to: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 hover:text-indigo-200 transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}