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
import AdminRoute from "./AdminRoute";
import TutorRoute from "./TutorRoute";
import PaymentPage from "../Pages/Home/Home/PaymentPage/PaymentPage";
// import StudentHome from "../Pages/Dashboard/Students/StudentHome/StudentHome";
import ViewDetailsPage from "../Pages/Dashboard/Students/StudentHome/ViewDetailsPage/ViewDetailsPage";
import CreateNote from "../Pages/Dashboard/Students/CreateNote/CreateNote";
import ManagePersonalNode from "../Pages/Dashboard/Students/ManagePersonalNote/ManagePersonalNode";
import UpdatePersonalNotes from "../Pages/Dashboard/Students/UpdatePersonalNotes/UpdatePersonalNotes";
import ViewAllStudyTutor from "../Pages/Dashboard/Tutor/ViewAllStudyTutor/ViewAllStudyTutor";
// import TutorHome from "../Pages/Dashboard/Tutor/TutorHome/TutorHome";
import ProfilePage from "../Pages/Shared/ProflePage/ProfilePage";
import ViewAllStudyUpdate from "../Pages/Dashboard/Admin/ViewAllStudyUpdate/ViewAllStudyUpdate";
import ErrorPage from "../Layout/ErrorPage";
import UploadMaterials from "../Pages/Dashboard/Tutor/UploadMaterials/UploadMaterials";
import ViewAllMaterialsTutor from "../Pages/Dashboard/Tutor/TutorHome/ViewAllMaterialsTutor/ViewAllMaterialsTutor";
import UpdateMaterialTutor from "../Pages/Dashboard/Tutor/UpdateMaterialTutor/UpdateMaterialTutor";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/readMore/:id',
                element:<PrivateRoute><ReadMorePage></ReadMorePage></PrivateRoute>
            },
            {
                path:'paymentPage/:id',
                element: <PaymentPage></PaymentPage>
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
            // {
            //     path:'adminHome',
            //     element:<PrivateRoute><AdminRoute><ViewAllStudy></ViewAllStudy></AdminRoute></PrivateRoute>
            // },
            {
                path:'viewAllStudy',
                element:<PrivateRoute><AdminRoute><ViewAllStudy></ViewAllStudy></AdminRoute></PrivateRoute>
            },
            {
                path:'viewAllUsers',
                element:<PrivateRoute><AdminRoute><ViewAllUsers></ViewAllUsers></AdminRoute></PrivateRoute>
            },
            {
                path:'updateViewAllStudy/:id',
                element:<PrivateRoute><AdminRoute><ViewAllStudyUpdate></ViewAllStudyUpdate></AdminRoute></PrivateRoute>
            },

            //tutor routes
            // {
            //     path:'/',
            //     element:<TutorHome>Home</TutorHome>
            // },
            {
                path:'createStudySession',
                element:<PrivateRoute><TutorRoute><CreateStudySession></CreateStudySession></TutorRoute></PrivateRoute>
            },
            {
                path:'viewAllStudyTutor',
                element:<PrivateRoute><TutorRoute><ViewAllStudyTutor></ViewAllStudyTutor></TutorRoute></PrivateRoute>
            },
            {
                path:'uploadMaterials/:id',
                element:<PrivateRoute><TutorRoute><UploadMaterials></UploadMaterials></TutorRoute></PrivateRoute>
            },
            {
                path:'viewAllMaterialsTutor',
                element:<PrivateRoute><TutorRoute><ViewAllMaterialsTutor></ViewAllMaterialsTutor></TutorRoute></PrivateRoute>
            },
            {
                path:'updateMaterial/:id',
                element:<PrivateRoute><TutorRoute><UpdateMaterialTutor></UpdateMaterialTutor></TutorRoute></PrivateRoute>
            },

            //students routes
            // {
            //     path:'/',
            //     element:<StudentHome></StudentHome>
            // },
            {
                path:'viewBookSession',
                element:<PrivateRoute><ViewBookSession></ViewBookSession></PrivateRoute>
            },
            
            {
                path:'viewDetails/:id',
                element: <PrivateRoute><ViewDetailsPage></ViewDetailsPage></PrivateRoute>
            },
            {
                path:'createNote',
                element:<PrivateRoute><CreateNote></CreateNote></PrivateRoute>
            },
            {
                path:'managePersonalNotes',
                element:<PrivateRoute><ManagePersonalNode></ManagePersonalNode></PrivateRoute>
            },
            {
                path:'updatePersonalNotes/:id',
                element:<PrivateRoute><UpdatePersonalNotes></UpdatePersonalNotes></PrivateRoute>
            },
            
            {
                index:true,
                element:<PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
            },
        ]
    }
])