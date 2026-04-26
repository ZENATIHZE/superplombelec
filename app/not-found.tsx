import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function NotFound() {
  return (
    <div className="container-px py-24 text-center">
      <h1 className="h1 mb-4">Page introuvable</h1>
      <p className="text-slate-600 mb-8">La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
      <div className="flex justify-center gap-3">
        <Link href="/" className="btn-primary">Retour à l&apos;accueil</Link>
        <a href={`tel:${SITE.phoneE164}`} className="btn-secondary">📞 {SITE.phone}</a>
      </div>
    </div>
  );
}
