
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingSection from "../Pages/Shared/LoadingSection/LoadingSection";

const PrivateRoute = ({ children }) => {
const {user, loading} = useAuth()
  const location = useLocation()

  if (loading) {
    return <LoadingSection></LoadingSection>
  }

  if(!user) {
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
  }
  return children;
};

export default PrivateRoute;
