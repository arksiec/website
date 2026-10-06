import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const routes = [
  {
    path: '/',
    file: 'index.html',
    modulePath: './src/pages/home.ts',
    title: 'ARKS IEC — Integrated Engineering Consultancy LLP',
    description: 'ARKS Integrated Engineering Consultancy LLP (ARKS IEC) delivers multidisciplinary Civil, Electrical (HV/LV/EHV Substations & Power Distribution), MEPF, and Project Management Consultancy solutions globally.',
    canonical: 'https://arksiec.com/'
  },
  {
    path: '/services',
    file: 'services/index.html',
    modulePath: './src/pages/services.ts',
    title: 'Services & Disciplines | ARKS IEC',
    description: 'Explore ARKS IEC multidisciplinary engineering disciplines: Civil & Structural, Electrical HV/LV/EHV Substations, MEPF Systems, and Project Management Consultancy.',
    canonical: 'https://arksiec.com/services'
  },
  {
    path: '/projects',
    file: 'projects/index.html',
    modulePath: './src/pages/projects.ts',
    title: 'Projects & Sector Expertise | ARKS IEC',
    description: 'Discover ARKS IEC portfolio of engineering projects across commercial, industrial, high-voltage substations, and critical infrastructure developments.',
    canonical: 'https://arksiec.com/projects'
  },
  {
    path: '/careers',
    file: 'careers/index.html',
    modulePath: './src/pages/careers.ts',
    title: 'Careers & Opportunities | ARKS IEC',
    description: 'Join ARKS Integrated Engineering Consultancy. Explore career opportunities for senior structural, electrical, and MEPF engineering professionals.',
    canonical: 'https://arksiec.com/careers'
  },
  {
    path: '/contact',
    file: 'contact/index.html',
    modulePath: './src/pages/contact.ts',
    title: 'Contact & Consultation | ARKS IEC',
    description: 'Initiate a technical consultation with ARKS IEC engineering leads for Civil, Electrical, MEPF, and PMC infrastructure projects.',
    canonical: 'https://arksiec.com/contact'
  }
];

async function prerender() {
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  console.log('🚀 Starting static pre-rendering for SEO and deep routes...');

  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    for (const route of routes) {
      console.log(`  Pre-rendering: ${route.path} -> dist/${route.file}`);
      const mod = await vite.ssrLoadModule(route.modulePath);
      const content = mod.default.render();

      let html = baseHtml;

      // 1. Update Title
      html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

      // 2. Update Meta Description
      html = html.replace(
        /<meta name="description" content=".*?">/i,
        `<meta name="description" content="${route.description}">`
      );

      // 3. Update OpenGraph Tags
      html = html.replace(
        /<meta property="og:title" content=".*?">/i,
        `<meta property="og:title" content="${route.title}">`
      );
      html = html.replace(
        /<meta property="og:description" content=".*?">/i,
        `<meta property="og:description" content="${route.description}">`
      );
      html = html.replace(
        /<meta property="og:url" content=".*?">/i,
        `<meta property="og:url" content="${route.canonical}">`
      );

      // 4. Update Twitter Tags
      html = html.replace(
        /<meta name="twitter:title" content=".*?">/i,
        `<meta name="twitter:title" content="${route.title}">`
      );
      html = html.replace(
        /<meta name="twitter:description" content=".*?">/i,
        `<meta name="twitter:description" content="${route.description}">`
      );

      // 5. Update or Inject Canonical URL
      if (html.includes('rel="canonical"')) {
        html = html.replace(
          /<link rel="canonical" href=".*?">/i,
          `<link rel="canonical" href="${route.canonical}">`
        );
      } else {
        html = html.replace(
          '</head>',
          `    <link rel="canonical" href="${route.canonical}">\n</head>`
        );
      }

      // 6. Inject Pre-rendered content into <main id="app-container">
      html = html.replace(
        /<main class="app-container" id="app-container"><\/main>/,
        `<main class="app-container" id="app-container">${content}</main>`
      );

      // 7. Update active state in static navbar for this route
      if (route.path !== '/') {
        html = html.replace('class="nav-link active"', 'class="nav-link"');
        html = html.replace('class="mobile-nav-link active"', 'class="mobile-nav-link"');
        html = html.replace(
          new RegExp(`href="${route.path}" class="nav-link"`, 'g'),
          `href="${route.path}" class="nav-link active"`
        );
        html = html.replace(
          new RegExp(`href="${route.path}" data-mobile-nav class="mobile-nav-link"`, 'g'),
          `href="${route.path}" data-mobile-nav class="mobile-nav-link active"`
        );
      }

      const outPath = path.resolve(distDir, route.file);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, 'utf-8');
    }

    console.log('✅ Static pre-rendering completed successfully!');
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
