import  { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../components/Home/Home'; 
import CourseDetails from "../components/Courses/CourseDetails/CourseDetails";
import Login from "../components/Login/Login";
import Register from '../components/Register/Register';
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
                // element: <CourseDetails></CourseDetails>
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]

        
    }
])