'use client';

import React from 'react';

export default function AiSpeakers() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          textAlign: 'center',
          padding: '80px 24px 40px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          Our Speakers
        </h2>
        <p
          style={{
            marginTop: '20px',
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.7,
          }}
        >
          We are curating an exceptional lineup of speakers for The Great AI Education Show.
          Stay tuned for announcements on the visionaries and experts who will be sharing their
          insights on the future of AI in education.
        </p>
      </div>

      {/* Panel 1 — Image Right, Text Left */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '500px',
        }}
      >
        {/* Left — Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 60px',
            background: 'linear-gradient(135deg, rgba(217,70,239,0.08) 0%, rgba(0,0,0,0.95) 100%)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Want to Speak on the{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f0abfc, #e879f9, #d946ef)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Most Important AI Stage
            </span>{' '}
            on the Planet?
          </h3>

          <ul
            style={{
              listStyle: 'none',
              margin: '32px 0 0',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {[
              'Selective platform in global AI education ecosystem',
              'Curated conversations shaping future education',
              'Visionaries delivering impact on the ground',
              'Leading global enterprises & research institutions',
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '15px',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: '#e879f9', marginTop: '2px' }}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Image */}
        <div
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1590657738022-7f4c2fec495a?w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Panel 2 — Image Left, Text Right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '450px',
        }}
      >
        {/* Left — Image */}
        <div
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1529070538775-81875974f82b?w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Right — Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 60px',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(217,70,239,0.06) 100%)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(24px, 3vw, 40px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Curating{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f0abfc, #e879f9, #d946ef)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Impact
            </span>
          </h3>

          <p
            style={{
              marginTop: '20px',
              fontSize: '15px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            The Great AI Education Show stage is one of the most selective platforms in the
            global AI education ecosystem. Only a few are chosen because we curate the conversations
            that truly shape the future.
          </p>

          <ul
            style={{
              listStyle: 'none',
              margin: '28px 0 0',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {[
              'Redefining how talent is built & skills are transformed at scale',
              'Visionaries & practitioners delivering impact on the ground',
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '15px',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: '#e879f9', marginTop: '2px' }}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
