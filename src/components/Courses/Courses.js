import React, { useEffect, useState } from 'react';
import './Courses.css';
import Category from './Category/Category';
import SingleCourses from './SingleCourses/SingleCourses';
const Courses = () => {
    const[courses, setCourses]=useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])
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

    <section className="all-courses-section">
        <div class="container">
            <div class="coures-wrapper">
                <div class="row">
                    {   
                        courses.map(course=>
                                <SingleCourses
                                    key={course.course_id}
                                    courseData={course}
                                ></SingleCourses>
                            )        

                    }
                </div>
            </div>
        </div>
    </section>
                
                    
        </>
    );
};

export default Courses;