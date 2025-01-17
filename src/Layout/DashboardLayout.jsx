import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.jpg"
// import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
// import { HiOutlineUsers } from "react-icons/hi2";
// import { CiViewList } from "react-icons/ci";
import AdminLayout from "./AdminLayout/AdminLayout";
import StudentLayout from "./StudentLayout/StudentLayout";
import TutorLayout from "./TutorLayout/TutorLayout";
// import useAdmin from '../hooks/useAdmin'

const DashboardLayout = () => {
  // TODO: get  isAdmin value from the database
  // const [isAdmin] = useAdmin()
  // console.log(isAdmin)
  const role = "admin";
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
          <>
          {/* admin  */}
            {(role === "admin") && <AdminLayout></AdminLayout>}
          </>

          <>
          {/* tutor */}
            <TutorLayout></TutorLayout>
          </>

         <>
          {/* student routes */}
          <StudentLayout></StudentLayout>
         </>

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
