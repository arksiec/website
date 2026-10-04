const fs = require('fs');
const path = require('path');

const replacements = {
  // Contact
  '/Photos/user/media_1791046182514.png': '/Photos/contact-atrium.jpg',
  // About
  '/Photos/user/media_1791044900084.png': '/Photos/about-modern-tower.jpg',
  // Projects
  '/Photos/user/media_1791037474540.png': '/Photos/projects-hero-complex.jpg',
  '/Photos/user/media_1791037876333.png': '/Photos/project-electrical-branded.jpg',
  '/Photos/user/media_1791043055714.png': '/Photos/project-civil-branded.jpg',
  '/Photos/user/media_1791044364525.png': '/Photos/project-mepf-branded.jpg',
  '/Photos/user/media_1791039631753.png': '/Photos/project-pmc-branded.jpg',
  // Services
  '/Photos/user/media_1791038740960.png': '/Photos/services-hero-bim.jpg',
  '/Photos/user/media_1791034617018.png': '/Photos/service-civil-structural.jpg',
  '/Photos/user/media_1791034636992.png': '/Photos/service-electrical-ehv.jpg',
  '/Photos/user/media_1791039544101.png': '/Photos/service-mepf-hvac.jpg',
  '/Photos/user/media_1791046165502.png': '/Photos/service-pmc-management.jpg',
  // Home
  '/Photos/user/media_1791034627237.png': '/Photos/hero-power-grid.jpg',
  '/Photos/user/media_1791034865848.png': '/Photos/hero-civil-megastructure.jpg',
  '/Photos/user/media_1791036040412.png': '/Photos/hero-substation-twilight.jpg',
  '/Photos/user/media_1791039077390.png': '/Photos/hero-bim-workstation.jpg',
  '/Photos/user/media_1791038991271.jpg': '/Photos/hero-infrastructure-panorama.jpg',
  '/Photos/user/media_1791039754065.png': '/Photos/about-modern-tower.jpg',
  '/Photos/user/media_1791039523657.png': '/Photos/about-blueprint-review.jpg',
  '/Photos/user/media_1791037715067.png': '/Photos/value-integrity.jpg',
  '/Photos/user/media_1791044728537.png': '/Photos/value-excellence.jpg',
  '/Photos/user/media_1791039552617.png': '/Photos/value-collaboration.jpg',
  '/Photos/user/media_1791037662972.png': '/Photos/value-sustainability.jpg',
  '/Photos/user/media_1791035218037.png': '/Photos/value-innovation.jpg',
  '/Photos/user/media_1791046591030.png': '/Photos/value-safety.jpg'
};

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  for (const [oldPath, newPath] of Object.entries(replacements)) {
    if (content.includes(oldPath)) {
      content = content.split(oldPath).join(newPath);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
});
