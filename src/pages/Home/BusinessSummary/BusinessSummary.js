import React from 'react';
import './BusinessSummary.css';
import { FaUsersCog, FaTruck, FaTools } from 'react-icons/fa';
import { BsChatLeftDotsFill } from "react-icons/bs";

const BusinessSummary = () => {
    return (
        <div>

            <div className='wrapper'>
                <div className="title">TRUST US</div>
                <p>
                    Welcome to Ronix, your number one source for all things Tools. We're dedicated to giving you the very best of [product], with a focus on
                    Founded in 2022 by Rezwan Rahim, Ronix has come a long way from its beginnings in a Dhaka. When Rezwan Rahim first started out, his/her passion for  drove him to , and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over [place, ie: the US, the world, the Austin area], and are thrilled to be a part of the  wing of the Gols.
                    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.

                    Sincerely,
                    CEO,
                    Rezwan Rahim
                </p>


            </div>
            {/* counter */}
            <div className='counter-up'>
                <div className='content'>
                    <div className='box'>
                        <div className='icon'>
                            {/*font awsome icon */}
                            < FaUsersCog />
                        </div>
                        <div className='counter'>
                            999+
                        </div>
                        <div className='text'>
                            Happy Clients
                        </div>

                    </div>
                    <div className='box'>
                        <div className='icon'>
                            {/*font awsome icon */}
                            <FaTruck />
                        </div>
                        <div className='counter'>
                            1K+
                        </div>
                        <div className='text'>
                            delivered
                        </div>

                    </div>
                    <div className='box'>
                        <div className='icon'>
                            {/*font awsome icon */}
                            <FaTools />
                        </div>
                        <div className='counter'>
                            599
                        </div>
                        <div className='text'>
                            Tools
                        </div>

                    </div>
                    <div className='box'>
                        <div className='icon'>
                            {/*font awsome icon */}
                            <BsChatLeftDotsFill />
                        </div>
                        <div className='counter'>
                            1K+
                        </div>
                        <div className='text'>
                            feedback
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;