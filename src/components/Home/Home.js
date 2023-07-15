import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import HomeElement from './HomeElement/HomeElement';

const Home = () => {
    return (
        <>
        
           <Banner></Banner>
           <Courses></Courses>
           <HomeElement></HomeElement>
        </>
    );
};

export default Home;