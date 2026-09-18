// scripts/prerender.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrDir = path.resolve(rootDir, 'dist-ssr');
const blogsPath = path.resolve(rootDir, 'src/data/blogs.json');

const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

// 1. All routes to prerender
const staticRoutes = [
  '/',
  '/prepone',
  '/coachone',
  '/about',
  '/blog',
  '/blogs',
  '/study-material',
  '/test-management',
  '/student-analytics',
  '/ai-evaluation',
  '/institute-operations',
  '/book-demo',
  '/prepone/mock-tests',
  '/prepone/pyqs',
  '/prepone/ai-evaluation-students',
  '/prepone/revision-notes',
  '/prepone/download',
  '/terms-of-service',
  '/privacy-policy'
];

const blogRoutes = blogs.flatMap(b => [
  `/study-material/${b.slug}`,
  `/blogs/${b.slug}`
]);

const allRoutes = [...new Set([...staticRoutes, ...blogRoutes])];

// Canonical routes for sitemap (excluding aliases/redirects)
const sitemapRoutes = [
  { url: 'https://solviq.in/', priority: '1.0', changefreq: 'daily' },
  { url: 'https://solviq.in/prepone', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://solviq.in/coachone', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://solviq.in/about', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://solviq.in/blog', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://solviq.in/test-management', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://solviq.in/student-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://solviq.in/ai-evaluation', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://solviq.in/institute-operations', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://solviq.in/book-demo', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://solviq.in/prepone/mock-tests', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://solviq.in/prepone/pyqs', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://solviq.in/prepone/ai-evaluation-students', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://solviq.in/prepone/revision-notes', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://solviq.in/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  { url: 'https://solviq.in/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  ...blogs.map(b => ({
    url: `https://solviq.in/study-material/${b.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }))
];

async function prerender() {
  console.log('🚀 Starting Static Site Prerendering (SSG)...');

  // Step A: Build SSR bundle
  console.log('📦 Building SSR entry...');
  await build({
    ssr: {
      noExternal: ['react-helmet-async', 'lucide-react', 'react-router-dom', '@emailjs/browser']
    },
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist-ssr',
      rollupOptions: {
        output: {
          format: 'esm'
        }
      }
    }
  });

  const ssrEntryPath = path.resolve(ssrDir, 'entry-server.js');
  const { render } = await import(ssrEntryPath);

  // Read base template
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Please run vite build first.');
  }
  const rawTemplate = fs.readFileSync(templatePath, 'utf8');

  // Clean raw template of static title, description, og, twitter, and canonicals
  const cleanTemplate = rawTemplate
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+name=["'](title|description|keywords|author|robots|googlebot)["'][^>]*\/?>\s*/gi, '')
    .replace(/<meta\s+property=["'](og:[^"']+|twitter:[^"']+)["'][^>]*\/?>\s*/gi, '')
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*\/?>\s*/gi, '')
    .replace(/<link\s+rel=["']canonical["'][^>]*\/?>\s*/gi, '');

  console.log(`⚡ Prerendering ${allRoutes.length} static and dynamic routes...`);

  for (const url of allRoutes) {
    try {
      const { appHtml, helmet } = render(url);

      let headTags = '';
      if (helmet) {
        if (helmet.title) headTags += helmet.title.toString() + '\n';
        if (helmet.meta) headTags += helmet.meta.toString() + '\n';
        if (helmet.link) headTags += helmet.link.toString() + '\n';
        if (helmet.script) headTags += helmet.script.toString() + '\n';
      }

      // Inject rendered app HTML into root div
      let html = cleanTemplate.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // Inject head tags right before </head>
      html = html.replace('</head>', `${headTags}\n</head>`);

      // Inject HTML attributes if any
      if (helmet && helmet.htmlAttributes) {
        const htmlAttrs = helmet.htmlAttributes.toString();
        if (htmlAttrs) {
          html = html.replace('<html', `<html ${htmlAttrs}`);
        }
      }

      // Determine output filepath
      const routePath = url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`;
      const filePath = path.resolve(distDir, routePath);
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`  ✓ Generated: ${url} -> ${path.relative(distDir, filePath)}`);
    } catch (err) {
      console.error(`  ✗ Error rendering ${url}:`, err);
    }
  }

  // Step B: Generate Sitemap XML
  console.log('🗺️  Generating authoritative sitemap.xml...');
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapRoutes.map(r => `  <url>
    <loc>${r.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.resolve(rootDir, 'public/sitemap.xml'), sitemapXml, 'utf8');
  console.log(`  ✓ Written dist/sitemap.xml and public/sitemap.xml (${sitemapRoutes.length} URLs)`);

  // Step C: Generate Robots.txt with AI Bot Rules
  console.log('🤖 Generating robots.txt with search & AI bot permissions...');
  const robotsTxt = `# SolvIQ India - Robots Configuration
# https://solviq.in/

# All standard search crawlers
User-agent: *
Allow: /
Disallow: /api/
Disallow: /prepone/download

# AI & LLM Search Engine Crawlers (AEO / GEO indexing)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bytespider
Allow: /

# Sitemap Reference
Sitemap: https://solviq.in/sitemap.xml
`;

  fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsTxt, 'utf8');
  fs.writeFileSync(path.resolve(rootDir, 'public/robots.txt'), robotsTxt, 'utf8');
  console.log('  ✓ Written dist/robots.txt and public/robots.txt');

  // Step D: Clean up SSR build dir
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
    console.log('🧹 Cleaned up temporary SSR build directory.');
  }

  console.log('🎉 Prerender complete! All pages now serve static, SEO-indexed, AI-readable HTML before JS hydration.');
}

prerender().catch(err => {
  console.error('Fatal Prerender Error:', err);
  process.exit(1);
});
