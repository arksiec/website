/**
 * Optimized Local SVG Icon System for ARKS IEC
 * Replaces external FontAwesome CDN (~75KB CSS + ~260KB webfonts) with zero-latency inline SVG symbols.
 */

/**
 * Returns an inline SVG element referencing the global SVG sprite symbol.
 */
export function renderIcon(name: string, extraClasses: string = ''): string {
  const cleanName = name.replace(/^fa-/, '');
  const classAttr = extraClasses ? `x-icon ${extraClasses}` : 'x-icon';
  return `<svg class="${classAttr}" aria-hidden="true" focusable="false"><use href="#fa-${cleanName}"></use></svg>`;
}

/**
 * Automatically populates any empty FontAwesome <i> tags with the corresponding SVG <use> symbol.
 * This ensures dynamic content (e.g. form submit states, modals) gets the proper SVG icon instantly.
 */
export function initIcons(container: ParentNode = document): void {
  const elements = container.querySelectorAll<HTMLElement>('i[class*="fa-"]');
  elements.forEach((el) => {
    // If it already contains an SVG, don't duplicate
    if (el.querySelector('svg')) return;

    // Find the icon class name (e.g. 'fa-arrow-right' -> 'arrow-right')
    const classes = el.className.split(/\s+/);
    for (const c of classes) {
      if (
        c.startsWith('fa-') &&
        !['fa-solid', 'fa-brands', 'fa-regular', 'fa-spin', 'fa-2x', 'fa-3x', 'fa-lg', 'fa-sm', 'fa-fw'].includes(c)
      ) {
        const iconName = c.slice(3);
        el.innerHTML = `<svg class="x-icon" aria-hidden="true" focusable="false"><use href="#fa-${iconName}"></use></svg>`;
        break;
      }
    }
  });
}
