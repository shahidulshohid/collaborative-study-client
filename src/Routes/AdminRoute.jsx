import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import LoadingSection from "../Pages/Shared/LoadingSection/LoadingSection";

const AdminRoute = ({children}) => {
    const [role, isLoading] = useAdmin()

    if (isLoading) {
      return <LoadingSection></LoadingSection>
    }
  
    if (role === "admin") return children 
      return <Navigate state={{ from: location.pathname }} to="/dashboard"></Navigate>
};

export default AdminRoute;
