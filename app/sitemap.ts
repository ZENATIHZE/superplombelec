import { MetadataRoute } from 'next';
import { ZONES } from '@/lib/zones';
import { ARTICLES } from '@/lib/articles';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    { url: SITE.url, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${SITE.url}/methode`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${SITE.url}/zones`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${SITE.url}/actualites`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${SITE.url}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE.url}/mentions-legales`, priority: 0.3, changeFrequency: 'yearly' as const },
  ].map((p) => ({ ...p, lastModified }));

  const zonePages = ZONES.map((z) => ({
    url: `${SITE.url}/zones/${z.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: z.highlight ? 0.85 : 0.7,
  }));

  const articlePages = ARTICLES.map((a) => ({
    url: `${SITE.url}/actualites/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...zonePages, ...articlePages];
}
