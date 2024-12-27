import React from 'react';
import { Twitter, Facebook, Share2, WhatsApp } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center space-x-2">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 hover:text-blue-400 transition-colors"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 hover:text-green-500 transition-colors"
      >
        <WhatsApp className="w-5 h-5" />
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="p-2 text-gray-600 hover:text-indigo-500 transition-colors"
      >
        <Share2 className="w-5 h-5" />
      </button>
    </div>
  );
}