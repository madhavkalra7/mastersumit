'use client';

import React, { useEffect, useRef } from 'react';

const attendees = [
  {
    title: 'Higher Education',
    subtitle: 'Administrators & Faculty',
    path: 'M12 3L1 9l11 6 9-4.9V3',
  },
  {
    title: 'Industry Reps',
    subtitle: 'Collaborators & Experts',
    path: 'M20 7h-4V4c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v3H4c-1.1 0-2 0.9-2 2v11c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2z',
  },
  {
    title: 'Govt. Officials',
    subtitle: 'Policymakers & Regulators',
    path: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6',
  },
  {
    title: 'Tech Providers',
    subtitle: 'EdTech & Solutions',
    path: 'M20 13v6H4v-6M4 3h16v10H4z',
  },
  {
    title: 'School Leaders',
    subtitle: 'Principals & Directors',
    path: 'M22 10V6a2 2 0 00-2-2H4a2 2 0 00-2 2v4M16 10v6h4v-6M8 10v6H4v-6',
  },
  {
    title: 'Students',
    subtitle: 'Future Leaders',
    path: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 3a4 4 0 100 8 4 4 0 000-8z',
  },
  {
    title: 'Researchers',
    subtitle: 'Innovators & Scientists',
    path: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35',
  },
  {
    title: 'Startups',
    subtitle: 'Founders & Visionaries',
    path: 'M12 2l-4 4H4v4l4 4 4 4 4-4h4v-4l-4-4-4-4z',
  },
];

export default function AiWhoShouldAttend() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Inject keyframes
    const styleId = 'marquee-who-attend-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
    }

    const cardHtml = ({ title, subtitle, path }: { title: string; subtitle: string; path: string }) => `
      <div style="
        flex-shrink: 0;
        width: 300px;
        height: 200px;
        padding: 40px 32px;
        background: rgba(128, 96, 186, 0.15);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 18px;
        transition: background 0.3s;
      ">
        <div style="
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(217,70,239,0.15);
          border: 1px solid rgba(217,70,239,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <svg width="32" height="32" fill="none" stroke="#e879f9" stroke-width="1.5"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="${path}" />
          </svg>
        </div>
        <span style="font-size:22px; font-weight:700; color:#fff; text-transform:capitalize; line-height:1.2;">
          ${title}
        </span>
        <span style="font-size:15px; color:rgba(255,255,255,0.45); line-height:1.3;">
          ${subtitle}
        </span>
      </div>
    `;

    const doubled = [...attendees, ...attendees].map(cardHtml).join('');
    track.innerHTML = doubled;

    // 40-second full cycle for slow scroll
    track.style.animation = 'marqueeScroll 40s linear infinite';
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        background: '#09090b',
        overflow: 'hidden',
        padding: '64px 0',
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '48px',
          padding: '0 24px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
          }}
        >
          WHO SHOULD{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #e879f9, #d946ef)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ATTEND
          </span>
        </h2>
        <p
          style={{
            marginTop: '16px',
            fontSize: 'clamp(15px, 1.5vw, 19px)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.6,
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Join a diverse community of leaders, innovators, and educators shaping the future of AI in education.
        </p>
      </div>

      {/* Marquee track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: '24px',
          width: 'max-content',
          paddingLeft: '24px',
        }}
      />
    </section>
  );
}
