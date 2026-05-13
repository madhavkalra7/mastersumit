'use client';

import React from 'react';

const boldPhrases = [
  'Students & young professionals',
  'Educators, universities & institutions',
  'Corporates & enterprise leaders',
  'Governments & policymakers',
  'Global AI leaders & practitioners',
  'one mission',
];

export default function AiWhyMustNotMiss() {
  const fullText =
    "The Great AI Education Show is a global platform shaping the future of AI education, workforce transformation, and responsible AI adoption so no learner, professional, or organisation is left behind. It is a curated global event and education platform that brings together: Students & young professionals, Educators, universities & institutions, Corporates & enterprise leaders, Governments & policymakers, Global AI leaders & practitioners all on one stage, with one mission: AI should not replace people. AI should empower them.";

  // Split text into segments: bold and normal
  const segments = (): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let text = fullText;
    let lastIndex = 0;

    for (const phrase of boldPhrases) {
      const idx = text.indexOf(phrase, lastIndex);
      if (idx === -1) continue;

      if (idx > lastIndex) {
        parts.push(
          <span key={`normal-${lastIndex}-${idx}`} style={{ color: 'rgba(255,255,255,0.6)' }}>
            {text.slice(lastIndex, idx)}
          </span>
        );
      }

      parts.push(
        <span key={`bold-${phrase}`} style={{ color: '#fff', fontWeight: 700 }}>
          {phrase}
        </span>
      );

      lastIndex = idx + phrase.length;
    }

    if (lastIndex < text.length) {
      parts.push(
        <span key={`normal-tail`}>
          {text.slice(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        background: '#000',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          WHY YOU MUST NOT MISS
          <br />
          <span
            style={{
              background: 'linear-gradient(to right, #e879f9, #d946ef)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            THE GREAT AI EDUCATION SHOW
          </span>{' '}
          ?
        </h2>

        {/* Body */}
        <p
          style={{
            marginTop: '28px',
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            maxWidth: '850px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {segments()}
        </p>
      </div>
    </section>
  );
}
