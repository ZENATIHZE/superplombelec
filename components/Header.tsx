'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import { SITE } from '@/lib/site';

const NAV = [
  { href: '/methode', label: 'Notre méthode' },
  { href: '/zones', label: "Zones d'intervention" },
  { href: '/actualites', label: 'Actualités' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bandeau de disponibilité */}
      <div className="bg-brand-700 text-white text-xs sm:text-sm">
        <div className="container-px py-2 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></span>
          <span>Disponibles aujourd&apos;hui · pour une intervention en Île-de-France</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="container-px flex items-center justify-between h-24">
          <Link href="/" className="flex items-center" aria-label="Accueil Super Plomb Elec">
            <Logo className="h-16 lg:h-20 w-auto" priority />
          </Link>

          {/* Nav desktop */}
          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="text-slate-700 hover:text-brand-600 font-medium transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA téléphone */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneE164}`}
              className="hidden sm:inline-flex btn-primary text-sm sm:text-base"
              data-track="header-call"
            >
              <PhoneIcon /> {SITE.phone}
            </a>
            <a
              href={`tel:${SITE.phoneE164}`}
              aria-label="Appeler"
              className="sm:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent-500 text-brand-700"
              data-track="header-call-mobile"
            >
              <PhoneIcon />
            </a>
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Menu"
              aria-expanded={open}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-300"
            >
              <span className="sr-only">Menu</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M4 6h16M4 12h16M4 18h16" /></>}
              </svg>
            </button>
          </div>
        </div>

        {/* Nav mobile */}
        {open && (
          <nav aria-label="Navigation mobile" className="lg:hidden border-t border-slate-200 bg-white">
            <ul className="container-px py-3 space-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="block py-3 px-2 rounded-md text-slate-700 hover:bg-slate-50">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
