import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { navigateTo, initRouter, updateActiveNav } from './router';
import { initIcons } from './icons';
import './style.css';
import './theme.css';

gsap.registerPlugin(ScrollTrigger);

// ── Executive Preloader (tracks actual document & asset loading status) ──
function initRealPreloader() {
  const el = document.getElementById('preloader');
  if (!el) return;

  // If already shown during this browser session, skip immediately
  if (sessionStorage.getItem('arks_preloader_shown') === 'true') {
    el.remove();
    return;
  }

  // Mark as shown for the current session
  sessionStorage.setItem('arks_preloader_shown', 'true');
  document.body.classList.add('is-preloading');

  const logo = document.getElementById('preloader-logo');
  const lineFill = document.getElementById('preloader-line-fill');

  let currentProgress = 0.15;
  let targetProgress = 0.25;
  let isDone = false;

  const updateDisplay = (p: number) => {
    if (lineFill) lineFill.style.width = `${p * 100}%`;
    if (logo) logo.style.filter = `grayscale(${1 - p}) brightness(${0.85 + 0.15 * p})`;
  };

  updateDisplay(currentProgress);

  // Milestone 1: DOM Ready
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    targetProgress = Math.max(targetProgress, 0.6);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      targetProgress = Math.max(targetProgress, 0.6);
    }, { once: true });
  }

  // Milestone 2: Fonts Loaded
  if (document.fonts) {
    document.fonts.ready.then(() => {
      targetProgress = Math.max(targetProgress, 0.85);
    }).catch(() => {});
  }

  // Milestone 3: Full Page & All Assets Loaded
  const markComplete = () => {
    targetProgress = 1.0;
  };

  if (document.readyState === 'complete') {
    markComplete();
  } else {
    window.addEventListener('load', markComplete, { once: true });
  }

  // Safety fallback so preloader never stalls on external resource delay
  setTimeout(markComplete, 3500);

  // Frame loop smoothly tracking actual progress
  const tick = () => {
    const delta = targetProgress - currentProgress;
    const speed = delta > 0.3 ? 0.15 : 0.08;
    currentProgress += delta * speed;

    if (currentProgress >= 0.99 && targetProgress >= 1.0) {
      currentProgress = 1.0;
      updateDisplay(1.0);
      if (!isDone) {
        isDone = true;
        document.body.classList.remove('is-preloading');
        setTimeout(() => {
          el.classList.add('exiting');            // 1. content lifts & blurs out
          setTimeout(() => el.classList.add('hidden'), 350);   // 2. curtain wipes up
          setTimeout(() => el.remove(), 900);    // 3. clean up
        }, 120);
      }
      return;
    }

    updateDisplay(currentProgress);
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

// ── Scroll Spy for Active Navbar Highlight ──
function initScrollSpy() {
  const handleSpy = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '/about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45) {
          updateActiveNav('/', '#about');
          return;
        }
      }
      updateActiveNav('/', '');
    }
  };

  window.addEventListener('scroll', handleSpy, { passive: true });
  handleSpy();
}

// ── Navbar Scroll Effect & Click Delegation ──
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    const isScrolled = window.scrollY > 30;
    navbar.classList.toggle('scrolled', isScrolled);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Navigation click handling
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('[data-nav], [data-nav-scroll]') as HTMLAnchorElement | null;
    if (!target) return;

    e.preventDefault();
    const href = target.getAttribute('href');
    const scrollTarget = target.getAttribute('data-nav-scroll');

    if (scrollTarget) {
      navigateTo('/' + scrollTarget);
    } else if (href) {
      navigateTo(href);
    }
  });
}

// ── Mobile Menu ──
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-menu-close');

  const setOpen = (open: boolean) => {
    menu?.classList.toggle('active', open);
    overlay?.classList.toggle('active', open);
    toggle?.classList.toggle('active', open);
    toggle?.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle?.addEventListener('click', () => {
    const isOpen = menu?.classList.contains('active') ?? false;
    setOpen(!isOpen);
  });

  closeBtn?.addEventListener('click', () => setOpen(false));
  overlay?.addEventListener('click', () => setOpen(false));

  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('[data-mobile-nav], [data-mobile-nav-scroll]') as HTMLAnchorElement | null;
    if (!target) return;

    e.preventDefault();
    setOpen(false);
    const href = target.getAttribute('href');
    const scrollTarget = target.getAttribute('data-mobile-nav-scroll');

    if (scrollTarget) {
      navigateTo('/' + scrollTarget);
    } else if (href) {
      navigateTo(href);
    }
  });
}

// ── Floating Scroll To Top Button (Triggered in bottom 20% of page) ──
function initScrollToTop() {
  const btn = document.getElementById('scroll-to-top');
  if (!btn) return;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrollable = scrollHeight - clientHeight;

    // Only activate if page has scrollable content
    if (scrollable > 250) {
      // User is within the bottom 20% of the document height
      const reachedBottom20 = (window.scrollY + clientHeight) >= (scrollHeight * 0.80);
      btn.classList.toggle('visible', reachedBottom20);
    } else {
      btn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  handleScroll();
}

// Start real preloader tracking immediately as script runs
initRealPreloader();

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
  initIcons(document);
  initNavbar();
  initMobileMenu();
  initRouter();
  initScrollSpy();
  initScrollToTop();
});
