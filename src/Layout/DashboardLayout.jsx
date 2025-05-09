import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import AdminLayout from "./AdminLayout/AdminLayout";
import StudentLayout from "./StudentLayout/StudentLayout";
import TutorLayout from "./TutorLayout/TutorLayout";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { AiOutlineMenu } from "react-icons/ai";
import { TfiHome } from "react-icons/tfi";
import { useEffect } from "react";

const DashboardLayout = () => {
  const [role] = useAdmin();
  const { logOut } = useAuth();
  const navigate = useNavigate()
  useEffect(()=>{
    if(role === 'tutor'){
      navigate('/dashboard/tutorHome')
    }
    else if(role === 'student'){
      navigate('/dashboard/studentHome')
    }
    else if(role === 'admin'){
      navigate('/dashboard/adminHome')
    }
  }, [role])
  return (
    <div className="md:flex bg-white dark:bg-gray-800">
      {/* responsive */}
      <div className="dropdown dropdown-hover md:hidden">
        <div tabIndex={0} role="button" className="btn m-1 text-xl font-bold">
          <AiOutlineMenu />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-blue-500 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li className=" bg-blue-500 rounded-xl mb-2">
            <NavLink to="/">
              <img
                className="md:w-6 md:h-6 lg:w-10 lg:h-10 w-8 h-8 rounded-full"
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
              to="/"
              className="font-semibold text-white hover:bg-gray-800 hover:text-white"
            >
              <TfiHome />
              Home
            </Link>
          </li>
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
            <button
              className="flex gap-2 font-semibold text-white hover:bg-gray-800 my-1"
              onClick={logOut}
            >
              <AiOutlineLogout className="mt-1" />
              Logout
            </button>
            {/* </Link> */}
          </li>
        </ul>
      </div>

      {/* dashboard side bar */}
      <div className="menu p-2 md:w-64 lg:w-80 min-h-screen bg-blue-500 hidden md:block">
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
              to="/"
              className="font-semibold text-white hover:bg-gray-800 hover:text-white"
            >
              <TfiHome />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="font-semibold text-white hover:bg-gray-800 hover:text-white my-1"
            >
              <CgProfile />
              Profile
            </Link>
          </li>
          <li>
            {/* <Link
            > */}
            <button
              className="flex gap-2 font-semibold text-white hover:bg-gray-800 my-1"
              onClick={logOut}
            >
              <AiOutlineLogout className="mt-1" />
              Logout
            </button>
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
