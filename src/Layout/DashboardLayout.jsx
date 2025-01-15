import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from '../hooks/useAdmin'

const DashboardLayout = () => {
  // TODO: get  isAdmin value from the database
  // const [isAdmin] = useAdmin()
  // console.log(isAdmin)
  const isAdmin = true;
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="menu p-4 w-64 min-h-screen bg-gray-100">
        <ul>
          {/* {isAdmin ? ( */}
            <>
              <li>
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/viewAllUsers">View all users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/viewAllStudy">
                  View all study session
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/viewAllMaterial">
                  View all materials
                </NavLink>
              </li>
            </>
          {/* ) : ( */}
            <>
              <li>
                <NavLink to="/">Tutor Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/createStudySession">
                  Create study session
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/viewAllStudySession">
                  View all study sessions
                  {/* created by a tutor  */}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/uploadMaterials">
                  Upload materials
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/viewAllMaterials">
                  View all materials
                </NavLink>
              </li>
            </>
          {/* )} */}
          {/* shared nav link */}
          <div className="divider"></div>

          <li>
            <NavLink to="/dashboard/studentHome">Student Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/viewBookSession">
              View booked session
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/createNote">Create note</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/managePersonalNotes">
              Manage personal notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/viewAllMaterials">
              View all study materials
              {/* provided by the tutor */}
            </NavLink>
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
