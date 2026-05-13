"use client";
import React, { useEffect, useState } from 'react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onOpen = () => setIsOpen(true);
        window.addEventListener('mu-mobile-menu-open', onOpen as EventListener);

        return () => {
            window.removeEventListener('mu-mobile-menu-open', onOpen as EventListener);
        };
    }, []);

    return (
        <div className="mobileMenu ">
      <header className="mobileHeader">
          <div className="container">
              <div className="hamburgerParent">
                  <a href="/" className="menuLogo">
                      <img loading="lazy" src="https://files.mastersunion.link/resources/animateds/logoanimationblack.gif" alt="MU Logo" />
                  </a>
                  <button
                      type="button"
                      className="hamburger"
                      aria-label="Open menu"
                      onClick={() => setIsOpen(true)}
                  >
                      <img loading="lazy" src="https://files.mastersunion.link/resources/svg/hamburgerMenu.svg" alt="Open menu" />
                  </button>
                  <a href="/ai-summit-form" className="sp-btn">Get Tickets <img src="https://images.mastersunion.link/uploads/18022025/v1/black_arrow_image.svg" alt="Icon" /></a>
  
              </div>
          </div>
      </header>
  
      <div className={`mobileHeaderContent ${isOpen ? 'active' : ''}`} id="mobileHeaderContent">
          <div className="headerContentMob">
              <div className="mobMenuHeader">
                  <a href="/" className="logo">
                      <img loading="lazy" src="https://files.mastersunion.link/resources/animateds/logoanimationblack.gif" alt="MU Logo" />
                  </a>
                  <div
                      className="closeIcon"
                      id="mobileMenuCloseBtn"
                      tabIndex={0}
                      aria-label="Close menu"
                      role="button"
                      onClick={() => setIsOpen(false)}
                      onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              setIsOpen(false);
                          }
                      }}
                  >
                      <img loading="lazy" src="https://files.mastersunion.link/resources/svg/menuCloseIcon.svg" alt="Close menu" />
                  </div>
              </div>
  
  
          </div>
      </div>
  </div>
    );
}
