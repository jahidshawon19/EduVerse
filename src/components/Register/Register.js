import React, { useContext } from 'react';
import '../Login/Login.css'; 
import {AuthContext} from '../../context/UserContext'; 
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Register = () => {

    const {registerUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/' 


    const handleRegister = (e)=>{
        e.preventDefault()
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const passwordMismatchAlert = document.getElementById("passwordMismatchAlert");
        if(password !== confirmPassword){
            passwordMismatchAlert.style.display = "block";
            return
        }
        passwordMismatchAlert.style.display = "none";
        registerUser(email, password)
        .then(res=>{
            console.log(res.user)
            e.target.reset()
            navigate(from , {replace:true})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <>
    <section className="login-section py-5">
        <div className="container">
        <div class="alert alert-warning" id="passwordMismatchAlert" style={{"display": "none"}} role="alert">
              Password and confirm password do not match.
        </div>
            <div className="register-login-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6">
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