'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroSummit() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const playBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import GSAP only on client
    let cleanup: (() => void) | undefined;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const grid = gridRef.current;
      const section = sectionRef.current;
      if (!grid || !section) return;

      const cols = window.innerWidth > 1440 ? 20 : 14;
      const rows = window.innerWidth > 1440 ? 14 : 10;
      const cells: { el: HTMLDivElement; col: number; row: number }[] = [];

      // Build tile grid
      grid.innerHTML = '';
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = document.createElement('div');
          cell.style.cssText = `
            position: absolute;
            left: ${(c / cols) * 100}%;
            top: ${(r / rows) * 100}%;
            width: calc(${100 / cols}% + 1px);
            height: calc(${100 / rows}% + 1px);
            background: #05060f;
            opacity: 0;
            will-change: opacity;
          `;
          grid.appendChild(cell);
          cells.push({ el: cell, col: c, row: r });
        }
      }

      cells.sort((a, b) => {
        const dA = a.col + (rows - 1 - a.row);
        const dB = b.col + (rows - 1 - b.row);
        return dA - dB;
      });

      const stagger = 0.003;
      const totalDuration = cells.length * stagger;
      const tl = gsap.timeline({ paused: true });

      if (playBtnRef.current) {
        tl.to(playBtnRef.current, { opacity: 0, duration: 0.15, ease: 'none' }, 0);
      }

      cells.forEach((cell, i) => {
        tl.to(cell.el, { opacity: 1, duration: 0.06, ease: 'power2.in' }, i * stagger);
      });

      // Trigger the tile animation when the next section enters
      const revealTrigger = ScrollTrigger.create({
        trigger: section,
        start: 'bottom 90%',
        onEnter: () => {
          tl.timeScale(1).play();
          gsap.to(section, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.inOut',
            delay: totalDuration * 0.2,
          });
        },
        onLeaveBack: () => {
          gsap.killTweensOf(section);
          gsap.set(section, { opacity: 1 });
          tl.timeScale(1.5).reverse();
        },
      });

      cleanup = () => {
        revealTrigger.kill();
        tl.kill();
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
      };
    };

    init().catch(console.error);

    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="heroSection"
      id="heroSummit"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="https://files.mastersunion.link/Hero_Web_.mp4" type="video/mp4" />
      </video>

      {/* Tile grid overlay */}
      <div
        ref={gridRef}
        className="heroTileGrid"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      />

      {/* Play button */}
      <div
        ref={playBtnRef}
        className="playBtn hide"
        style={{ position: 'absolute', zIndex: 3 }}
      >
        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.485 7.08782C21.8383 9.04879 21.8383 13.9512 18.485 15.9122L7.54491 22.3098C4.19162 24.2708 -1.69253e-07 21.8196 0 17.8977L5.52185e-07 5.10234C7.21438e-07 1.18041 4.19162 -1.2708 7.54491 0.690167L18.485 7.08782Z"
            fill="white"
          />
        </svg>
        Play
      </div>
    </section>
  );
}
