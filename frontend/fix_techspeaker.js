const fs = require('fs');

const filePath = 'src/components/sections/TechSpeaker.tsx';
let code = fs.readFileSync(filePath, 'utf8');

// Add hook import
code = code.replace(
  `"use client";\nimport React from 'react';`,
  `'use client';\nimport React, { useEffect } from 'react';\nimport { useSwiper } from '@/hooks/useAnimations';`
);

// Add hook call after function declaration
code = code.replace(
  `export default function TechSpeaker() {\n    return (`,
  `export default function TechSpeaker() {\n    useSwiper('.speakerSwiper', {\n        spaceBetween: 15,\n        centeredSlides: false,\n        navigation: {\n            nextEl: '.speakerSwiper-Next',\n            prevEl: '.speakerSwiper-Prev',\n        },\n        pagination: { el: '.swiper-pagination', clickable: true },\n        breakpoints: {\n            0: { slidesPerView: 1.6 },\n            768: { slidesPerView: 1.6 },\n            1024: { slidesPerView: 5, centeredSlides: true },\n            1366: { slidesPerView: 5, centeredSlides: true, spaceBetween: 20 },\n            1440: { slidesPerView: 5, centeredSlides: true, spaceBetween: 20 },\n            1600: { slidesPerView: 5, centeredSlides: true, spaceBetween: 20 },\n            1920: { slidesPerView: 5, centeredSlides: true, spaceBetween: 20 },\n        },\n    });\n\n    return (`
);

// Remove the inline <script> block at the end
code = code.replace(
  /<script dangerouslySetInnerHTML=\{\{ __html: `[\s\S]*?` \}\} \/>/,
  ''
);

fs.writeFileSync(filePath, code);
console.log('TechSpeaker cleaned');
