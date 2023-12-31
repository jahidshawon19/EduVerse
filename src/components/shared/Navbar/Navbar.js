import React, { useContext } from 'react';
import { HiSearch } from "react-icons/hi";
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo.png';
import {AuthContext} from '../../../context/UserContext'; 

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{

        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
                <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="eduverlogo"/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <div className='menuSearch d-none d-md-block'>
                        <input className='inputSearch' type='text'  placeholder='What do you want to learn?'/>
                    </div>
                    <button className='seacrhBtn btn d-none d-md-block'><HiSearch></HiSearch></button>
             

                    </ul>

                    <ul class="navbar-nav ml-auto">
                  
                    <li class="nav-item">
                        <Link class="nav-link text-dark" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-dark" to="/courses">Courses</Link>
                    </li>
                    <li class="nav-item">
                        {
                            user?.email && <small class="nav-link text-secondary">{user?.displayName}</small>
                        }
                    </li>
                   
                    <li class="nav-item">
                        {
                            !user?.email && <Link class="nav-link text-warning" to="/login">Log in</Link>
                        }
                        
                    </li>

                    <li class="nav-item">
                        {
                            user?.email?<button className='btn btn-sm btn-danger' onClick={handleLogOut}>Log out</button>
                            :
                            <Link className='signUPBtn btn text-light' to="/register"><b>Join for Free</b></Link>
                        }
                        
                    </li>
                  


                    </ul>

                </div>
                </nav>
    );
};

export default Navbar;