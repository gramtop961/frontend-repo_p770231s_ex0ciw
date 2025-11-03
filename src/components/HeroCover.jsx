import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col items-start justify-center text-left text-white">
        <span className="inline-flex items-center gap-2 text-xs md:text-sm text-orange-300/90 bg-orange-500/10 border border-orange-400/30 px-3 py-1 rounded-full mb-4 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
          Live smart ticketing for state buses
        </span>
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight md:leading-[1.1]">
          Discover. Book. Ride.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400">Smart State Bus Tickets</span>
        </h1>
        <p className="mt-4 md:mt-6 text-white/80 max-w-2xl">
          Real‑time bus discovery, seamless payments, and on‑board QR/NFC validation. Built for speed, trust, and transparency.
        </p>
      </div>
    </section>
  );
}
