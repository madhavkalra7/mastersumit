"use client";
import React from 'react';

export default function VenueSection() {
    return (
        <section className="venueSection">

        <div className="container">
            <div className="venueWrapper">
                <div className="aiSubmitFolder">

                    <img src="https://images.mastersunion.link/uploads/19032026/v1/fsdagfdsda.webp" alt="" className="aiFolderImg" />

                    <div className="aiFolderWrapper">
                        <p className="venueHeading">Venue &amp; Info</p>
                        <div className="dateWrapper">
                            <div className="date">
                                <img src="https://images.mastersunion.link/uploads/17032026/v1/1.svg" alt="" className="dateIcon" />
                                <p className="registerSubheading">18 Apr 2026</p>
                            </div>
                            <div className="date">
                                <img src="https://images.mastersunion.link/uploads/17032026/v1/2.svg" alt="" className="dateIcon" />
                                <p className="registerSubheading">8:30 AM Onwards</p>
                            </div>
                        </div>
                        <div className="date">
                            <img src="https://images.mastersunion.link/uploads/17032026/v1/3.svg" alt="" className="dateIcon" />
                            <p className="registerSubheading">DLF CyberPark, Gurugram, India</p>
                        </div>

                        <div className="roboBtnWrapper">
                            <button className="roboBtn greyBtn">
                                <a href="https://maps.app.goo.gl/qYW6HocGeyAx4wft5" target="_blank" className="btnText">View
                                    on Map </a>
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

                            </button>
                            <button className="roboBtn transparentBtn hide">
                                <p className="btnText ">Add to Calendar</p>
                                <svg className="btnIcon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.875 3.4375L4.125 3.4375C3.7453 3.4375 3.4375 3.7453 3.4375 4.125L3.4375 17.875C3.4375 18.2547 3.7453 18.5625 4.125 18.5625H17.875C18.2547 18.5625 18.5625 18.2547 18.5625 17.875V4.125C18.5625 3.7453 18.2547 3.4375 17.875 3.4375Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M15.125 2.0625V4.8125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M6.875 2.0625V4.8125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M3.4375 7.5625L18.5625 7.5625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M11 12.375C11.5695 12.375 12.0312 11.9133 12.0312 11.3438C12.0312 10.7742 11.5695 10.3125 11 10.3125C10.4305 10.3125 9.96875 10.7742 9.96875 11.3438C9.96875 11.9133 10.4305 12.375 11 12.375Z" fill="white"></path>
                                    <path d="M14.7812 12.375C15.3508 12.375 15.8125 11.9133 15.8125 11.3438C15.8125 10.7742 15.3508 10.3125 14.7812 10.3125C14.2117 10.3125 13.75 10.7742 13.75 11.3438C13.75 11.9133 14.2117 12.375 14.7812 12.375Z" fill="white"></path>
                                    <path d="M7.21875 15.8125C7.78829 15.8125 8.25 15.3508 8.25 14.7812C8.25 14.2117 7.78829 13.75 7.21875 13.75C6.64921 13.75 6.1875 14.2117 6.1875 14.7812C6.1875 15.3508 6.64921 15.8125 7.21875 15.8125Z" fill="white"></path>
                                    <path d="M11 15.8125C11.5695 15.8125 12.0312 15.3508 12.0312 14.7812C12.0312 14.2117 11.5695 13.75 11 13.75C10.4305 13.75 9.96875 14.2117 9.96875 14.7812C9.96875 15.3508 10.4305 15.8125 11 15.8125Z" fill="white"></path>
                                    <path d="M14.7812 15.8125C15.3508 15.8125 15.8125 15.3508 15.8125 14.7812C15.8125 14.2117 15.3508 13.75 14.7812 13.75C14.2117 13.75 13.75 14.2117 13.75 14.7812C13.75 15.3508 14.2117 15.8125 14.7812 15.8125Z" fill="white"></path>
                                </svg>

                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
}
