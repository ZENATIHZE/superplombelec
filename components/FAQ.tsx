'use client';
import { useState } from 'react';
import { FAQ_DATA } from '@/lib/faq-data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section bg-white">
      <div className="container-px max-w-3xl">
        <div className="text-center mb-10">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="h2 mt-2">Tout ce qu&apos;il faut savoir</h2>
        </div>
        <ul className="space-y-3">
          {FAQ_DATA.map((f, i) => (
            <li key={f.q} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left p-5 hover:bg-slate-50"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-brand-700">{f.q}</span>
                <span className={`text-brand-500 text-2xl transition-transform ${open === i ? 'rotate-45' : ''}`} aria-hidden>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm">{f.a}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
