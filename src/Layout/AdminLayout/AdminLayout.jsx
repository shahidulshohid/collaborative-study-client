import { CiViewList } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { SiGooglestreetview } from "react-icons/si";
import { GrUserAdmin } from "react-icons/gr";

const AdminLayout = () => {
  return (
    <div>
      <button className="font-semibold text-lg px-3 rounded-lg bg-white text-black gap-2 my-1 ml-5 flex items-center">
        <GrUserAdmin />
        <h2>Admin</h2>
      </button>
      <li>
        <NavLink
          to="/dashboard/viewAllUsers"
          className="font-semibold text-white hover:bg-gray-800 my-1"
        >
          <HiOutlineUsers />
          View all users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/viewAllStudy"
          className="font-semibold text-white hover:bg-gray-800 my-1"
        >
          <CiViewList />
          View all study session
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/viewAllMaterialsAdmin"
          className="font-semibold text-white hover:bg-gray-800 my-1"
        >
          <SiGooglestreetview /> View all materials
        </NavLink>
      </li>
    </div>
  );
};

export default AdminLayout;
