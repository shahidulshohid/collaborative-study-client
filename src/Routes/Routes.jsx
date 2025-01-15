import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUPPage";
import DashboardLayout from "../Layout/DashboardLayout";
import CreateStudySession from "../Pages/Dashboard/Tutor/CreateStudySesstion/CreateStudySession";
import ReadMorePage from "../Pages/Home/ReadMorePage/ReadMorePage"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/readMore/:id',
                element:<ReadMorePage></ReadMorePage>
            }
        ]
    },
    {
        path:'login',
        element:<LoginPage></LoginPage>
    },
    {
        path:'signUp',
        element: <SignUpPage></SignUpPage>
    },
    {
        path:'dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children: [
            //tutor routes
            {
                path:'createStudySession',
                element:<CreateStudySession></CreateStudySession>
            }


            // admin routes 
        ]
    }
])