import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const TutorLayout = () => {
    return (
        <div>
            <li>
              <NavLink to="/">
                <AiOutlineHome />
                Tutor Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/createStudySession" className="lg:text-lg font-semibold">
                Create study session
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/viewAllStudySession" className="lg:text-lg font-semibold">
                View all study sessions
                {/* created by a tutor  */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/uploadMaterials" className="lg:text-lg font-semibold">
                Upload materials
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/viewAllMaterials" className="lg:text-lg font-semibold">
                View all materials
              </NavLink>
            </li>
        </div>
    );
};

export default TutorLayout;