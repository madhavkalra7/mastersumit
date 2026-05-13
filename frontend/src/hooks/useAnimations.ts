'use client';

import { useEffect, useRef } from 'react';

/**
 * Runs a callback once on mount (client-side only).
 * Automatically manages cleanup via the returned destroy function.
 */
export function useClientEffect(
  callback: () => (() => void) | void,
  deps: React.DependencyList = []
) {
  const mounted = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Slight defer so DOM is fully painted
    const id = requestAnimationFrame(() => {
      mounted.current = true;
      const cleanup = callback();
      return cleanup;
    });
    return () => {
      cancelAnimationFrame(id);
      mounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * Initialises a Swiper instance on mount and destroys it on unmount.
 * Requires window.Swiper (loaded via CDN script in layout.tsx).
 */
export function useSwiper(
  selector: string,
  options: Record<string, unknown>
) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let instance: any = null;
    const init = () => {
      const win = window as any;
      if (win.Swiper && document.querySelector(selector)) {
        instance = new win.Swiper(selector, options);
      }
    };

    // Try immediately, then on load as fallback
    init();
    window.addEventListener('load', init);

    return () => {
      window.removeEventListener('load', init);
      try { instance?.destroy?.(true, true); } catch (_) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/**
 * Implements a seamless infinite auto-scroll on a horizontal container.
 */
export function useMarqueeScroll(
  id: string,
  speed = 0.6,
  direction: 'ltr' | 'rtl' = 'ltr'
) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const el = document.getElementById(id) as HTMLElement | null;
    if (!el) return;

    (el.style as any).msOverflowStyle = 'none';
    el.style.scrollbarWidth = 'none';
    el.style.overflow = 'scroll';

    const originalHtml = el.innerHTML;
    const initKey = 'marqueeInitialized';
    if (!el.dataset[initKey]) {
      // Duplicate content once for seamless loop.
      // Guarded to avoid StrictMode dev double-mount duplications.
      el.innerHTML += originalHtml;
      el.dataset[initKey] = 'true';
    }

    let scrollPos = direction === 'rtl' ? el.scrollWidth / 2 : 0;
    el.scrollLeft = scrollPos;
    let raf: number;
    let paused = false;

    const tick = () => {
      if (!paused) {
        scrollPos += direction === 'rtl' ? -speed : speed;
        if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
        if (scrollPos <= 0 && direction === 'rtl') scrollPos = el.scrollWidth / 2;
        el.scrollLeft = scrollPos;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      // Restore original markup so future mounts start from a clean state.
      el.innerHTML = originalHtml;
      delete el.dataset[initKey];
    };
  }, [id, speed, direction]);
}

/**
 * Plays/pauses a Lottie player when it enters/leaves the viewport.
 */
export function useLottieIntersection(id: string, threshold = 0.5) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const el = document.getElementById(id) as any;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.play?.();
          else el.pause?.();
        });
      },
      { threshold }
    );

    const onReady = () => observer.observe(el);
    el.addEventListener('ready', onReady);
    // If already ready
    if (el.getLottie?.()) observer.observe(el);

    return () => {
      observer.disconnect();
      el.removeEventListener('ready', onReady);
    };
  }, [id, threshold]);
}
