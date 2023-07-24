import React, { useContext, useState } from 'react';
import '../Login/Login.css'; 
import {AuthContext} from '../../context/UserContext'; 
import { useNavigate } from "react-router-dom";

const Register = () => {

    const {registerUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')


    const handleRegister = (e)=>{
        e.preventDefault()
        const userName = e.target.userName.value;
        const contactNumber = e.target.phone.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if(password !== confirmPassword){
            setError('Password and confirm password are not same')
            return
        }

        registerUser(email, password, userName)
        .then(res=>{
            console.log(res.user)
            setError('')
            navigate('/')
            e.target.reset()
            handleUpdateUserProfile(userName, contactNumber)
        })
        .catch(err=>{
            setError(err.message)
        })
    }

    const handleUpdateUserProfile=(name, number)=>{
        const profile={
            displayName:name,
            number:number,
            
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(()=>{})
    }
    return (
        <>
    <section className="login-section py-5">
        <div className="container">
        {
            error&&<div class="alert alert-warning" role="alert">{error}</div>
        }
            <div className="register-login-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-none d-md-block">
                        <div className="register-login-img">
                            <div className="image">
                                <img src="https://images.pexels.com/photos/6393342/pexels-photo-6393342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="register-login-form">
                            <h3 className="title">Register Now</h3>
                            <div className="form-wrapper">
                                <form action="#"   onSubmit={handleRegister}>
                                    <div className="single-form">
                                        <input type="text" placeholder="Name"
                                        name="userName" required />
                                    </div>
                                    <div className="single-form">
                                        <input type="text" placeholder="Email"
                                        name="email" required />
                                    </div>
                                    <div className="single-form">
                                        <input type="text" placeholder="Mobile"
                                        name="phone" required minLength={8} maxLength={8} />
                                    </div>
                                    <div className="single-form">
                                        <input type="password" placeholder="Password"
                                        name="password" required minLength={8} />
                                    </div>
                                    <div className="single-form">
                                        <input type="password" placeholder="Confirm Password" name="confirmPassword" required minLength={8} />
                                    </div>
                                    <div className="single-form">
                                        <button className="btn btn-success btn-block"
                                      
                                        
                                        >Create an account</button>
                                        <a href="#" className="btn btn-outline-success btn-block">Sign up with Google</a>
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

export default Register;