import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { navigateTo, initRouter, updateActiveNav } from './router';
import './style.css';
import './theme.css';

gsap.registerPlugin(ScrollTrigger);

// ── Executive Preloader (logo goes B&W → colour in sync with 3s progress bar) ──
function hidePreloader() {
  const el = document.getElementById('preloader');
  if (!el) return;

  // If already shown during this browser session, skip immediately
  if (sessionStorage.getItem('arks_preloader_shown') === 'true') {
    el.remove();
    return;
  }

  // Mark as shown for the current session
  sessionStorage.setItem('arks_preloader_shown', 'true');

  const logo = document.getElementById('preloader-logo');
  const lineFill = document.getElementById('preloader-line-fill');

  const DURATION = 3000;
  const start = performance.now();

  const tick = (now: number) => {
    const p = Math.min((now - start) / DURATION, 1);
    if (lineFill) lineFill.style.width = `${p * 100}%`;
    if (logo) logo.style.filter = `grayscale(${1 - p}) brightness(${0.85 + 0.15 * p})`;
    if (p < 1) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => {
        el.classList.add('exiting');            // 1. content lifts & blurs out
        setTimeout(() => el.classList.add('hidden'), 450);   // 2. curtain wipes up
        setTimeout(() => el.remove(), 1500);    // 3. clean up
      }, 200);
    }
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
    close();
    const href = target.getAttribute('href');
    const scrollTarget = target.getAttribute('data-mobile-nav-scroll');

    if (scrollTarget) {
      navigateTo('/' + scrollTarget);
    } else if (href) {
      navigateTo(href);
    }
  });
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
  hidePreloader();
  initNavbar();
  initMobileMenu();
  initRouter();
  initScrollSpy();
});
