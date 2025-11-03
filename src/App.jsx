import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import RouteSearch from './components/RouteSearch';
import TicketPreview from './components/TicketPreview';
import FeaturesGrid from './components/FeaturesGrid';

export default function App() {
  const [selection, setSelection] = useState({ from: 'Current Location', to: 'Majestic Bus Stand', when: 'Now' });

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroCover />
      <RouteSearch onSearch={setSelection} />
      <TicketPreview selection={selection} />
      <FeaturesGrid />

      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Smart State Bus Ticketing · Passenger App</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-orange-400" href="#">Privacy</a>
            <a className="hover:text-orange-400" href="#">Terms</a>
            <a className="hover:text-orange-400" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
