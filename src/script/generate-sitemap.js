const sitemap = require('sitemap');
const fs = require('fs');

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const sitemapObj = sitemap.createSitemap({
  hostname: 'https://yourwebsite.com',
  urls: pages
});

fs.writeFileSync('public/sitemap.xml', sitemapObj.toString());
