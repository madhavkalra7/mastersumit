"use client";
import React from 'react';

export default function Spsection() {
    return (
        <section id="sp-section">
        <div id="sp-pin">
            <div id="sp-bg"></div>
            <div id="sp-overlay"></div>
            <div id="sp-stats">
                <div className="sp-item mobPadding">
                    <div className="sp-num" data-target="3000" data-suffix="+">0 <span className="sp-suffix">+</span></div>
                    <div className="sp-lbl">Attendees</div>
                </div>
                <div className="sp-item mobPadding borderRightNone">
                    <div className="sp-num" data-target="400" data-suffix="+">0 <span className="sp-suffix">+</span></div>
                    <div className="sp-lbl">Tech Startup</div>
                </div>
                <div className="sp-item">
                    <div className="sp-num" data-target="150" data-suffix="+">0<span className="sp-suffix">+</span></div>
                    <div className="sp-lbl">Showcases</div>
                </div>
                <div className="sp-item">
                    <div className="sp-num" data-target="45" data-suffix="+">0<span className="sp-suffix">+</span></div>
                    <div className="sp-lbl">Speakers</div>
                </div>
                <div className="sp-item">
                    <div className="sp-num" data-target="20" data-suffix="+">0<span className="sp-suffix">+</span></div>
                    <div className="sp-lbl">Sessions</div>
                </div>
                <a href="/ai-summit-form" target="_blank" className="sp-btn">Get Tickets
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="white"></path>
                        <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="white"></path>
                    </svg>
                </a>
            </div>
            <div id="sp-heading">Summit Pillars</div>
            <canvas id="sp-cv"></canvas>
            <div id="sp-bar"></div>
            <div id="sp-hint">scroll to ascend</div>
        </div>
    </section>
    );
}
