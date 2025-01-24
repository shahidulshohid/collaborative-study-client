import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import AdminLayout from "./AdminLayout/AdminLayout";
import StudentLayout from "./StudentLayout/StudentLayout";
import TutorLayout from "./TutorLayout/TutorLayout";
import useAdmin from "../Hooks/useAdmin";
import { FaBars } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const [role] = useAdmin();
  const {logOut} = useAuth()
  return (
    <div className="md:flex">

      {/* dashboard side bar */}
      <div className="menu p-2 md:w-64 lg:w-80 min-h-screen bg-blue-500">
        <ul>
          <li className=" bg-blue-500 rounded-xl mb-2">
            <NavLink to="/">
              <img
                className="md:w-6 md:h-6 lg:w-10 lg:h-10 rounded-full"
                src={logo}
                alt=""
              />
              <p className="md:text-sm lg:text-lg font-semibold text-white">
                Study Sphere
              </p>
            </NavLink>
          </li>

          {/* admin  */}
          {role === "admin" && (
            <>
              <AdminLayout></AdminLayout>
            </>
          )}

          {/* tutor */}
          {role === "tutor" && (
            <>
              <TutorLayout></TutorLayout>
            </>
          )}

          {/* student routes */}
          {role === "student" && (
            <>
              <StudentLayout></StudentLayout>
            </>
          )}

          {/* shared */}
          <div className="border-t-2"></div>
          <li>
            <Link
              to="/dashboard"
              className="font-semibold text-white hover:bg-gray-800 hover:text-white my-1"
            >
              <CgProfile />
              Profile
            </Link>
          </li>
          <li>
            {/* <Link
            > */}
              <button className="flex gap-2 font-semibold text-white hover:bg-gray-800 my-1" onClick={logOut}><AiOutlineLogout className="mt-1" />
              Logout</button>
            {/* </Link> */}
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
