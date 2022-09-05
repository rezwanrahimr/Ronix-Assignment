import React from 'react';

const Banner = () => {
    return (
        <div>
            
            <div className="hero min-h-screen" style={{backgroundImage: `url(${'https://hupshenghardware.com/wp-content/uploads/2019/03/Power-tools-Malaysia.jpg'})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">TOOLS AND CONSUMABLES</h1>
                        <h1 className="mb-5 text-5xl font-bold">FOR PROFESSIONAL TRADES</h1>
                        {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;