import { NavLink } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { MdViewInAr } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";

const StudentLayout = () => {
    return (
        <div>
          <button className="font-semibold text-lg px-3 rounded-lg bg-white text-black gap-2 my-1 ml-5 flex items-center">
          <PiStudentDuotone />
          <h2>Student</h2>
          </button>
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
            <NavLink to="/dashboard/viewAllStudyMaterials" className="font-semibold text-white hover:bg-gray-800 my-1">
            <MdViewInAr /> View all study materials
            </NavLink>
          </li>
        </div>
    );
};

export default StudentLayout;