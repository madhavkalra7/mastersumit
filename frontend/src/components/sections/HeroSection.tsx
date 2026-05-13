'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const mobVideoRef = useRef<HTMLVideoElement>(null);

  // Lazy-load mobile video only on small screens
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth > 768) return;

    const video = mobVideoRef.current;
    if (!video) return;

    const source = video.querySelector('source');
    if (!source) return;

    const dataSrc = source.getAttribute('data-src');
    if (dataSrc) {
      source.src = dataSrc;
      video.load();
    }
  }, []);

  return (
    <section className="heroSection mob-visible">
      <div className="overlay hide" />
      <div className="heroSectionImg">
        <div className="heroSectionImg">
          {/* Desktop video */}
          <div className="video-container mob-hide">
            <video autoPlay muted loop playsInline>
              <source src="https://files.mastersunion.link/gif/Copy%20of%20TBM.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Mobile video — lazy loaded */}
          <div className="mob-visible relative">
            <video
              ref={mobVideoRef}
              className="mob-video"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.mastersunion.link/uploads/26032026/v1/HEROFULL.webp"
              preload="none"
            >
              <source data-src="https://files.mastersunion.link/uploads/26032026/v1/HeroMobile_.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="heroSectionContent hide">
        <h1 className="go-HeroTitle font-white">
          UG Programme in
          <br />
          <span className="fr-TitleItalic">Technology and Business Management</span>
        </h1>
        <p className="go-HeroSubtitle">
          A 3+ 1 Dual Degree Programme with Illinois Tech where you learn business by doing business.
          <br className="mob-hide" />
          See how we take business education to a global scale.
        </p>
        <div className="heroSectionBtnWrap">
          <a href="/ug-applynow" className="btnWhite" id="applyNowLinkUG_TBM">
            Apply Now
            <span className="arrowWrap">
              <svg className="arrow arrow1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <g clipPath="url(#clip0_7357_72710)">
                  <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="black" />
                  <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_7357_72710">
                    <rect width="22" height="22" fill="black" />
                  </clipPath>
                </defs>
              </svg>
              <svg className="arrow arrow2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <g clipPath="url(#clip1_7357_72710)">
                  <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="black" />
                  <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip1_7357_72710">
                    <rect width="22" height="22" fill="black" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </a>

          <button
            className="btnWhite outline"
            onClick={() => window.openPopup?.('IyMIGNBmRrg')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M16.875 9.00002C16.8755 9.191 16.8265 9.37886 16.7329 9.54532C16.6392 9.71178 16.5041 9.85117 16.3406 9.94994L6.21 16.1473C6.0392 16.2519 5.84358 16.309 5.64334 16.3127C5.44309 16.3164 5.24549 16.2666 5.07094 16.1684C4.89805 16.0717 4.75402 15.9307 4.65368 15.76C4.55333 15.5892 4.50029 15.3947 4.5 15.1967L4.5 2.80337C4.50029 2.60529 4.55333 2.41086 4.65368 2.24008C4.75402 2.0693 4.89805 1.92832 5.07094 1.83166C5.24549 1.73346 5.44309 1.68365 5.64334 1.68736C5.84358 1.69107 6.0392 1.74816 6.21 1.85275L16.3406 8.05009C16.5041 8.14886 16.6392 8.28826 16.7329 8.45471C16.8265 8.62117 16.8755 8.80903 16.875 9.00002Z" fill="black" />
            </svg>
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}
