'use client';

import React from 'react';

export default function AiEducationHero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage:
            'url(/aiworld.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'rgba(0,0,0,0.6)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '900px',
          width: '100%',
          padding: '0 24px',
        }}
      >
        {/* Date + Location */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '40px',
            fontSize: '14px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="#d946ef"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3M4 21h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>25th April, 2026</span>
          </div>
          <div
            style={{
              width: '1px',
              height: '16px',
              background: 'rgba(255,255,255,0.3)',
            }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="#d946ef"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2c-3.866 0-7 3.134-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
              />
            </svg>
            <span>IIT Delhi, New Delhi</span>
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 'clamp(48px, 8vw, 120px)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: '#fff',
            margin: 0,
          }}
        >
          <span style={{ display: 'block' }}>THE GREAT</span>
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(to right, #f0abfc, #e879f9, #d946ef)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AI EDUCATION
          </span>
          <span style={{ display: 'block' }}>SHOW</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            marginTop: '24px',
            fontSize: 'clamp(16px, 2vw, 24px)',
            color: 'rgba(255,255,255,0.6)',
            margin: '24px 0 0 0',
            maxWidth: '640px',
          }}
        >
          India's Education Revolution: For the World, With the World.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {/* Register Now */}
          <a
            href="#register"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 40px',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #e879f9, #d946ef)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              border: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Register Now
          </a>

          {/* Join as Partner */}
          <a
            href="#partners"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 40px',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              background: 'transparent',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            Join as Partner
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4-4 4M21 12H9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
