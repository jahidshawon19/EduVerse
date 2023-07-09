import React from 'react';

const SingleCourses = ({courseData}) => {
    const {thumbnail,course_title,author,authorImage} = courseData
    return (
        <>
                    <div className="col-lg-3">
                        <div className="single-course">
                            <div className="course-img">
                                <a href="">
                                    <img src={thumbnail} alt=""/>
                                </a>
                            </div>
                            <div className="course-content">
                                <div className="course-author">
                                    <div className="author">
                                        <div className="author-thumnail">
                                            <a href="">
                                                <img src={authorImage} alt=""/>
                                            </a>
                                        </div>
                                        <div className="author-name">
                                            <a href="">{author}</a>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="course-title">
                                    <a href="">{course_title}</a>
                                </h4>
                            </div>
                        </div>
                    </div>            
        </>
    );
};

export default SingleCourses;