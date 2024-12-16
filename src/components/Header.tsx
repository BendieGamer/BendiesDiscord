import React from 'react';
import { Youtube, MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-800 py-4 px-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">BendieGames Community</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <a
            href="https://www.youtube.com/@bendiegames"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-red-400 transition-colors"
          >
            <Youtube size={24} />
            <span>YouTube</span>
          </a>
          <a
            href="https://discord.gg/ues542NVgh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
          >
            <MessageCircle size={24} />
            <span>Join Discord</span>
          </a>
        </nav>
      </div>
    </header>
  );
}