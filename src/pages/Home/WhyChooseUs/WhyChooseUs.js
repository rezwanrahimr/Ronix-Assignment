import React from 'react';
import './WhyChooseUs.css';
import {   FaTools } from 'react-icons/fa';
import { BsLightbulb,BsHandThumbsUp } from "react-icons/bs";

const WhyChooseUs = () => {
    return (
        <div className='text-white bg-no-repeat bg-cover' style={{backgroundImage: `url(${'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/07/Best-Tool-Brands-Option-DeWalt.jpg'})`}} >
            

        <div className='wrapper'>
            <div className="title">Why Choose Us?</div>
            <p>
            Ever since, we have dedicated ourselves to making industrial Hand tools with the goal to become the best manufacturers of Hand Tools in India. Here’s some reasons why we’re unique


            </p>


        </div>
        {/* counter */}
        <div className='counter-upp'>
            <div className='contentt'>
                <div className='boxx'>
                    <div className='icon bg-red-500 p-5 rounded-full'>
                        {/*font awsome icon */}
                        <BsLightbulb/>
                    </div>
                    
                    <div className='text font-bold'>
                    Expertise & Innovation
                    </div>
                    <div className='text'>
                   <small> Since 1978 we’ve been supplying the highest quality tools to a variety of specialist markets.</small>
                    </div>

                </div>
                <div className='boxx'>
                    <div className='icon bg-red-500 p-5 rounded-full'>
                        {/*font awsome icon */}
                       <BsHandThumbsUp/>
                    </div>
                   
                    <div className='text font-bold'>
                    Quality
                    </div>
                    <div className='text '>
                    <small>We have developed a culture of continuous improvement. We give guarantee against any manufacturing defect.</small>
                    </div>

                </div>
                <div className='boxx'>
                    <div className='icon bg-red-500 p-5 rounded-full'>
                        {/*font awsome icon */}
                        <FaTools />
                    </div>
                   
                    <div className='text font-bold'>
                    Service & Support
                    </div>
                    <div className='text'>
                   <small>We have invested heavily to ensure that our products, processes and customer service are second to none.</small>
                    </div>

                </div>
                
            </div>
        </div>

    </div>
    );
};

export default WhyChooseUs;