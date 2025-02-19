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
import ViewDetailsPage from "../Pages/Dashboard/Students/StudentHome/ViewDetailsPage/ViewDetailsPage";
import CreateNote from "../Pages/Dashboard/Students/CreateNote/CreateNote";
import ManagePersonalNode from "../Pages/Dashboard/Students/ManagePersonalNote/ManagePersonalNode";
import UpdatePersonalNotes from "../Pages/Dashboard/Students/UpdatePersonalNotes/UpdatePersonalNotes";
import ViewAllStudyTutor from "../Pages/Dashboard/Tutor/ViewAllStudyTutor/ViewAllStudyTutor";
import ProfilePage from "../Pages/Shared/ProflePage/ProfilePage";
import ViewAllStudyUpdate from "../Pages/Dashboard/Admin/ViewAllStudyUpdate/ViewAllStudyUpdate";
import ErrorPage from "../Layout/ErrorPage";
import UploadMaterials from "../Pages/Dashboard/Tutor/UploadMaterials/UploadMaterials";
import ViewAllMaterialsTutor from "../Pages/Dashboard/Tutor/TutorHome/ViewAllMaterialsTutor/ViewAllMaterialsTutor";
import UpdateMaterialTutor from "../Pages/Dashboard/Tutor/UpdateMaterialTutor/UpdateMaterialTutor";
import ViewAllStudyMaterials from "../Pages/Dashboard/Students/ViewAllStudyMaterials/ViewAllStudyMaterials";
import ViewAllMaterialsAdmin from "../Pages/Dashboard/Admin/ViewAllMaterialsAdming/ViewAllMaterialsAdmin";
import TutorMaterials from "../Pages/Dashboard/Tutor/TutorHome/TutorMaterials";
import StudentHome from "../Pages/Dashboard/Students/StudentHome/StudentHome";
import TutorHome from "../Pages/Dashboard/Tutor/TutorHome/TutorHome";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import MeetOurTeam from "../Pages/MeetOurTeam/MeetOurTeam";

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
                element:<ReadMorePage></ReadMorePage>
            },
            {
                path:'paymentPage/:id',
                element: <PaymentPage></PaymentPage>
            },
            {
                path:'/about',
                element:<AboutPage></AboutPage>
            },
            {
                path:'/contact',
                element:<ContactPage></ContactPage>
            },
            {
                path:'/meetTeam',
                element:<MeetOurTeam></MeetOurTeam>
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
            {
                path:'viewAllMaterialsAdmin',
                element:<PrivateRoute><AdminRoute><ViewAllMaterialsAdmin></ViewAllMaterialsAdmin></AdminRoute></PrivateRoute>
            },
            {
                path:'adminHome',
                element:<PrivateRoute><AdminRoute><AdminHome></AdminHome></AdminRoute></PrivateRoute>
            },

            //tutor routes
        
            {
                path:'createStudySession',
                element:<PrivateRoute><TutorRoute><CreateStudySession></CreateStudySession></TutorRoute></PrivateRoute>
            },
            {
                path:'viewAllStudyTutor',
                element:<PrivateRoute><TutorRoute><ViewAllStudyTutor></ViewAllStudyTutor></TutorRoute></PrivateRoute>
            },
            {
                path:'tutorMaterials',
                element:<PrivateRoute><TutorRoute><TutorMaterials></TutorMaterials></TutorRoute></PrivateRoute>
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
            {
                path:'tutorHome',
                element:<PrivateRoute><TutorHome></TutorHome></PrivateRoute>
            },

            //students routes
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
                path:'viewAllStudyMaterials',
                element:<PrivateRoute><ViewAllStudyMaterials></ViewAllStudyMaterials></PrivateRoute>
            },
            {
                path:'studentHome',
                element:<PrivateRoute><StudentHome></StudentHome></PrivateRoute>
            },
            {
                path:'profile',
                element:<PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
            },
        ]
    }
])