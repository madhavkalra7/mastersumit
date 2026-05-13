"use client";
import React from 'react';

export default function TicketSection() {
    return (
        <section className="ticketSection">
        <div className="container">
            <div className="tickerWrapper">
                <div className="upperWrapper">
                    <h2 className="neuHeadingBold text-center">Get Your Tickets</h2>

                    <div className="ticketCardWrapper">


                        <div className="ticketCard soldOut">
                            <img src="https://images.mastersunion.link/uploads/18032026/v1/bgSold.webp" alt="" className="ticketCardImg" />
                            <div className="ticketCardContent">
                                <div className="ticketCardUpperContent soldOut">
                                    <div className="ticketCardHeadingWrapper">
                                        <p className="tickerHeading"> Super Early Bird Offer </p>
                                    </div>



                                </div>
                                <div className="ticketCardLowerContent">
                                    <p className="tickerHeading"> SOLD OUT </p>
                                </div>
                            </div>
                        </div>


                        <div className="ticketCard">
                            <img src="https://images.mastersunion.link/uploads/18032026/v1/bg.webp" alt="" className="ticketCardImg" />
                            <div className="ticketCardContent">
                                <div className="ticketCardUpperContent">
                                    <div className="ticketCardHeadingWrapper">
                                        <p className="tickerHeading"> Early Bird Offer
                                            <br /> <span className="tickerHeadingBlue">Student</span>
                                        </p>

                                        <p className="cardTextThin dynamicdate hide"> By 5th April</p>

                                    </div>

                                    <div className="ticketCardbottomWrapper">
                                        <p className="lineText">INR 2,500</p>
                                        <p className="boldBlue">INR 1,000</p>
                                    </div>


                                </div>
                                <div className="ticketCardLowerContent">
                                <p className="tickerHeading ">Sold Out</p>

                                </div>
                            </div>
                        </div>



                        <div className="ticketCard">
                            <img src="https://images.mastersunion.link/uploads/18032026/v1/bg.webp" alt="" className="ticketCardImg" />
                            <div className="ticketCardContent">
                                <div className="ticketCardUpperContent">
                                    <div className="ticketCardHeadingWrapper">
                                        <p className="tickerHeading"> Early Bird Offer
                                            <br /> <span className="tickerHeadingBlue">Professionals </span>
                                        </p>

                                        <p className="cardTextThin dynamicdate hide">By 5th April</p>

                                    </div>

                                    <div className="ticketCardbottomWrapper">
                                        <p className="lineText">INR 10,000</p>
                                        <p className="boldBlue">INR 4,000</p>
                                    </div>


                                </div>
                                <div className="ticketCardLowerContent">
                                <p className="tickerHeading ">Sold Out</p>

                                </div>
                            </div>
                        </div>


                        <div className="ticketCard">
                            <img src="https://images.mastersunion.link/uploads/18032026/v1/bg.webp" alt="" className="ticketCardImg" />
                            <div className="ticketCardContent">
                                <div className="ticketCardUpperContent openSpotGap">
                                    <div className="ticketCardHeadingWrapper">
                                        <p className="tickerHeading">On-Spot Fee Offer
                                            <br /> <span className="tickerHeadingBlue"></span>
                                        </p>

                                    </div>
                                    <div className="onSpotFeeWrapper">
                                        <div className="onSpotFeeDiv">
                                            <p className="onSpotFeeText">Students</p>
                                            <p className="onSpotFeeTextBlue">INR 2,500</p>
                                        </div>
                                        <div className="onSpotFeeDiv">
                                            <p className="onSpotFeeText">Professionals</p>
                                            <p className="onSpotFeeTextBlue">INR 10,000</p>
                                        </div>

                                    </div>


                                </div>

                            <div className="ticketCardLowerContent">
                                <p className="tickerHeading ">Sold Out</p>

                                </div>
                            </div>
                        </div>



                        <div className="ticketCard blueTicket mob-hide">
                            <img src="https://images.mastersunion.link/uploads/18032026/v1/bgblue.webp" alt="" className="ticketCardImg" />
                            <div className="ticketCardContent">
                                <div className="ticketCardUpperContent">
                                    <div className="ticketCardHeadingWrapper">
                                        <p className="tickerHeading"> Group Registration </p>


                                    </div>




                                </div>
                                <div className="ticketCardLowerContent new">
                                    <div className="tardsPointer">
                                        <p className="cardPoint">Above 05 | <span className="cardBoldPoint">
                                                10% off
                                            </span>
                                        </p>
                                        <p className="cardPoint">Above 10 | <span className="cardBoldPoint">
                                                15% off
                                            </span>
                                        </p>
                                        <p className="cardPoint">Above 20 | <span className="cardBoldPoint">
                                                20% off
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="centerCard mob-visible">

                            <div className="ticketCard blueTicket ">
                                <img src="https://images.mastersunion.link/uploads/18032026/v1/bgblue.webp" alt="" className="ticketCardImg" />
                                <div className="ticketCardContent">
                                    <div className="ticketCardUpperContent">
                                        <div className="ticketCardHeadingWrapper">
                                            <p className="tickerHeading"> Group registration </p>


                                        </div>




                                    </div>
                                    <div className="ticketCardLowerContent">
                                        <div className="tardsPointer">
                                            <p className="cardPoint">Above 5
                                                <br /> <span className="cardBoldPoint">
                                                    10%
                                                </span>
                                            </p>
                                            <p className="cardPoint">Above 10
                                                <br /> <span className="cardBoldPoint">
                                                    15%
                                                </span>
                                            </p>
                                            <p className="cardPoint">Above 20
                                                <br /> <span className="cardBoldPoint">
                                                    20%
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className="entryFreeTicket">
                        <img className="entryFreeTicketImg mob-hide" src="https://images.mastersunion.link/uploads/27032026/v1/dfasdasdas.webp" alt="" />
                        <img className="entryFreeTicketImg mob-visible" src="https://images.mastersunion.link/uploads/27032026/v1/mobileview.webp" alt="" />
                        <div className="enteryfeesAbsoluteWrapper">
                            <div className="enteryFeesContentWrapper">
                                <div className="tickerHeading">Entry Free </div>
                                <div className="tickerHeading">For Masters’ Union &amp; Tetr Students</div>
                            </div>
                        </div>

                    </div>



                    <div className="ticketTag">
                        <p className="tagText"> For group discounts, write to us at :
                            <span className="tagBoldText">thenexttech@mastersunion.org</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
