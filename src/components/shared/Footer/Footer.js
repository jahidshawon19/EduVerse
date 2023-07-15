import React from 'react';
import './Footer.css'; 
import footerLogo from '../../../assests/footer-logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
    <footer class="footer-section">
        <div class="footer-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 segvaitem">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <Link to="/">
                                    <img src={footerLogo} alt=""/>
                                </Link>
                            </div>
                            <div class="footer-content">
                                <ul>
                                    <li>
                                        <a href="">support@eduverse.com</a>
                                    </li>
                                    <li>
                                        <a href="">+098 67534</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-widget">
                            <h3 class="footer-widget-title">Quick Links</h3>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Courses</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-widget">
                            <h3 class="footer-widget-title">Featured Courses</h3>
                            <ul>
                                <li><a href="">Data Structure</a></li>
                                <li><a href="">MS Office</a></li>
                                <li><a href="">Core Programming</a></li>
                                <li><a href="">Cyber Security</a></li>
                                <li><a href="">Web Design</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-widget">
                            <h3 class="footer-widget-title">Training Session</h3>
                            <ul>
                                <li><a href="">Become Instructor</a></li>
                                <li><a href="">Become Student</a></li>
                            </ul>
                        </div>
                    </div>


                </div>
                
                <div class="row">
                    <div class="col-lg-12">
                       <p className='text-center text-light'>2023 &#169; Developed by <span className='text-warning'>Eduverse</span></p>

                    </div>
                </div>
            </div>
        </div>
    
    </footer>
            
        </>
    );
};

export default Footer;