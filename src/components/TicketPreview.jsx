import React, { useMemo } from 'react';
import { Bus, QrCode, CreditCard, Shield, Clock } from 'lucide-react';

export default function TicketPreview({ selection }) {
  const data = useMemo(() => {
    const baseFare = 45; // demo
    const distanceFactor = selection?.to?.length % 10 || 3;
    const surge = selection?.when === 'Now' ? 1 : 0.9;
    const fare = Math.max(20, Math.round(baseFare * distanceFactor * 0.4 * surge));
    return {
      route: `${selection?.from || 'From'} → ${selection?.to || 'To'}`,
      validity: selection?.when || 'Now',
      fare,
      eta: `${10 + (selection?.to?.length % 7 || 2)} mins`,
      occupancy: ['Low', 'Medium', 'High'][(selection?.to?.length || 2) % 3],
    };
  }, [selection]);

  return (
    <div className="max-w-5xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
              <Bus className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Available buses</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Live ETA and occupancy for your route</p>
            </div>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Realtime</span>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-xl border border-neutral-200/60 dark:border-neutral-800 p-4 flex items-center justify-between bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
              <div>
                <p className="text-sm text-neutral-500">KA-05 {i}{i}{i} · AC Express</p>
                <p className="font-medium">ETA {data.eta}</p>
                <p className="text-xs mt-1">Occupancy: <span className="font-medium">{data.occupancy}</span></p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-500">Fare est.</p>
                <p className="text-lg font-semibold">₹{data.fare}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 rounded-2xl p-5">
          <h3 className="font-semibold">Ticket preview</h3>
          <p className="text-sm text-neutral-500 mt-1">Valid on all buses for 2 hours</p>

          <div className="mt-4 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Route</p>
                <p className="font-medium">{data.route}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <QrCode className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                <Clock className="h-4 w-4 text-orange-500" />
                Validity: 2 hours
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-500">Estimated fare</span>
                <p className="text-lg font-semibold">₹{data.fare}</p>
              </div>
            </div>
            <button className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-lg px-4 py-2.5 font-medium">
              <CreditCard className="h-5 w-5" /> Pay & Get Ticket
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
            <Shield className="h-4 w-4" /> Secure payments • Instant refunds for standing passengers
          </div>
        </div>
      </div>
    </div>
  );
}
