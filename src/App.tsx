import React from 'react';
import { Header } from './components/Header';
import { InfoSection } from './components/InfoSection';
import { DiscordWidget } from './components/DiscordWidget';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <InfoSection />
          <DiscordWidget />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;