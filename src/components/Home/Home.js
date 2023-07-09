import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <>
           <Navbar></Navbar> 
           <Banner></Banner>
           <Courses></Courses>
        </>
    );
};

export default Home;