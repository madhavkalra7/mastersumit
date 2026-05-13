'use client';

import React, { useEffect, useRef } from 'react';

const awards = [
  { name: 'AI Startup of the Year', number: '01' },
  { name: 'AI Founder of the Year', number: '02' },
  { name: 'Enterprise AI Transformation', number: '03' },
  { name: 'AI Innovator of the Year', number: '04' },
  { name: 'AI Investor of the Year', number: '05' },
  { name: 'AI for Bharat Impact', number: '06' },
  { name: 'Disruptor in AI', number: '07' },
  { name: 'Young AI Talent', number: '08' },
  { name: 'AI in Media & Creativity', number: '09' },
  { name: 'Lifetime Contribution to AI', number: '10' },
];

export default function AiAwardsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = section.querySelectorAll('.award-card');
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add('award-card-visible');
            }, i * 100);
          });
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#000',
        padding: '80px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,216,249,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative' }}>
        <span
          style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#e879f9',
            marginBottom: '16px',
            padding: '6px 20px',
            border: '1px solid rgba(233,216,249,0.3)',
            borderRadius: '9999px',
          }}
        >
          Celebrating Excellence
        </span>
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          Tech &amp; AI{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #f0abfc, #e879f9, #d946ef)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Awards
          </span>
        </h2>
        <p
          style={{
            marginTop: '16px',
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}
        >
          Honoring the visionaries shaping AI's future across 10 categories of leadership &amp; innovation.
        </p>
      </div>

      {/* Awards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {awards.map((award, i) => (
          <div
            key={award.number}
            className="award-card"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div
              style={{
                position: 'relative',
                padding: '20px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '100%',
                cursor: 'default',
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(to right, transparent, #e879f9, transparent)',
                  borderRadius: '2px',
                }}
              />

              {/* Trophy Image */}
              <div
                style={{
                  width: '100%',
                  height: '130px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '14px',
                  background: 'rgba(255,255,255,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="https://images.mastersunion.link/uploads/01042026/v1/Gemini_Generated_Image_8ou3w8ou3w8ou3w81.webp"
                  alt={`${award.name} trophy`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(0.3) brightness(0.85)',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </div>

              {/* Number */}
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'rgba(233,216,249,0.35)',
                  letterSpacing: '0.1em',
                  fontFamily: 'monospace',
                }}
              >
                {award.number}
              </span>

              {/* Award name */}
              <p
                style={{
                  marginTop: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#fff',
                  lineHeight: 1.3,
                }}
              >
                {award.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS */}
      <style>{`
        .award-card-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .award-card:hover .award-card > div {
          border-color: rgba(233,216,249,0.15) !important;
          background: rgba(255,255,255,0.05) !important;
        }
        .award-card:hover img {
          filter: grayscale(0) brightness(1) !important;
        }
      `}</style>
    </section>
  );
}
