import React, { useState } from 'react';
import './Login.css';
import { useContext } from 'react';
import {AuthContext} from '../../context/UserContext'; 
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const redirectedURL = location.state?.from?.pathname || '/'


    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value; 

        loginUser(email,password)
        .then(res=>{
            console.log(res.user)
            e.target.reset();
            setError('')
            navigate(redirectedURL, {from: true})
        })

        .catch(err=>{
            setError(err.message)
        })
    }
    return (
        <>
    <section className="login-section py-5">
        <div className="container">
            {
                error &&<div class="alert alert-warning" id="passwordMismatchAlert" role="alert">
                {error}
            </div>
            }
            <div className="register-login-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="register-login-img d-none d-md-block">
                            <div className="image">
                                <img src="https://images.pexels.com/photos/6393342/pexels-photo-6393342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="register-login-form">
                            <h3 className="title">Login Now</h3>
                            <div className="form-wrapper">
                                <form action="#" onSubmit={handleLogin}>
                                    <div className="single-form">
                                        <input type="text" placeholder="Email" 
                                        name="email" required/>
                                    </div>
                                    <div className="single-form">
                                        <input type="password" placeholder="Password"
                                        name="password" required
                                        />
                                    </div>
                                    <div className="single-form">
                                        <button className="btn btn-success btn-block">Login</button>
                                        <a href="#" className="btn btn-outline-success btn-block">Login with Google</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>        
        </>
    );
};

export default Login;