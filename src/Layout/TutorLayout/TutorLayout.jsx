import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiFileListLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";
import { MdStreetview } from "react-icons/md";

const TutorLayout = () => {
    return (
        <div>
            <li>
              <NavLink to="/" className="font-semibold text-white hover:bg-gray-800 my-1">
                <AiOutlineHome />
                Tutor Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/createStudySession" className="font-semibold text-white hover:bg-gray-800 my-1">
              <FiEdit /> Create study session
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/viewAllStudyTutor" className="font-semibold text-white hover:bg-gray-800 my-1">
              <RiFileListLine />View all study sessions
                {/* created by a tutor  */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/uploadMaterials" className="font-semibold text-white hover:bg-gray-800 my-1">
              <FiUpload /> Upload materials
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/viewAllMaterials" className="font-semibold text-white hover:bg-gray-800 my-1">
              <MdStreetview /> View all materials
              </NavLink>
            </li>
        </div>
    );
};

export default TutorLayout;