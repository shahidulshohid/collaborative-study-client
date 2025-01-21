import { CiViewList } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { TfiHome } from "react-icons/tfi";
import { SiGooglestreetview } from "react-icons/si";

const AdminLayout = () => {
    return (
        <div>
            <li>
              <NavLink to="/dashboard" className="font-semibold text-white hover:bg-gray-800 my-1">
              <TfiHome />
                Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/viewAllUsers" className="font-semibold text-white hover:bg-gray-800 my-1">
                <HiOutlineUsers />
                View all users
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/viewAllStudy" className="font-semibold text-white hover:bg-gray-800 my-1">
                <CiViewList />
                View all study session
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/viewAllMaterial" className="font-semibold text-white hover:bg-gray-800 my-1"
              >
                <SiGooglestreetview /> View all materials
              </NavLink>
            </li>
        </div>
    );
};

export default AdminLayout;