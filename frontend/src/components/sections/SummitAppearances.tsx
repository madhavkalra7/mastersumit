'use client';
import React, { useEffect } from 'react';
import { useMarqueeScroll } from '@/hooks/useAnimations';

export default function SummitAppearances() {
    // Increase scroll speed for horizontal marquee containers
    useMarqueeScroll('slider', 1.0, 'ltr');
    useMarqueeScroll('sliderReverse', 1.0, 'rtl');

    // Speed up CSS-based ribbon animations (e.g., THE NEXT TECH ribbon)
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const tracks = document.querySelectorAll<HTMLElement>('.techMarqueeTrack');
        tracks.forEach((el) => {
            try {
                el.style.animationDuration = '6s';
                el.style.animationTimingFunction = 'linear';
            } catch (e) {
                // ignore
            }
        });
    }, []);

    return (
        <section className="techSpeaker " id="summitAppearances">
        <div className="techSpeakerWrapper">
            <h2 className="neuHeadingBold text-center">Institutional Appearances</h2>

            <div className="mob-hide">
                <div className="marqueeslidersAuto" id="slider">
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/30032026/v1/Image041.webp" alt="" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pratham Mittal </h2>
                                <p className="techMasterPosition">Founder &amp; CEO
                
                                </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo512.png" alt="" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master01.webp" alt="Ghazal Alagh" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ghazal Alagh</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo01.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master02.webp" alt="" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kaivalya Vohra</h2>
                                <p className="techMasterPosition">Co-founder &amp; CTO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo02.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master03.webp" alt="Suresh Narayanan" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Suresh Narayanan</h2>
                                <p className="techMasterPosition">Former Chairman &amp; MD </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo03.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master04.webp" alt="Shiv Shivakumar" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Shiv Shivakumar</h2>
                                <p className="techMasterPosition">Former Chairman &amp; CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo04.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master05.webp" alt="Malika Datt Sadani" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Malika Datt Sadani</h2>
                                <p className="techMasterPosition">Founder &amp; CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo05.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master06.webp" alt="Rohit Kapoor" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Rohit Kapoor</h2>
                                <p className="techMasterPosition">CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo06.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master07.webp" alt="Gaurav Khatri" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Gaurav Khatri</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo07.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master08.webp" alt="Ashish Singhal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ashish Singhal</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo08.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master09.webp" alt="Priyanka Gill" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Priyanka Gill</h2>
                                <p className="techMasterPosition">Former Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo09.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master10.webp" alt="Mikhil Innani" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Mikhil Innani</h2>
                                <p className="techMasterPosition">Former Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo10.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master11.webp" alt="Kirthiga Reddy" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kirthiga Reddy</h2>
                                <p className="techMasterPosition">Former MD </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo11.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master12.webp" alt="Bikram Singh Bedi" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Bikram Singh Bedi</h2>
                                <p className="techMasterPosition">Former India MD, Google Cloud </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo12.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master13.webp" alt="Kunal Bahl" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kunal Bahl</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo13.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master14.webp" alt="Upasana Taku" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Upasana Taku</h2>
                                <p className="techMasterPosition">Co-founder &amp; CFO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo14.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master15.webp" alt="Ronnie Screwala" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ronnie Screwala</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo15.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master16.webp" alt="Vikram Pawah" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Vikram Pawah</h2>
                                <p className="techMasterPosition">President and CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo16.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master17.webp" alt="Arjun Vaidya" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Arjun Vaidya</h2>
                                <p className="techMasterPosition">Former CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo17.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master18.webp" alt="Prashant Tandon" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Prashant Tandon</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo18.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master19.webp" alt="Suhasini Sampath" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Suhasini Sampath</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo19.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master20.webp" alt="Midhula D." className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Midhula D.</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo20.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/30032026/v1/Image041.webp" alt="" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pratham Mittal </h2>
                                <p className="techMasterPosition">Founder &amp; CEO
                
                                </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo512.png" alt="" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master01.webp" alt="Ghazal Alagh" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ghazal Alagh</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo01.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master02.webp" alt="Kaivalya Vohra" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kaivalya Vohra</h2>
                                <p className="techMasterPosition">Co-founder &amp; CTO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo02.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master03.webp" alt="Suresh Narayanan" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Suresh Narayanan</h2>
                                <p className="techMasterPosition">Former Chairman &amp; MD </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo03.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master04.webp" alt="Shiv Shivakumar" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Shiv Shivakumar</h2>
                                <p className="techMasterPosition">Former Chairman &amp; CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo04.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master05.webp" alt="Malika Datt Sadani" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Malika Datt Sadani</h2>
                                <p className="techMasterPosition">Founder &amp; CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo05.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master06.webp" alt="Rohit Kapoor" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Rohit Kapoor</h2>
                                <p className="techMasterPosition">CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo06.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master07.webp" alt="Gaurav Khatri" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Gaurav Khatri</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo07.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master08.webp" alt="Ashish Singhal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ashish Singhal</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo08.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master09.webp" alt="Priyanka Gill" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Priyanka Gill</h2>
                                <p className="techMasterPosition">Former Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo09.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master10.webp" alt="Mikhil Innani" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Mikhil Innani</h2>
                                <p className="techMasterPosition">Former Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo10.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master11.webp" alt="Kirthiga Reddy" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kirthiga Reddy</h2>
                                <p className="techMasterPosition">Former MD </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo11.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master12.webp" alt="Bikram Singh Bedi" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Bikram Singh Bedi</h2>
                                <p className="techMasterPosition">Former India MD, Google Cloud </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo12.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master13.webp" alt="Kunal Bahl" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kunal Bahl</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo13.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master14.webp" alt="Upasana Taku" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Upasana Taku</h2>
                                <p className="techMasterPosition">Co-founder &amp; CFO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo14.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master15.webp" alt="Ronnie Screwal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ronnie Screwala</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo15.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master16.webp" alt="Vikram Pawah" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Vikram Pawah</h2>
                                <p className="techMasterPosition">President &amp; CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo16.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master17.webp" alt="Arjun Vaidy" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Arjun Vaidya</h2>
                                <p className="techMasterPosition">Former CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo17.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master18.webp" alt="Prashant Tandon" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Prashant Tandon</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo18.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master19.webp" alt="Suhasini Sampath" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Suhasini Sampath</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo19.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master20.webp" alt="Midhula D." className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Midhula D.</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo20.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                
                </div>
                
                <div className="marqueeslidersAuto reverse" id="sliderReverse">
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/03042026/v1/PANKAJBANSAL1.webp" alt="Pankaj Bansal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pankaj Bansal</h2>
                                <p className="techMasterPosition">Co-founder &amp; Group CEO</p>
                                <img src="https://images.mastersunion.link/uploads/03042026/v1/logo51.png" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master21.webp" alt="" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Satish Shukla</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo21.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master22.webp" alt="Jyoti Malhotra" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Jyoti Malhotra</h2>
                                <p className="techMasterPosition">MD &amp; CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo22.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master23.webp" alt="Anupam Mittal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Anupam Mittal</h2>
                                <p className="techMasterPosition">Founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo23.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master24.webp" alt="Santhosh V." className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Santhosh V.</h2>
                                <p className="techMasterPosition">MD India</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo24.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master25.webp" alt="Avnish Bajaj" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Avnish Bajaj</h2>
                                <p className="techMasterPosition">Founder &amp; Investor</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo25.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master26.webp" alt="Manoj Kohli" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Manoj Kohli</h2>
                                <p className="techMasterPosition">Former Country Head</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo26.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master27.webp" alt="Dr. Edward Rogers" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Edward Rogers</h2>
                                <p className="techMasterPosition">Former CKO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo27.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master28.webp" alt="C. Raghu Raman" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">C. Raghu Raman</h2>
                                <p className="techMasterPosition">Former President</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo28.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master29.webp" alt="Anand Srinivasan" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Anand Srinivasan</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo29.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master30.webp" alt="Vipin Sondhi" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Vipin Sondhi</h2>
                                <p className="techMasterPosition">Former MD and CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo30.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master31.webp" alt="Pramod Bhasin" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pramod Bhasin</h2>
                                <p className="techMasterPosition">Founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo31.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master32.webp" alt="Jaspreet Bindra" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Jaspreet Bindra</h2>
                                <p className="techMasterPosition">Former CDO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo32.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master33.webp" alt="Nidhi Hola" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Nidhi Hola</h2>
                                <p className="techMasterPosition">Country Marketing Director</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo33.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master34.webp" alt="Mukesh Jain" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Mukesh Jain</h2>
                                <p className="techMasterPosition">Group CTO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo34.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master35.webp" alt="Akash Gupta" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Akash Gupta</h2>
                                <p className="techMasterPosition">Co-founder and CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo35.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master36.webp" alt="Manpreet Singh Ahuja" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Manpreet Singh Ahuja</h2>
                                <p className="techMasterPosition">CDO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo36.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master37.webp" alt="Sanjeev B." className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Sanjeev B.</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo37.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master38.webp" alt="Amitabh Kant" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Amitabh Kant</h2>
                                <p className="techMasterPosition">Former CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo38.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master39.webp" alt="Peyush Bansal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Peyush Bansal</h2>
                                <p className="techMasterPosition">CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo39.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master40.webp" alt="Shri Nitin Gadkari" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Shri Nitin Gadkari</h2>
                                <p className="techMasterPosition">Minister of Roads &amp; Transport</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo40.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                     <div className="slide-box">
                                    <div className="techMasterCardNew">
                                        <div className="techMasterSpeaker">
                                            <img src="https://images.mastersunion.link/uploads/30032026/v1/Image04.webp" alt="" className="techMasterImg" />
                                        </div>
                
                                        <div className="techMasterContent">
                                            <h2 className="techMasterName">Vivek Gambhir</h2>
                                            <p className="techMasterPosition"> Former Partner</p>
                                            <img src="https://images.mastersunion.link/uploads/01042026/v1/logo511.png" alt="" className="techMasterLogo" />
                                        </div>
                                    </div>
                                </div>
                
                
                                <div className="slide-box">
                                    <div className="techMasterCardNew">
                                        <div className="techMasterSpeaker">
                                            <img src="https://images.mastersunion.link/uploads/26032026/v1/Image02.webp" alt="" className="techMasterImg" />
                                        </div>
                
                                        <div className="techMasterContent">
                                            <h2 className="techMasterName">Sanjeev Krishan</h2>
                                            <p className="techMasterPosition">Chairperson India</p>
                                            <img src="https://images.mastersunion.link/uploads/27032026/v1/2.svg" alt="" className="techMasterLogo" />
                                        </div>
                                    </div>
                                </div>
                
                
                                <div className="slide-box">
                                    <div className="techMasterCardNew">
                                        <div className="techMasterSpeaker">
                                            <img src="https://images.mastersunion.link/uploads/26032026/v1/Image01.webp" alt="" className="techMasterImg" />
                                        </div>
                
                                        <div className="techMasterContent">
                                            <h2 className="techMasterName">C P Gurnani</h2>
                                            <p className="techMasterPosition">Former CEO</p>
                                            <img src="https://images.mastersunion.link/uploads/27032026/v1/1.svg" alt="" className="techMasterLogo" />
                                        </div>
                                    </div>
                                </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/03042026/v1/PANKAJBANSAL1.webp" alt="Pankaj Bansal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pankaj Bansal</h2>
                                <p className="techMasterPosition">Co-founder &amp; Group CEO</p>
                                <img src="https://images.mastersunion.link/uploads/03042026/v1/logo51.png" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master21.webp" alt="Satish Shukla" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Satish Shukla</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo21.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master22.webp" alt="Jyoti Malhotra" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Jyoti Malhotra</h2>
                                <p className="techMasterPosition">MD &amp; CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo22.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master23.webp" alt="Anupam Mittal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Anupam Mittal</h2>
                                <p className="techMasterPosition">Founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo23.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master24.webp" alt="Santhosh V." className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Santhosh V.</h2>
                                <p className="techMasterPosition">MD India</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo24.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master25.webp" alt="Avnish Bajaj" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Avnish Bajaj</h2>
                                <p className="techMasterPosition">Founder &amp; Investor</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo25.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master26.webp" alt="Manoj Kohli" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Manoj Kohli</h2>
                                <p className="techMasterPosition">Former Country Head</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo26.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master27.webp" alt="Dr. Edward Rogers" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Edward Rogers</h2>
                                <p className="techMasterPosition">Former CKO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo27.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master28.webp" alt="C. Raghu Raman" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">C. Raghu Raman</h2>
                                <p className="techMasterPosition">Former President</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo28.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master29.webp" alt="Anand Srinivasan" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Anand Srinivasan</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo29.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master30.webp" alt="Vipin Sondhi" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Vipin Sondhi</h2>
                                <p className="techMasterPosition">Former MD &amp; CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo30.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master31.webp" alt="Pramod Bhasin" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pramod Bhasin</h2>
                                <p className="techMasterPosition">Founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo31.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master32.webp" alt="Jaspreet Bindra" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Jaspreet Bindra</h2>
                                <p className="techMasterPosition">Former CDO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo32.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master33.webp" alt="Nidhi Hola" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Nidhi Hola</h2>
                                <p className="techMasterPosition">Country Marketing Director</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo33.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master34.webp" alt="Mukesh Jain" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Mukesh Jain</h2>
                                <p className="techMasterPosition">Group CTO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo34.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master35.webp" alt="Akash Gupta" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Akash Gupta</h2>
                                <p className="techMasterPosition">Co-founder &amp; CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo35.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master36.webp" alt="Manpreet Singh Ahuja" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Manpreet Singh Ahuja</h2>
                                <p className="techMasterPosition">CDO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo36.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master37.webp" alt="Sanjeev B." className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Sanjeev B.</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo37.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master38.webp" alt="Amitabh Kant" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Amitabh Kant</h2>
                                <p className="techMasterPosition">Former CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo38.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master39.webp" alt="Peyush Bansal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Peyush Bansal</h2>
                                <p className="techMasterPosition">CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo39.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master40.webp" alt="Shri Nitin Gadkari" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Shri Nitin Gadkari</h2>
                                <p className="techMasterPosition">Minister of Roads &amp; Transport</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo40.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                
                
                
                
                </div>
                
                <div className="container">
                    <div className="speakerButton hide">
                        <button className="roboBtn transparentBtn">
                            <p className="btnText ">View All Speakers</p>
                            <span className="arrowWrap">
                                <svg className="arrow arrow1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="#fff"></path>
                                    <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="#fff"></path>
                                </svg>
                
                                <svg className="arrow arrow2" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="#fff"></path>
                                    <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="#fff"></path>
                                </svg>
                
                            </span>
                
                
                        </button>
                    </div>
                </div>
                
                
                
                
                            </div>

            <div className="mob-visible">
                <div className="slides-wrapper">
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/30032026/v1/Image041.webp" alt="" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pratham Mittal </h2>
                                <p className="techMasterPosition">Founder &amp; CEO
                
                                </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo512.png" alt="" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master01.webp" alt="Ghazal Alagh" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ghazal Alagh</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo01.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master02.webp" alt="" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kaivalya Vohra</h2>
                                <p className="techMasterPosition">Co-founder &amp; CTO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo02.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master03.webp" alt="Suresh Narayanan" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Suresh Narayanan</h2>
                                <p className="techMasterPosition">Former Chairman &amp; MD </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo03.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master04.webp" alt="Shiv Shivakumar" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Shiv Shivakumar</h2>
                                <p className="techMasterPosition">Former Chairman &amp; CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo04.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master05.webp" alt="Malika Datt Sadani" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Malika Datt Sadani</h2>
                                <p className="techMasterPosition">Founder &amp; CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo05.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master06.webp" alt="Rohit Kapoor" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Rohit Kapoor</h2>
                                <p className="techMasterPosition">CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v2/logo06.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master07.webp" alt="Gaurav Khatri" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Gaurav Khatri</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo07.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master08.webp" alt="Ashish Singhal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ashish Singhal</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo08.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master09.webp" alt="Priyanka Gill" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Priyanka Gill</h2>
                                <p className="techMasterPosition">Former Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo09.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master10.webp" alt="Mikhil Innani" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Mikhil Innani</h2>
                                <p className="techMasterPosition">Former Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo10.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master11.webp" alt="Kirthiga Reddy" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kirthiga Reddy</h2>
                                <p className="techMasterPosition">Former MD </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo11.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master12.webp" alt="Bikram Bedi" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Bikram Singh Bedi</h2>
                                <p className="techMasterPosition">Country MD </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo12.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master13.webp" alt="Kunal Bahl" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kunal Bahl</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo13.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master14.webp" alt="Upasana Taku" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Upasana Taku</h2>
                                <p className="techMasterPosition">Co-founder &amp; CFO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo14.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master15.webp" alt="Ronnie Screwala" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ronnie Screwala</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo15.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master16.webp" alt="Vikram Pawah" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Vikram Pawah</h2>
                                <p className="techMasterPosition">President and CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo16.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master17.webp" alt="Arjun Vaidya" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Arjun Vaidya</h2>
                                <p className="techMasterPosition">Former CEO </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo17.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master18.webp" alt="Prashant Tandon" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Prashant Tandon</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo18.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master19.webp" alt="Suhasini Sampath" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Suhasini Sampath</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo19.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master20.webp" alt="Midhula D." className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Midhula D.</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo20.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                   <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/03042026/v1/PANKAJBANSAL1.webp" alt="Pankaj Bansal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pankaj Bansal</h2>
                                <p className="techMasterPosition">Co-founder &amp; Group CEO</p>
                                <img src="https://images.mastersunion.link/uploads/03042026/v1/logo51.png" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master21.webp" alt="Satish Shukla" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Satish Shukla</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo21.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master22.webp" alt="Jyoti Malhotra" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Jyoti Malhotra</h2>
                                <p className="techMasterPosition">MD &amp; CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo22.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master23.webp" alt="Anupam Mittal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Anupam Mittal</h2>
                                <p className="techMasterPosition">Founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo23.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master24.webp" alt="Santhosh V." className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Santhosh V.</h2>
                                <p className="techMasterPosition">MD India</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo24.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master25.webp" alt="Avnish Bajaj" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Avnish Bajaj</h2>
                                <p className="techMasterPosition">Founder &amp; Investor</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo25.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master26.webp" alt="Manoj Kohli" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Manoj Kohli</h2>
                                <p className="techMasterPosition">Former Country Head</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo26.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master27.webp" alt="Dr. Edward Rogers" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Edward Rogers</h2>
                                <p className="techMasterPosition">Former CKO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo27.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master28.webp" alt="C. Raghu Raman" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">C. Raghu Raman</h2>
                                <p className="techMasterPosition">Former President</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo28.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master29.webp" alt="Anand Srinivasan" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Anand Srinivasan</h2>
                                <p className="techMasterPosition">Co-founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo29.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master30.webp" alt="Vipin Sondhi" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Vipin Sondhi</h2>
                                <p className="techMasterPosition">Former MD and CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo30.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master31.webp" alt="Pramod Bhasin" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pramod Bhasin</h2>
                                <p className="techMasterPosition">Founder </p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo31.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master32.webp" alt="Jaspreet Bindra" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Jaspreet Bindra</h2>
                                <p className="techMasterPosition">Former CDO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo32.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master33.webp" alt="Nidhi Hola" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Nidhi Hola</h2>
                                <p className="techMasterPosition">Country Marketing Director</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo33.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master34.webp" alt="Mukesh Jain" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Mukesh Jain</h2>
                                <p className="techMasterPosition">Group CTO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo34.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master35.webp" alt="Akash Gupta" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Akash Gupta</h2>
                                <p className="techMasterPosition">Co-founder and CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo35.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master36.webp" alt="Manpreet Ahuja" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Manpreet Ahuja</h2>
                                <p className="techMasterPosition">CDO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo36.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master37.webp" alt="Sanjeev B." className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Sanjeev B.</h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo37.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master38.webp" alt="Amitabh Kant" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Amitabh Kant</h2>
                                <p className="techMasterPosition">Former CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo38.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master39.webp" alt="Peyush Bansal" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Peyush Bansal</h2>
                                <p className="techMasterPosition">CEO</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo39.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-box">
                        <div className="techMasterCardNew">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/master40.webp" alt="Shri Nitin Gadkari" className="techMasterImg" />
                            </div>
                
                            <div className="techMasterContent">
                                <h2 className="techMasterName">Shri Nitin Gadkari</h2>
                                <p className="techMasterPosition">Minister of Roads &amp; Transport</p>
                                <img src="https://images.mastersunion.link/uploads/01042026/v1/logo40.webp" alt="Logo" className="techMasterLogo" />
                            </div>
                        </div>
                    </div>
                
                
                </div>            </div>

        </div>

    </section>
    );
}
