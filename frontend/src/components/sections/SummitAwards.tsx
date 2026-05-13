'use client';

import React, { useEffect, useState } from 'react';
import { useLottieIntersection } from '@/hooks/useAnimations';

export default function SummitAwards() {
  // Play Lottie animation when visible, pause when not
  useLottieIntersection('awardsLottie', 0.5);

  // If a static/server-rendered awards section already exists on the page
  // avoid rendering the full static points again to prevent duplication.
  // We keep the motion hero (lottie + nominate button) so the moving
  // experience is always available on desktop.
  const [hasStaticDuplicate, setHasStaticDuplicate] = useState(false);

  useEffect(() => {
    // Because this is a client component, any pre-rendered/static HTML
    // will already be present in the DOM. Detect existing section by id.
    const existing = document.querySelectorAll('section#summitAwards');
    if (existing && existing.length > 0) {
      // There is at least one existing element. Treat as duplicate and
      // render only the motion hero from this component.
      setHasStaticDuplicate(true);
    }
  }, []);

  return (
    <section className="aiAwardsSection mob-hide" id="summitAwards">
      <div className="container">
        <h2 className="neuHeadingBold text-center mb-32">Tech &amp; AI Awards</h2>

        {/* @ts-ignore – lottie-player is a custom element declared in global.d.ts */}
        <lottie-player
          id="awardsLottie"
          src="https://lottie.host/59c37646-2d37-4400-8305-cfd1f2d66d47/mqTfUVw2PK.json"
          background="transparent"
          speed="1"
          style={{ width: '100%', height: '100%' }}
          loop
        />

        <a href="/ai-summit-award-form" className="roboBtn greyBtn margin-auto">
          <p className="btnText">Nominate Now</p>
          <span className="arrowWrap">
            <svg className="arrow arrow1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="#090909" />
              <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="#090909" />
            </svg>
            <svg className="arrow arrow2" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="#090909" />
              <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="#090909" />
            </svg>
          </span>
        </a>

        {/* If a static awards block already exists on the page, avoid
            re-rendering the full, static award points here to prevent
            duplicate content. In that case keep only the motion hero
            (lottie + nominate button) above. */}
        {!hasStaticDuplicate && (
          <div className="aiAwardsWrapper">
            <div className="aiAwardsPointWrapper">
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">AI Startup of the Year</p>
            </div>
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">AI Founder of the Year</p>
            </div>
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">AI Transformation Award</p>
            </div>
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">AI Innovator of the Year</p>
            </div>
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">AI Investor of the Year</p>
            </div>
          </div>

          <div className="aiAwardsPointWrapper">
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">AI for Bharat Impact Award</p>
            </div>
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">Disruptor in AI Award</p>
            </div>
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">Young AI Talent Award</p>
            </div>
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">AI in Media &amp; Creativity Award</p>
            </div>
            <div className="aiAwardsPoint">
              <img src="https://images.mastersunion.link/uploads/18032026/v1/Icon.svg" alt="" />
              <p className="aiPointText">Lifetime Contribution to AI</p>
            </div>
            </div>

            <img
              src="https://images.mastersunion.link/uploads/18032026/v1/mainAward.webp"
              alt="Main AI Award"
              className="mainAiAward"
            />
          </div>
        )}
      </div>
    </section>
  );
}
