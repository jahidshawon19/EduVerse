import  { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../components/Home/Home'; 
import CourseDetails from "../components/Courses/CourseDetails/CourseDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/details/:id',
                element:<CourseDetails></CourseDetails>,
                
            }

        ]

        
    }
])