import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initIcons } from './icons';

gsap.registerPlugin(ScrollTrigger);

// ── Advanced GSAP Animations ──
export function initRevealAnimations() {
  ScrollTrigger.getAll().forEach(t => t.kill());

  // 1. Basic Fade/Slide Reveals
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('revealed');
    }

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      onEnter: () => el.classList.add('revealed'),
    });
  });

  ScrollTrigger.refresh();

  // 2. Hero Parallax Effect
  const heroBg = document.querySelector('.hero-bg-img');
  if (heroBg) {
    gsap.to(heroBg, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // 3. Staggered Grid Reveals (Services, Projects, Values)
  const grids = ['.services-grid', '.projects-grid', '.values-grid', '.perks-grid', '.metrics-grid'];
  grids.forEach(selector => {
    const grid = document.querySelector(selector);
    if (grid) {
      const items = Array.from(grid.children);
      
      // Remove CSS reveal class to prevent transition conflicts with GSAP
      items.forEach(item => {
        item.classList.remove('reveal');
        // Set initial state
        gsap.set(item, { y: 60, opacity: 0 });
      });

      ScrollTrigger.create({
        trigger: grid,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            overwrite: 'auto'
          });
        }
      });
    }
  });

  // 4. Hero Text Entrance Animation
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    gsap.fromTo('.hero-eyebrow-pill', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: 'power3.out', clearProps: 'all' });
    gsap.fromTo('.hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out', clearProps: 'all' });
    gsap.fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.35, ease: 'power3.out', clearProps: 'all' });
    gsap.fromTo('.hero-actions .btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.5, stagger: 0.1, ease: 'back.out(1.5)', clearProps: 'all' });
    gsap.fromTo('.hero-disciplines-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.65, ease: 'power3.out', clearProps: 'all' });
  }

  // 5. Magnetic Buttons Effect
  const magneticBtns = document.querySelectorAll('.btn--primary, .btn--accent, .btn--outline, .btn--hero-primary, .btn--hero-secondary, .nav-cta-btn, .filter-btn');
  magneticBtns.forEach(btn => {
    const el = btn as HTMLElement;
    if (el.dataset.magneticInit === 'true') return;
    el.dataset.magneticInit = 'true';

    el.addEventListener('mousemove', (e) => {
      const mouseEvent = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });

  // 6. Image Zoom Parallax
  document.querySelectorAll('.about-img-wrap img, .service-visual img, .x-svc-row__media img').forEach(img => {
    const el = img as HTMLElement;
    if (el.dataset.parallaxInit === 'true') return;
    el.dataset.parallaxInit = 'true';

    gsap.to(img, {
      scale: 1.15,
      ease: 'none',
      scrollTrigger: {
        trigger: img.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
}

// ── Executive Form Submission Success Modal Popup ──
export function showSuccessModal(title: string, message: string) {
  const overlay = document.getElementById('success-modal-overlay');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc');
  const closeBtn = document.getElementById('modal-close-btn');

  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = message;

  if (overlay) {
    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      overlay.classList.add('active');
    });
  }

  const close = () => {
    overlay?.classList.remove('active');
    setTimeout(() => {
      if (overlay && !overlay.classList.contains('active')) {
        overlay.style.display = 'none';
      }
    }, 350);
  };

  if (closeBtn) closeBtn.onclick = close;
  if (overlay) {
    overlay.onclick = (e) => {
      if (e.target === overlay) close();
    };
  }
}

// ── Active Nav Link Update ──
export function updateActiveNav(path: string, hash: string = '') {
  document.querySelectorAll('[data-nav], [data-nav-scroll], [data-mobile-nav], [data-mobile-nav-scroll]').forEach(link => {
    const href = (link as HTMLAnchorElement).getAttribute('href');
    const scrollTarget = (link as HTMLElement).getAttribute('data-nav-scroll') || (link as HTMLElement).getAttribute('data-mobile-nav-scroll');
    
    if (scrollTarget && (hash === scrollTarget || (path === '/' && hash === scrollTarget))) {
      link.classList.add('active');
    } else if (href === path && !hash) {
      link.classList.add('active');
    } else if ((href === '/#about' || href === '/about') && (hash === '#about' || path === '/about')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

export interface PageModule {
  render: () => string;
  init: () => void;
  destroy?: () => void;
}

const routes: Record<string, () => Promise<PageModule>> = {
  '/': () => import('./pages/home').then(m => m.default),
  '/services': () => import('./pages/services').then(m => m.default),
  '/projects': () => import('./pages/projects').then(m => m.default),
  '/contact': () => import('./pages/contact').then(m => m.default),
  '/careers': () => import('./pages/careers').then(m => m.default),
};

export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const routeMetadata: Record<string, RouteMeta> = {
  '/': {
    title: 'ARKS IEC — Integrated Engineering Consultancy LLP',
    description: 'ARKS Integrated Engineering Consultancy LLP (ARKS IEC) delivers multidisciplinary Civil, Electrical (HV/LV/EHV Substations & Power Distribution), MEPF, and Project Management Consultancy solutions globally.',
    canonical: 'https://arksiec.com/'
  },
  '/services': {
    title: 'Services & Disciplines | ARKS IEC',
    description: 'Explore ARKS IEC multidisciplinary engineering disciplines: Civil & Structural, Electrical HV/LV/EHV Substations, MEPF Systems, and Project Management Consultancy.',
    canonical: 'https://arksiec.com/services'
  },
  '/projects': {
    title: 'Projects & Sector Expertise | ARKS IEC',
    description: 'Discover ARKS IEC portfolio of engineering projects across commercial, industrial, high-voltage substations, and critical infrastructure developments.',
    canonical: 'https://arksiec.com/projects'
  },
  '/careers': {
    title: 'Careers & Opportunities | ARKS IEC',
    description: 'Join ARKS Integrated Engineering Consultancy. Explore career opportunities for senior structural, electrical, and MEPF engineering professionals.',
    canonical: 'https://arksiec.com/careers'
  },
  '/contact': {
    title: 'Contact & Consultation | ARKS IEC',
    description: 'Initiate a technical consultation with ARKS IEC engineering leads for Civil, Electrical, MEPF, and PMC infrastructure projects.',
    canonical: 'https://arksiec.com/contact'
  }
};

export function updatePageMetadata(target: string) {
  const meta = routeMetadata[target] || routeMetadata['/'];

  // 1. Update Document Title
  document.title = meta.title;

  // 2. Helper to set or create meta tag
  const setMeta = (selector: string, attr: string, value: string, createTag?: { name?: string; property?: string }) => {
    let el = document.querySelector(selector);
    if (!el && createTag) {
      el = document.createElement('meta');
      if (createTag.name) el.setAttribute('name', createTag.name);
      if (createTag.property) el.setAttribute('property', createTag.property);
      document.head.appendChild(el);
    }
    if (el) {
      el.setAttribute(attr, value);
    }
  };

  // 3. Primary SEO Meta Description
  setMeta('meta[name="description"]', 'content', meta.description, { name: 'description' });

  // 4. OpenGraph Tags
  setMeta('meta[property="og:title"]', 'content', meta.ogTitle || meta.title, { property: 'og:title' });
  setMeta('meta[property="og:description"]', 'content', meta.ogDescription || meta.description, { property: 'og:description' });
  setMeta('meta[property="og:url"]', 'content', meta.canonical, { property: 'og:url' });

  // 5. Twitter Card Tags
  setMeta('meta[name="twitter:title"]', 'content', meta.ogTitle || meta.title, { name: 'twitter:title' });
  setMeta('meta[name="twitter:description"]', 'content', meta.ogDescription || meta.description, { name: 'twitter:description' });

  // 6. Canonical Link Tag
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', meta.canonical);
}

let currentModule: PageModule | null = null;

export async function navigateTo(path: string, pushState = true) {
  let target = path.split('#')[0] || '/';
  let hash = path.includes('#') ? '#' + path.split('#')[1] : '';

  if (target === '/about') {
    target = '/';
    if (!hash) hash = '#about';
  }

  if (!routes[target]) target = '/';

  // Synchronously update page title, meta description, OpenGraph, Twitter, and canonical link
  updatePageMetadata(target);
  updateActiveNav(target, hash);

  const isSamePage = window.location.pathname === target && currentModule !== null;

  if (isSamePage) {
    if (hash) {
      if (pushState) window.history.pushState({}, '', target + hash);
      const el = document.querySelector(hash);
      if (el) {
        const navHeight = 90;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        });
      }
      updateActiveNav(target, hash);
    } else {
      if (pushState) window.history.pushState({}, '', target);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      updateActiveNav(target, '');
    }
    return;
  }

  // Cleanup previous page
  if (currentModule?.destroy) {
    try { currentModule.destroy(); } catch (e) { console.error(e); }
  }

  const app = document.getElementById('app-container');
  if (!app) return;

  const isInitialLoad = currentModule === null;

  // Immediately reset scroll for new page load
  if (!hash && !isInitialLoad) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  // Only transition out during subsequent navigation, not on initial static load
  if (!isInitialLoad) {
    app.classList.add('page-transitioning');
  }

  try {
    const mod = await routes[target]();
    currentModule = mod;

    if (pushState) window.history.pushState({}, '', target + hash);

    // If initial load and HTML was already pre-rendered, preserve it
    if (!isInitialLoad || !app.children.length) {
      app.innerHTML = mod.render();
      initIcons(app);
    }
    
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const navHeight = 90;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else if (!isInitialLoad) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    // Transition in
    requestAnimationFrame(() => {
      app.classList.remove('page-transitioning');
      mod.init();
      initIcons(app);
      initRevealAnimations();
      updateActiveNav(target, hash);
      window.dispatchEvent(new Event('scroll'));
    });
  } catch (err) {
    console.error('Route error:', err);
    app.classList.remove('page-transitioning');
  }
}

export function initRouter() {
  initIcons(document);

  // Support static 404 fallback redirection
  const redirected = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirected && redirected !== location.href) {
    window.history.replaceState(null, '', redirected);
  }

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    navigateTo(window.location.pathname + window.location.hash, false);
  });

  // Initial load
  navigateTo(window.location.pathname + window.location.hash, false);
}
