"use client";
import React from 'react';

export default function Header() {
    const openMobileMenu = () => {
        window.dispatchEvent(new Event('mu-mobile-menu-open'));
    };

    return (
        <header className="topHeader forhomepage forAiSummit">
      <div className="container">
          <div className="upperHeader">
              <div className="summitHeader">
                  <a href="/" className="menuLogo">
                      <img loading="lazy" src="https://files.mastersunion.link/resources/animateds/logoanimationblack.gif" alt="MU Logo" />
                  </a>
                  <button
                      type="button"
                      className="hamburger"
                      aria-label="Open menu"
                      onClick={openMobileMenu}
                  >
                      <img loading="lazy" src="https://files.mastersunion.link/resources/svg/hamburgerMenu.svg" alt="Open menu" />
                  </button>
                  <nav className="topNav">
  
                      <a className="navItem " href="/#summitAgendaAi">Agenda</a>
                      <a className="navItem" href="/#summitAppearances">Appearances</a>
                      <a className="navItem" href="/#summitAwards">Awards</a>
                      <a className="navItem" href="/#summitPartners">Partner with Us</a>
                      <a className="sp-btn" href="/ai-summit-form">Get Tickets
                          <span className="arrowWrap">
                              <svg className="arrow arrow1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="#090909"></path>
                                  <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="#090909"></path>
                              </svg>
  
                              <svg className="arrow arrow2" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="https://www.w3.org/2000/svg">
                                  <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="#090909"></path>
                                  <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="#090909"></path>
                              </svg>
  
                          </span>
                      </a>
                  </nav>
              </div>
          </div>
  
      </div>
  
  
  </header>
    );
}
