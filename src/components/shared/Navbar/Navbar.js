import React from 'react';
import { HiSearch } from "react-icons/hi";
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo.png';

const Navbar = () => {
    return (
                <nav class="navbar navbar-expand-lg">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="eduverlogo"/>
                </Link>
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
                        <Link class="nav-link text-warning" to="/login">Log in</Link>
                    </li>

                   
                    <li class="nav-item">
                        <Link className='signUPBtn btn text-light' to="/register"><b>Join for Free</b></Link>
                    </li>
                  


                    </ul>

                </div>
                </nav>
    );
};

export default Navbar;