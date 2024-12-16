import React from 'react';

export function DiscordWidget() {
  return (
    <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <widgetbot
        server="12983796727568101"
        channel="1298379672756818104"
        className="w-full h-[600px]"
      />
    </div>
  );
}