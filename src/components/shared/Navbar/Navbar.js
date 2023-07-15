import React from 'react';
import { HiSearch } from "react-icons/hi";
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
                <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">EduVerse</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <div className='menuSearch'>
                        <input className='inputSearch' type='text'  placeholder='What do you want to learn?'/>
                    </div>
                    <button className='seacrhBtn   btn'><HiSearch></HiSearch></button>
             

                    </ul>

                    <ul class="navbar-nav ml-auto">
                  
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-warning" href="#">Log in</a>
                    </li>

                   
                    <li class="nav-item">
                        <button className='signUPBtn btn'><b>Join for Free</b></button>
                    </li>
                  


                    </ul>

                </div>
                </nav>
    );
};

export default Navbar;