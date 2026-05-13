'use client';

import React from 'react';

const stats = [
  { number: '1', label: 'Day of Innovation' },
  { number: '50+', label: 'Speakers' },
  { number: '400+', label: 'Attendees' },
  { number: '30+', label: 'Partners' },
];

export default function AiStatsSection() {
  return (
    <section style={{ position: 'relative', width: '100%', background: '#000', overflow: 'hidden' }}>
      {/* Top divider */}
      <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.15)' }} />

      {/* Stats row */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '80px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '48px' }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minWidth: '160px',
              }}
            >
              <span
                style={{
                  fontSize: '56px',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  marginTop: '16px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#d946ef',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
