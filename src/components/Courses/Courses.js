import React from 'react';
import './Courses.css';
import Category from './Category/Category';
const Courses = () => {
    return (
        <>
                <section class="courses-section py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="courses-section-title">
                                    <h2 className='main-title'>All <span>Courses</span> of Learning Edge</h2>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="courses-section-searchbar">
                                <form action="#">
                                    <input type="text" placeholder="Search your Course"/>
                                </form>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>     
                <Category></Category>       
        </>
    );
};

export default Courses;