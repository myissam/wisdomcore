import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateSitemap() {
  const baseUrl = 'https://wisdomcore.vercel.app';
  const pages = [
    { url: '/', priority: '1.00' },
    { url: '/about/', priority: '0.80' },
    { url: '/blog/', priority: '0.80' },
    { url: '/search/', priority: '0.80' },
    { url: '/blog/who-am-i/', priority: '0.80' },
    { url: '/blog/where-did-come-from/', priority: '0.80' },
    { url: '/blog/how-can-find-god/', priority: '0.80' },
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach(page => {
    xmlContent += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  xmlContent += '</urlset>';

  const sitemapPath = path.join(__dirname, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xmlContent);
  console.log('Sitemap generated successfully in the root directory!');
}

generateSitemap();