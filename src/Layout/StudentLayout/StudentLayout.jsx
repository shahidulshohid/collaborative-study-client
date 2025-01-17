import { NavLink } from "react-router-dom";

const StudentLayout = () => {
    return (
        <div>
            <li>
            <NavLink to="/dashboard/studentHome">Student Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/viewBookSession" className="lg:text-lg font-semibold">
              View booked session
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/createNote" className="lg:text-lg font-semibold">Create note</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/managePersonalNotes" className="lg:text-lg font-semibold">
              Manage personal notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/viewAllMaterials" className="lg:text-lg font-semibold">
              View all study materials
            </NavLink>
          </li>
        </div>
    );
};

export default StudentLayout;