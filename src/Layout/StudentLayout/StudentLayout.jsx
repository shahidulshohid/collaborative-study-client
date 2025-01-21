import { NavLink } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { MdViewInAr } from "react-icons/md";
import { TfiHome } from "react-icons/tfi";

const StudentLayout = () => {
    return (
        <div>
            <li>
            <NavLink to="/dashboard" className="font-semibold text-white hover:bg-gray-800 my-1"><TfiHome /> Student Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/viewBookSession" className="font-semibold text-white hover:bg-gray-800 my-1">
            <BsBook /> View booked session
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/createNote" className="font-semibold text-white hover:bg-gray-800 my-1"><FaRegEdit /> Create note</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/managePersonalNotes" className="font-semibold text-white hover:bg-gray-800 my-1">
            <MdFormatListBulleted /> Manage personal notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/viewAllMaterials" className="font-semibold text-white hover:bg-gray-800 my-1">
            <MdViewInAr /> View all study materials
            </NavLink>
          </li>
        </div>
    );
};

export default StudentLayout;