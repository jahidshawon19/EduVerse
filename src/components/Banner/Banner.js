import React from 'react';
import './Banner.css';
import bannerPic from '../../assests/banner pic.png'; 
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className='container-fluid banner-container'>
                <div className='row banner-section py-5'>
                    
                    <div className='col-lg-6'>
                        <div className='banner-content'>
                            <h1 className='bannerHeadding'>Expand Your Horizons</h1>
                            <p className='bannerText'>Join Thousands of Learners who have Transformed their Skills through Crash Courses.</p>
                            <button className='btn bannerBtn'>
                                <Link to="/register">Join for Free</Link>
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                       <div className="banner-img">
                         <img src={bannerPic} className="img-fluid" alt="bannerpic" />
                       </div>
                    </div>
                 
                </div>
            </div>
        </>
    );
};

export default Banner;