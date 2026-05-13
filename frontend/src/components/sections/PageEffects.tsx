"use client";

import { useEffect, useRef } from 'react';

export default function PageEffects() {
  const scriptsInjected = useRef(false);

  useEffect(() => {
    if (scriptsInjected.current) return;
    scriptsInjected.current = true;

    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 1s ease';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }, 500);
    }

    const bottomNav = document.querySelector('.bottomNav') as HTMLElement | null;
    if (bottomNav) {
      bottomNav.style.display = 'none';
    }

    const floatingClose = document.querySelector('.floatingClose') as HTMLElement | null;
    if (floatingClose) {
      floatingClose.style.display = 'none';
    }
  }, []);

  return null;
}
