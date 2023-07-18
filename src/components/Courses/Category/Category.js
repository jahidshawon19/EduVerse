import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import categories from '../../../data/category.json';

const Category = () => {

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
    return (
        <>



      <section class="category-section">
        <div class="container">
        <Slider {...settings}>
        {
            categories.map(cat=>
                <div key={cat.id}>
                <a href="/" className="btn btn-success home-btn">{cat.title}</a>
                </div>  
                )

        }
        </Slider>
        </div>
    </section>
        </>
    );
};

export default Category;


