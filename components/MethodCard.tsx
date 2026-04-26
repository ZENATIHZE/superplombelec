import Link from 'next/link';
import type { Method } from '@/lib/services';

const ICONS: Record<string, JSX.Element> = {
  'camera-thermique': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="13" rx="2"/><circle cx="12" cy="12.5" r="3.5"/><path d="M5 6V4h4v2"/>
    </svg>
  ),
  'gaz-traceur': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4h6v3a3 3 0 0 1 3 3v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9a3 3 0 0 1 3-3z"/><path d="M12 11v7M9 14h6"/>
    </svg>
  ),
  'correlateur-acoustique': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12c1.5-3 4-3 5 0s3.5 5 5 0 3-3 4 0 2 2 4 0"/>
    </svg>
  ),
  'electroacoustique': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3v4z"/><path d="M3 19a2 2 0 0 0 2 2h1v-6H3v4z"/>
    </svg>
  ),
  'inspection-camera-endoscopique': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20s4-8 10-8 10 8 10 8"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  'colorant-fluoresceine': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z"/>
    </svg>
  ),
};

export default function MethodCard({ method, anchor = false }: { method: Method; anchor?: boolean }) {
  return (
    <article
      id={anchor ? method.slug : undefined}
      className="group bg-white border border-slate-200 hover:border-brand-300 rounded-2xl p-6 transition-all hover:shadow-lg flex flex-col"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
        <div className="w-7 h-7">{ICONS[method.slug] ?? ICONS['camera-thermique']}</div>
      </div>
      <h3 className="text-lg font-bold text-brand-700 mb-2">{method.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{method.shortDescription}</p>
      <ul className="space-y-1.5 text-sm text-slate-700 mb-5">
        {method.benefits.slice(0, 3).map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="text-accent-500 mt-0.5">✓</span><span>{b}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/methode#${method.slug}`}
        className="mt-auto text-brand-600 font-semibold text-sm hover:text-brand-700 inline-flex items-center gap-1"
      >
        En savoir plus <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
