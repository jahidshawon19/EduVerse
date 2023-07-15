import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourses = ({courseData}) => {
    const {course_id,thumbnail,course_title,author,authorImage, time} = courseData
    return (
        <>
                    <div className="col-lg-3">
                        <div className="single-course">
                            <div className="course-img">
                                <Link to={`/details/${course_id}`}>
                                    <img src={thumbnail} alt=""/>
                                </Link>
                            </div>
                            <div className="course-content">
                                <div className="course-author">
                                    <div className="author">
                                        <div className="author-thumnail">
                                            <Link to={`/details/${course_id}`}>
                                                <img src={authorImage} alt=""/>
                                            </Link>
                                        </div>
                                        <div className="author-name">
                                            <a href="">{author}</a>
                                        </div>
                                    </div>
                                  
                                </div>
                                <h4 className="course-title">
                                    <Link to={`/details/${course_id}`}>{course_title}</Link>
                                </h4>
                            </div>

                            <Link to={`/details/${course_id}`} className='btn btn-outline-success btn-block'>Enroll</Link>
                        </div>
                    </div>            
        </>
    );
};

export default SingleCourses;