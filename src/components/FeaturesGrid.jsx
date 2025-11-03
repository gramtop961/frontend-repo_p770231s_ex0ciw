import React from 'react';
import { ShieldCheck, Smartphone, QrCode, Wallet, Star, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'QR / NFC Boarding',
    desc: 'Validate your ticket instantly with on‑board scanners. One‑tap NFC coming soon.',
  },
  {
    icon: Wallet,
    title: 'UPI & Cards',
    desc: 'Pay with UPI, cards, or wallets. Instant refunds on eligible rides.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & Transparent',
    desc: 'Cloud‑synced validation prevents fraud and ensures real‑time visibility.',
  },
  {
    icon: Smartphone,
    title: 'Offline Access',
    desc: 'Your active tickets are cached and auto‑sync when you reconnect.',
  },
  {
    icon: Star,
    title: 'Ratings & Feedback',
    desc: 'Share feedback on driver and ride quality to improve the network.',
  },
  {
    icon: MessageCircle,
    title: 'Passenger Support',
    desc: 'Get quick answers with in‑app chat. Escalate to human help when needed.',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Made for everyday commuters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative rounded-2xl p-5 bg-gradient-to-br from-white/5 to-white/[0.03] border border-white/10 hover:border-orange-500/30 transition-colors">
            <div className="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-3">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-white font-medium">{title}</h3>
            <p className="text-sm text-white/70 mt-1">{desc}</p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
}
