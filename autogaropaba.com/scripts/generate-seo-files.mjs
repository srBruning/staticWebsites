
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import { garopabaImages } from '../src/data/images.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar variáveis de ambiente
const envPath = process.env.NODE_ENV === 'production' && fs.existsSync(path.join(__dirname, '..', '.env.production'))
  ? path.join(__dirname, '..', '.env.production')
  : path.join(__dirname, '..', '.env');

dotenv.config({ path: envPath });
console.log(`Loading environment variables from: ${envPath}`);

const publicDir = path.join(__dirname, '..', 'public');
const siteUrl = process.env.VITE_SITE_URL || 'https://autogaropaba.com';
console.log('Using site URL:', siteUrl);
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>2024-07-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    ${garopabaImages.map(image => `
    <image:image>
      <image:loc>${siteUrl}${image.src}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.alt}</image:caption>
    </image:image>`).join('')}
  </url>
  <url>
    <loc>${siteUrl}#servicos</loc>
    <lastmod>2024-07-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}#sobre</loc>
    <lastmod>2024-07-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}#garopaba</loc>
    <lastmod>2024-07-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}#contato</loc>
    <lastmod>2024-07-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}blog</loc>
    <lastmod>2024-07-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);

console.log('✅ SEO files (robots.txt, sitemap.xml) generated successfully.');
