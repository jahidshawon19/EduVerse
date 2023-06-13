import React from 'react';
import './Banner.css';
import bannerPic from '../../assests/banner pic.png'; 

const Banner = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row banner-section py-5'>
                    
                    <div className='col-lg-6'>
                        <div className='banner-content'>
                            <h1 className='bannerHeadding'>Learn without limits</h1>
                            <p className='bannerText'>Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                            <button className='btn bannerBtn'>Join for Free</button>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={bannerPic} alt="bannerpic"/>
                    </div>
                 
                </div>
            </div>
        </>
    );
};

export default Banner;