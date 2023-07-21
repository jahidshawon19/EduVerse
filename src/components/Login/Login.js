import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <>
    <section className="login-section py-5">
        <div className="container">
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
                            <h3 className="title">Login Now</h3>
                            <div className="form-wrapper">
                                <form action="#">
                                    <div className="single-form">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <div className="single-form">
                                        <input type="text" placeholder="Password" />
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