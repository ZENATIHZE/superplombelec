import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function CTAStrip({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <div className="bg-accent-500 text-brand-800">
        <div className="container-px py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-bold text-lg">Une fuite ? Un doute ? On intervient rapidement.</p>
          <a href={`tel:${SITE.phoneE164}`} className="btn-dark" data-track="strip-call">Appeler {SITE.phone}</a>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-brand-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <circle cx="80" cy="20" r="40" fill="#F2C203" />
          <circle cx="20" cy="80" r="30" fill="white" />
        </svg>
      </div>
      <div className="container-px py-14 relative text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
          Devis gratuit en moins de <span className="text-accent-400">24 heures</span>
        </h2>
        <p className="mt-4 text-brand-100 max-w-2xl mx-auto">
          Décrivez-nous votre situation : on vous rappelle dans la journée et on intervient rapidement en urgence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${SITE.phoneE164}`} className="btn-primary text-lg" data-track="cta-call">
            📞 {SITE.phone}
          </a>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold rounded-lg px-5 py-3" data-track="cta-quote">
            Demander un devis en ligne →
          </Link>
        </div>
      </div>
    </section>
  );
}
