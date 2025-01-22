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
      {/* for responsive (sidebar)*/}
      <div className="drawer drawer-end lg:hidden z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary m-4"
          >
            <FaBars />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-blue-500 w-80 p-4">
            {/* Sidebar content here */}
            <li className=" bg-blue-500 rounded-xl mb-2">
              <NavLink to="/">
                <h3 className="text-2xl font-bold text-white">
                  Study Sphere
                </h3>
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
                to="/dashboard/myProfile"
                className="font-semibold text-white hover:bg-gray-800 my-1"
              >
                <CgProfile />
                Profile
              </Link>
            </li>
            <li>
            <Link
            >
              <button className="flex gap-2 font-semibold text-white hover:bg-gray-800 my-1" onClick={logOut}><AiOutlineLogout className="mt-1" />
              Logout</button>
            </Link>
          </li>
          </ul>
        </div>
      </div>

      {/* dashboard side bar */}
      <div className="hidden lg:block menu p-2 md:w-64 lg:w-80 min-h-screen bg-blue-500">
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
              to="/dashboard/myProfile"
              className="font-semibold text-white hover:bg-gray-800 hover:text-white my-1"
            >
              <CgProfile />
              Profile
            </Link>
          </li>
          <li>
            <Link
            >
              <button className="flex gap-2 font-semibold text-white hover:bg-gray-800 my-1" onClick={logOut}><AiOutlineLogout className="mt-1" />
              Logout</button>
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
