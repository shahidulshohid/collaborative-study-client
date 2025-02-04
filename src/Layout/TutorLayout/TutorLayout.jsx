import { NavLink } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiFileListLine } from "react-icons/ri";
import { MdStreetview } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import useAdmin from "../../Hooks/useAdmin";

const TutorLayout = () => {
  const [role] = useAdmin();
  return (
    <div>
      <button className="font-semibold text-lg px-3 rounded-lg bg-white text-black gap-2 my-1 ml-5 flex items-center">
        <FaChalkboardTeacher />
        <h2>Tutor</h2>
      </button>
      {role === "tutor" && (
        <li>
          <NavLink
            to="/dashboard/tutorHome"
            className="font-semibold text-white hover:bg-gray-800 my-1"
          >
            <AiOutlineHome />
            Tutor Home
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/dashboard/createStudySession"
          className="font-semibold text-white hover:bg-gray-800 my-1"
        >
          <FiEdit /> Create study session
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/viewAllStudyTutor"
          className="font-semibold text-white hover:bg-gray-800 my-1"
        >
          <RiFileListLine />
          View all study sessions
          {/* created by a tutor  */}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/tutorMaterials"
          className="font-semibold text-white hover:bg-gray-800 my-1"
        >
          <MdStreetview /> Upload Materials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/viewAllMaterialsTutor"
          className="font-semibold text-white hover:bg-gray-800 my-1"
        >
          <MdStreetview /> View all materials
        </NavLink>
      </li>
    </div>
  );
};

export default TutorLayout;
