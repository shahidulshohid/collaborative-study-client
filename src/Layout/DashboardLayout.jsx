import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.jpg"
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import AdminLayout from "./AdminLayout/AdminLayout";
import StudentLayout from "./StudentLayout/StudentLayout";
import TutorLayout from "./TutorLayout/TutorLayout";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
  const [role] = useAdmin()
  console.log(role)
  return (
    <div className="md:flex">
      {/* dashboard side bar */}
      <div className="hidden md:block menu p-2 md:w-64 lg:w-80 min-h-screen bg-blue-100">
        <ul>
          <li className=" bg-blue-500 rounded-xl">
            <NavLink to="/">
            <img className="md:w-6 md:h-6 lg:w-10 lg:h-10 rounded-full" src={logo} alt="" />
            <p className="md:text-sm lg:text-lg font-semibold text-white">Study Sphere</p>
            </NavLink>
          </li>
          
              {/* admin  */}
             {
              role === "admin" && <>
                <AdminLayout></AdminLayout>
              </>
             }
             
                {/* tutor */}
              {
                role === "tutor" && (
                  <>
                  <TutorLayout></TutorLayout>
                </>
                )
              }
            
          {/* student routes */}
           {
            role === "student" && (
              <>
              <StudentLayout></StudentLayout>
             </>
            )
           }

          {/* shared */}
          <div className="divider"></div>
          <li>
            <Link to="/" className="lg:text-lg font-semibold">
              <CgProfile />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/login" className="lg:text-lg font-semibold">
              <AiOutlineLogout className="mt-1" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        {/* dashboard content */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
