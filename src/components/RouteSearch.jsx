import React, { useState } from 'react';
import { MapPin, ArrowRight, LocateFixed, Clock } from 'lucide-react';

export default function RouteSearch({ onSearch }) {
  const [from, setFrom] = useState('Current Location');
  const [to, setTo] = useState('Majestic Bus Stand');
  const [when, setWhen] = useState('Now');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ from, to, when });
  };

  return (
    <div className="relative -mt-16 md:-mt-24 z-20">
      <div className="max-w-5xl mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 bg-white/80 dark:bg-neutral-900/80 backdrop-blur rounded-2xl p-3 md:p-4 border border-white/20 shadow-xl"
        >
          <div className="md:col-span-5 flex items-center gap-3 bg-white dark:bg-neutral-900 rounded-xl px-3 py-2.5 border border-neutral-200/60 dark:border-neutral-800">
            <MapPin className="h-5 w-5 text-orange-500" />
            <input
              className="w-full bg-transparent outline-none text-sm md:text-base placeholder-neutral-400"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
            />
            <button
              type="button"
              onClick={() => setFrom('Current Location')}
              className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-300 hover:text-orange-600"
            >
              <LocateFixed className="h-4 w-4" /> Use GPS
            </button>
          </div>

          <div className="md:col-span-5 flex items-center gap-3 bg-white dark:bg-neutral-900 rounded-xl px-3 py-2.5 border border-neutral-200/60 dark:border-neutral-800">
            <MapPin className="h-5 w-5 text-orange-500" />
            <input
              className="w-full bg-transparent outline-none text-sm md:text-base placeholder-neutral-400"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To"
            />
          </div>

          <div className="md:col-span-2 flex items-center gap-2 bg-white dark:bg-neutral-900 rounded-xl px-3 py-2.5 border border-neutral-200/60 dark:border-neutral-800">
            <Clock className="h-5 w-5 text-orange-500" />
            <select
              className="w-full bg-transparent outline-none text-sm md:text-base"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
            >
              <option>Now</option>
              <option>In 15 minutes</option>
              <option>In 30 minutes</option>
              <option>Later today</option>
            </select>
          </div>

          <button
            type="submit"
            className="md:col-span-12 md:row-start-2 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-xl px-4 py-3 font-medium transition-colors"
          >
            Search buses <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
