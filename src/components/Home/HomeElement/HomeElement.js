import React from 'react';
import './HomeElement.css'; 
import homegraph from '../../../assests/homegraph.png';
import { Link } from 'react-router-dom';
const HomeElement = () => {
    return (
        <>
            <section class="section-home-element py-5 mt-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div className='element-content'>
                            <h2 class="home-element-title">
                                Find Your Perfect Program
                            </h2>
                            <p>
                                We serve you, the curious reader who loves to learn new things. Rouen is home to thousands of independent voices, and we combine humans and technology to find the best reading for you
                            </p>

                            <Link to="/courses" class="btn btn-success home-btn mt-3">CHECK IT NOW</Link>
                            </div>
                        </div>

                        <div class="col-lg-6">
                    <div class="home-element-img">
                        <img src={homegraph} className='img-fluid' alt=""/>
                    </div>
                </div>


                        
                    </div>

            
                </div>
            </section>           
        </>
    );
};

export default HomeElement;