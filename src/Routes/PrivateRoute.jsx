
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
const {user, loading} = useAuth()
  const location = useLocation()

  if (loading) {
    return (<div className="text-center h-screen">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
      )
  }

  if(!user) {
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
  }
  return children;
};

export default PrivateRoute;
