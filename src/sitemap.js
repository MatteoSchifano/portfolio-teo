
const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: 'https://matteovincenzoschifano.web.app' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

sitemap.write({ url: '/', changefreq: 'daily', priority: 0.3 });
sitemap.end();