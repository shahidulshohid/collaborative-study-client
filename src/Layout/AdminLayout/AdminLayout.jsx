import { CiViewList } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <li>
              <NavLink to="/dashboard/viewAllUsers" className=" lg:text-lg font-semibold">
                <HiOutlineUsers />
                View all users
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/viewAllStudy" className="lg:text-lg font-semibold">
                <CiViewList />
                View all study session
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/viewAllMaterial"
                className="lg:text-lg font-semibold"
              >
                <CiViewList />

                View all materials
              </NavLink>
            </li>
        </div>
    );
};

export default AdminLayout;