import React, { useEffect, useState } from 'react';
import './CourseDetails.css';
import { useParams } from 'react-router-dom';
import courseData from '../../../data/courses.json';
import shape1 from '../../../assests/shape-1.png';
import shape2 from '../../../assests/shape-2.png';
import shape3 from '../../../assests/shape-3.png';


const CourseDetails = () => {
    let {id} = useParams();
    let [details, setDetails] = useState(null);
    useEffect(()=>{
        let courseDetails = courseData.find(cd=>cd.course_id===id)
        setDetails(courseDetails)
    },[id])
    if(details == null){
        return(
            <p>Not Found</p>
        )
    }
    return (
        <>
                <div className="section-page-banner">
                    <img className="shape-1 d-none d-md-block" src={shape1} alt=""/>
                    <img className="shape2 d-none d-md-block" src={shape2} alt=""/>
                    <div className="container">
                        <div className="page-banner-content">
                            <h2>{details.course_title}</h2>
                        </div>
                        <img className="shape-3 d-none d-md-block" src={shape3} alt=""/>
                        
                    </div>
                </div>

                <section className="section-course-video py-5 bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                <div class="video">
                                    <iframe src={details.video} frameborder="0" allowfullscreen></iframe>
                                </div>                                    
                                </div>
                                <div className="col-lg-4">
                                <div class="sidebar-widget">
                                    <div class="info-list">
                                        <ul>
                                            <li>
                                                <strong>Instructor</strong>
                                                <span>{details.author}</span>
                                            </li>
                                            <li>
                                                <strong>Time</strong>
                                                <span>{details.time}</span>
                                            </li>
                                            <li>
                                                <strong>Language</strong>
                                                <span>English</span>
                                            </li>
                                            
                                            <li>
                                                <strong>Enroll</strong>
                                                <span>{details.enroll}</span>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-lg-8">
                                    <h3 className="details-title">Details</h3>
                                    <p class="details-text">{details.description}</p>
                                </div>
                                <div className="col-lg-4"></div>
                             </div>


                        </div>
                </section>
        </>

    );
};

export default CourseDetails;