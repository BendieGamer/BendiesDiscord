import React from 'react';

export function InfoSection() {
  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Welcome to Our Community!</h2>
        <p className="text-gray-300">
          Join our active Discord community where we discuss games, share experiences,
          and connect with fellow BendieGames fans!
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Community Guidelines</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Be respectful to others</li>
          <li>No spam or self-promotion</li>
          <li>Keep discussions family-friendly</li>
          <li>Have fun and make friends!</li>
        </ul>
      </div>
    </div>
  );
}