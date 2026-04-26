'use client';
import { useState } from 'react';
import { SITE } from '@/lib/site';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget) as any);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Send failed');
      setStatus('sent');
      // Conversion Google Ads
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: `${SITE.googleAdsId}/${SITE.googleAdsConversionLabel}`,
        });
      }
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Demande envoyée !</h3>
        <p className="text-green-700">
          Nous vous rappelons dans la journée. Pour une intervention urgente, appelez-nous au{' '}
          <a className="font-bold underline" href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-white border border-slate-200 rounded-2xl p-6 lg:p-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="name" label="Nom complet" required />
        <Field name="phone" label="Téléphone" type="tel" required />
      </div>
      <Field name="email" label="Email" type="email" />
      <Field name="address" label="Adresse de l’intervention (ville et CP)" required />
      <Field name="type" label="Type de fuite" as="select"
        options={[
          { v: '', l: '— Choisir —' },
          { v: 'salle-de-bain', l: 'Salle de bain / cuisine' },
          { v: 'plancher-chauffant', l: 'Plancher chauffant' },
          { v: 'plafond', l: 'Plafond / dégât des eaux' },
          { v: 'toiture', l: 'Toiture / terrasse' },
          { v: 'enterree', l: 'Canalisation enterrée' },
          { v: 'autre', l: 'Autre / je ne sais pas' },
        ]} required />
      <Field name="urgency" label="Urgence" as="select"
        options={[
          { v: 'urgent', l: '🔴 Urgent (intervention sous 1 h)' },
          { v: 'today', l: '🟠 Aujourd\'hui ou demain' },
          { v: 'planned', l: '🟢 Planifié (sous 7 jours)' },
        ]} required />
      <Field name="message" label="Décrivez votre situation" as="textarea" />
      <label className="flex items-start gap-2 text-sm text-slate-600">
        <input type="checkbox" name="rgpd" required className="mt-1" />
        <span>J&apos;accepte que mes données soient utilisées pour me recontacter (RGPD).</span>
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full text-lg disabled:opacity-50"
        data-track="form-submit"
      >
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande de devis'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600">Erreur lors de l&apos;envoi. Appelez-nous directement au {SITE.phone}.</p>
      )}
      <p className="text-xs text-slate-500 text-center">
        Réponse garantie sous 24 h ouvrées · Devis gratuit · Sans engagement
      </p>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  as?: 'input' | 'textarea' | 'select';
  options?: { v: string; l: string }[];
};

function Field({ name, label, type = 'text', required, as = 'input', options }: FieldProps) {
  const cls =
    'w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500';
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea id={name} name={name} rows={4} required={required} className={cls} />
      ) : as === 'select' ? (
        <select id={name} name={name} required={required} className={cls}>
          {options!.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} required={required} className={cls} autoComplete="on" />
      )}
    </div>
  );
}
