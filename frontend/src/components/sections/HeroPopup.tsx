'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroPopup() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Register popup open/close on window for compatibility with legacy button onclick handlers
    window.openPopup = (videoId: string) => {
      const popup = document.getElementById('heroPopup');
      if (popup) {
        popup.style.display = 'flex';
        popup.style.opacity = '1';
      }
      // Try YouTube first
      if (iframeRef.current) {
        iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframeRef.current.style.display = 'block';
      }
      if (videoRef.current) {
        videoRef.current.style.display = 'none';
      }
    };

    window.closePopup = () => {
      const popup = document.getElementById('heroPopup');
      if (popup) {
        popup.style.opacity = '0';
        setTimeout(() => { popup.style.display = 'none'; }, 300);
      }
      if (iframeRef.current) {
        iframeRef.current.src = '';
        iframeRef.current.style.display = 'none';
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.style.display = 'none';
      }
    };

    return () => {
      delete (window as any).openPopup;
      delete (window as any).closePopup;
    };
  }, []);

  return (
    <div
      className="popup"
      id="heroPopup"
      style={{ display: 'none', opacity: 0, transition: 'opacity 0.3s ease' }}
      onClick={(e) => {
        // Close on backdrop click
        if ((e.target as HTMLElement).id === 'heroPopup') window.closePopup?.();
      }}
    >
      <div className="popupBody">
        <div className="floatingClose">
          <img
            src="https://files.mastersunion.link/resources/svg/close.svg"
            alt="Close popup"
            onClick={() => window.closePopup?.()}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="custom-video-area" id="custom-popout-video">
          {/* YouTube iframe */}
          <iframe
            ref={iframeRef}
            className="iframeHero"
            id="iframevideo_MU"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'none' }}
          />

          {/* HTML5 fallback video */}
          <video ref={videoRef} id="html5video_MU" className="iframeHero" controls style={{ display: 'none' }}>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
