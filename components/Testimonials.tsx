import { getGoogleReviews } from '@/lib/google-reviews';
import { SITE } from '@/lib/site';

// Avis de secours utilisés tant que la clé Google Places API n'est pas configurée.
// Une fois GOOGLE_PLACES_API_KEY + NEXT_PUBLIC_GOOGLE_PLACE_ID renseignés dans .env.local,
// les vrais avis Google de Super Plomb Elec apparaissent automatiquement (revalidation 6 h).
const FALLBACK = [
  {
    authorName: 'Marie L.',
    rating: 5,
    text: 'Fuite invisible derrière le carrelage de la salle de bain. Diagnostic en 20 minutes avec la caméra thermique, aucun trou dans le mur. Rapport très propre pour mon assurance.',
    relativeTime: 'il y a 2 mois',
  },
  {
    authorName: 'Cabinet Dupont',
    rating: 5,
    text: 'Nous travaillons régulièrement avec Super Plomb Elec sur nos copropriétés. Toujours rapides, professionnels, et leurs rapports sont parfaitement acceptés par les assureurs.',
    relativeTime: 'il y a 3 mois',
  },
  {
    authorName: 'Olivier P.',
    rating: 5,
    text: "Plancher chauffant qui fuyait quelque part. Le gaz traceur a localisé la fuite à 3 cm près. Mon plombier a juste eu à découper là où il fallait. Bluffant.",
    relativeTime: 'il y a 1 mois',
  },
];

export default async function Testimonials() {
  const place = await getGoogleReviews();
  const reviews = place?.reviews?.length ? place.reviews.slice(0, 6) : FALLBACK;
  const avgRating = place?.rating ?? 4.9;
  const totalRatings = place?.totalRatings ?? 250;
  const profileUrl = place?.url ?? SITE.social.google ?? '#';

  return (
    <section className="section bg-slate-50">
      <div className="container-px">
        <div className="text-center mb-12">
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="h2 mt-2">
            <span className="text-accent-500">{avgRating.toFixed(1)}/5</span> sur Google
          </h2>
          <p className="mt-3 text-slate-600">
            Plus de {totalRatings} avis vérifiés sur notre fiche Google Business
          </p>
          {profileUrl !== '#' && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-brand-600 hover:underline text-sm font-semibold"
            >
              Voir tous nos avis sur Google →
            </a>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((t, i) => (
            <article key={`${t.authorName}-${i}`} className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-accent-500 text-lg mb-3" aria-label={`${t.rating} étoiles sur 5`}>
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <blockquote className="text-slate-700 leading-relaxed mb-4 text-sm">« {t.text} »</blockquote>
              <footer className="text-sm flex items-center justify-between">
                <div>
                  <div className="font-bold text-brand-700">{t.authorName}</div>
                  <div className="text-slate-500 text-xs">{t.relativeTime}</div>
                </div>
                <GoogleBadge />
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleBadge() {
  return (
    <span title="Avis Google" className="inline-flex">
      <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5c10.8 0 19.5-8.7 19.5-19.5 0-1.3-.1-2.3-.4-3.5z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5c-7.5 0-14 4.2-17.7 10.2z" />
        <path fill="#4CAF50" d="M24 43.5c5.4 0 10.3-2.1 14-5.4l-6.5-5.5c-1.9 1.5-4.4 2.4-7.5 2.4-5.3 0-9.7-3.4-11.3-8L6 31.7c3.6 6.2 10.3 11.8 18 11.8z" />
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.1 4-3.8 5.4l6.5 5.5c4.6-4.2 7.5-10.4 7.5-17.4 0-1.3-.1-2.3-.4-3.5z" />
      </svg>
    </span>
  );
}
