import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 mt-12 py-6 px-6">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} BendieGames Community. All rights reserved.</p>
      </div>
    </footer>
  );
}