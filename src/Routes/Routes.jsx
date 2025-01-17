import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUPPage";
import DashboardLayout from "../Layout/DashboardLayout";
import CreateStudySession from "../Pages/Dashboard/Tutor/CreateStudySesstion/CreateStudySession";
import ReadMorePage from "../Pages/Home/ReadMorePage/ReadMorePage"
import PrivateRoute from "./PrivateRoute";
import ViewAllStudy from "../Pages/Dashboard/Admin/ViewAllStudy/ViewAllStudy";
import ViewBookSession from "../Pages/Dashboard/Students/ViewBookSession/ViewBookSession";
import ViewAllUsers from "../Pages/Dashboard/Admin/ViewAllUsers/ViewAllUsers";

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
                element:<PrivateRoute><ReadMorePage></ReadMorePage></PrivateRoute>
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
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            // admin routes 
            {
                path:'viewAllStudy',
                element:<ViewAllStudy></ViewAllStudy>
            },
            {
                path:'viewAllUsers',
                element:<ViewAllUsers></ViewAllUsers>
            },

            //tutor routes
            {
                path:'createStudySession',
                element:<CreateStudySession></CreateStudySession>
            },

            //students routes
            {
                path:'viewBookSession',
                element:<ViewBookSession></ViewBookSession>
            }
        ]
    }
])