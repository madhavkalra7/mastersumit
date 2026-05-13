'use client';
import React, { useEffect } from 'react';
import { useSwiper } from '@/hooks/useAnimations';

export default function TechSpeaker() {
    useSwiper('.speakerSwiper', {
        spaceBetween: 15,
        centeredSlides: false,
        navigation: {
            nextEl: '.speakerSwiper-Next',
            prevEl: '.speakerSwiper-Prev',
        },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
            0: { slidesPerView: 1.6 },
            768: { slidesPerView: 1.6 },
            1024: { slidesPerView: 5, centeredSlides: true },
            1366: { slidesPerView: 5, centeredSlides: true, spaceBetween: 20 },
            1440: { slidesPerView: 5, centeredSlides: true, spaceBetween: 20 },
            1600: { slidesPerView: 5, centeredSlides: true, spaceBetween: 20 },
            1920: { slidesPerView: 5, centeredSlides: true, spaceBetween: 20 },
        },
    });

    return (
        <section className="techSpeaker hide">
        <div className="container">
            <div className="techSpeakerWrapper">
                <h2 className="techHeading">Institutional Appearances</h2>
                <div className="techSpeakerCardWrapper speakerSwiper ">
                    <div className="swiper-wrapper">

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image01.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">C P Gurnani</h2>
                                <p className="techMasterPosition">Former MD and CEO</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/1.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>


                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image02.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Sanjeev Krishan</h2>
                                <p className="techMasterPosition">Chairperson</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/2.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>


                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image03.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Edward Rogers</h2>
                                <p className="techMasterPosition">Fr. Chief Knowledge Officer</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/3.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>


                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image04.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Abhishek Singh</h2>
                                <p className="techMasterPosition">CEO, IndiaAI Mission, Gol</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/4.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>


                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image05.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Naiyya Saggi </h2>
                                <p className="techMasterPosition">Co-founder</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/5.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>


                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image06.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Anupam Mittal</h2>
                                <p className="techMasterPosition">Founder</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/6.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>


                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image07.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Bikram Bedi</h2>
                                <p className="techMasterPosition">VP and India MD</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/7.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>


                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image08.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Manoj Kohli</h2>
                                <p className="techMasterPosition">Former Country Head</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/8.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>


                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image09.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Santhosh V.</h2>
                                <p className="techMasterPosition">MD</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/9.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>


                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/26032026/v1/Image10.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Varun Mayya</h2>
                                <p className="techMasterPosition">India's Biggest AI Influencer</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/10.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>



                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters21.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Rajat Baijal</h2>
                                <p className="techMasterPosition">Adjunct Professor, Enterprise Risk Mgmt</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo21.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters22.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Souvik Dutta</h2>
                                <p className="techMasterPosition">Former Assistant Professor</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo22.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters23.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Akash Krishnan</h2>
                                <p className="techMasterPosition">Director, Data &amp; Analytics Research</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo23.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters24.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Amit Shrivastava</h2>
                                <p className="techMasterPosition">Former Adjunct Professor</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo24.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters25.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Ankur Kulshrestha</h2>
                                <p className="techMasterPosition">Educator, EY</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo25.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters26.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Alireza Kabirian</h2>
                                <p className="techMasterPosition">Professor of Data Sciences</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo26.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters27.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr Thomas Joseph </h2>
                                <p className="techMasterPosition">Former Associate Professor </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo27.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters28.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr Pratap Giri</h2>
                                <p className="techMasterPosition">Adjunct Faculty</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo28.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters29.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Daniel G. Van Der Vliet</h2>
                                <p className="techMasterPosition">Executive Director, Family Business Programme </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo29.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters30.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Benjamin Dunford </h2>
                                <p className="techMasterPosition">Professor of Management </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo30.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters31.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Jyotsna Bhatnagar</h2>
                                <p className="techMasterPosition">Dean, MDI Gurugram</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo31.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters32.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Lan Ma</h2>
                                <p className="techMasterPosition">Adjunct Professor of Business</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo32.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters33.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Rajesh Bhargave</h2>
                                <p className="techMasterPosition">Associate Professor of Marketing</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo33.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters34.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Vishnuprasad N.</h2>
                                <p className="techMasterPosition">Former Dean</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo34.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters35.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Zal Phiroz</h2>
                                <p className="techMasterPosition">Adjunct Professor, Supply Chain &amp; Ops</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo35.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters36.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Radhika Narayanan </h2>
                                <p className="techMasterPosition">Former Director </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo36.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters37.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Prasad Patil </h2>
                                <p className="techMasterPosition">Visiting Faculty, Operations &amp; Analytics </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo37.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters38.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Meenakshi Rishi </h2>
                                <p className="techMasterPosition">Professor of Economics </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo38.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters39.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Mihir Mankad</h2>
                                <p className="techMasterPosition">Former Professor of Practice, Tufts &amp; Harvard</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo39.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters40.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kaushal Kumar Bhagat</h2>
                                <p className="techMasterPosition">Assistant Professor, IIT Kharagpur </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo40.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters41.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Shruti Mantri</h2>
                                <p className="techMasterPosition">Associate Director, ISB</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo41.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters42.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Utkarsh Majmudar</h2>
                                <p className="techMasterPosition">Former VP, HSBC</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo42.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters43.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Vandana Gupta</h2>
                                <p className="techMasterPosition">Visiting Faculty, Accounting and Finance</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo43.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters44.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Vijaya Bhaskar Marisetty</h2>
                                <p className="techMasterPosition">Former Senior Lecturer</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo44.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters45.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr Harshali Damle</h2>
                                <p className="techMasterPosition">Visiting Faculty</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo45.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters46.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Sundar Venkatesh </h2>
                                <p className="techMasterPosition">Chief Architect at VinUniversity </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo46.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters47.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Kaustubh Dhargalkar </h2>
                                <p className="techMasterPosition">Visiting Faculty, Design Thinking </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo47.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters48.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Shad Morris </h2>
                                <p className="techMasterPosition">Executive Director </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo48.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters49.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Krishanu Rakshit </h2>
                                <p className="techMasterPosition">Former Associate Professor </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo49.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters50.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Dr. Garrick Hileman </h2>
                                <p className="techMasterPosition">Professor of Economics </p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo50.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>

                        <div className="techMasterCard swiper-slide">
                            <div className="techMasterSpeaker">
                                <img src="https://images.mastersunion.link/uploads/27032026/v2/masters51.webp" alt="" className="techMasterImg" />
                            </div>

                            <div className="techMasterContent">
                                <h2 className="techMasterName">Pradeep Hota</h2>
                                <p className="techMasterPosition">Faculty in Business Policy and Strategy, IIM Udaipur</p>
                                <img src="https://images.mastersunion.link/uploads/27032026/v1/logo51.svg" alt="" className="TechMasterLogo" />
                            </div>
                        </div>



                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>

            </div>
        </div>

        
    </section>
    );
}
