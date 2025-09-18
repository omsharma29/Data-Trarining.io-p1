/** next-sitemap.config.js */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  // optional: exclude pages
  exclude: ['/admin/*', '/secret'],
};
