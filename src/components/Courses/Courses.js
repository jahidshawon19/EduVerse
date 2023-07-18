import React, { useState } from 'react';
import './Courses.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SingleCourses from './SingleCourses/SingleCourses';

import courseData from '../../data/courses.json';
import categories from '../../data/category.json';

const Courses = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const [filteredCourses, setFilteredCourses] = useState([]);
      const [searchQuery, setSearchQuery] = useState('');
      const filterCoursesByCategory = (categoryId) => {
        if(!categoryId){
            setFilteredCourses(courseData)
        }else{
        const courses = courseData.filter((course) => course.category_id === categoryId);
        setFilteredCourses(courses);
        }
      };

      const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    
        const filteredCourses = courseData.filter(
          (course) =>
            course.course_title.toLowerCase().includes(query)
        );
        setFilteredCourses(filteredCourses);
      };
    // Show all courses by default
    useState(() => {
        setFilteredCourses(courseData);
    }, []);
    return (
        <>
                <section class="courses-section py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="courses-section-title">
                                    <h2 className='main-title'>All <span>Courses</span> of EduVerse</h2>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="courses-section-searchbar">
                                <form action="#">
                                    <input
                                     type="text"
                                     placeholder="Search your Course"
                                     value={searchQuery}
                                     onChange={handleSearch}/>
                                </form>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>   


                <section class="category-section">
                    <div class="container">
                    <Slider {...settings}>
                    {
                        categories.map(cat=>
                            <div key={cat.id}>
                            <button className="btn btn-success home-btn" onClick={() => filterCoursesByCategory(cat.category_id)}>{cat.title}</button>
                            </div>  
                            )

                    }
                    </Slider>
                    </div>
                </section>                  
               

    <section className="all-courses-section">
        <div class="container">
            <div class="coures-wrapper">
                <div class="row">
                    {   
                        filteredCourses.map(course=>
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