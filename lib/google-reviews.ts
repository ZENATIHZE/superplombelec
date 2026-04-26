// Récupération des avis Google via Google Places API (Place Details).
// Documentation : https://developers.google.com/maps/documentation/places/web-service/details
//
// Étapes pour activer :
// 1. Créer une clé API sur https://console.cloud.google.com/
//    → Activer "Places API"
//    → Créer une clé API, restreindre par référer HTTP (votre domaine)
// 2. Trouver votre Place ID :
//    → https://developers.google.com/maps/documentation/places/web-service/place-id
//    → Coller "Super Plomb Elec Rueil-Malmaison" dans l'outil
// 3. Ajouter dans .env.local :
//    GOOGLE_PLACES_API_KEY=votre_cle
//    NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJxxxxxxxxxxxxxxxxxxxxx

import { SITE } from './site';

export type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto?: string;
  language?: string;
};

export type PlaceData = {
  name: string;
  rating: number;
  totalRatings: number;
  reviews: GoogleReview[];
  url?: string;
};

const PLACES_URL = 'https://maps.googleapis.com/maps/api/place/details/json';

export async function getGoogleReviews(): Promise<PlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = SITE.googlePlaceId;

  if (!apiKey || !placeId) return null;

  const params = new URLSearchParams({
    place_id: placeId,
    key: apiKey,
    fields: 'name,rating,user_ratings_total,reviews,url',
    language: 'fr',
    reviews_sort: 'newest',
  });

  try {
    const res = await fetch(`${PLACES_URL}?${params}`, {
      // Cache 6 h - les avis Google ne changent pas constamment
      next: { revalidate: 60 * 60 * 6 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== 'OK' || !data.result) return null;

    const r = data.result;
    return {
      name: r.name,
      rating: r.rating ?? 0,
      totalRatings: r.user_ratings_total ?? 0,
      url: r.url,
      reviews: (r.reviews ?? []).map((rv: any) => ({
        authorName: rv.author_name,
        rating: rv.rating,
        text: rv.text,
        relativeTime: rv.relative_time_description,
        profilePhoto: rv.profile_photo_url,
        language: rv.language,
      })),
    };
  } catch (e) {
    console.error('[Google Reviews] fetch error:', e);
    return null;
  }
}
