import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/mentions-legales'] },
      // Bloquer les bots IA si vous ne voulez pas être indexé pour entraînement
      // { userAgent: 'GPTBot', disallow: '/' },
      // { userAgent: 'Google-Extended', disallow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
