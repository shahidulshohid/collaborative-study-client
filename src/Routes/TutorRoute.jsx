import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import LoadingSection from "../Pages/Shared/LoadingSection/LoadingSection";

const TutorRoute = ({children}) => {
    const [role, isLoading] = useAdmin()

  if (isLoading) {
    return <LoadingSection></LoadingSection>
  }

  if (role === "tutor") return children 
    return <Navigate state={{ from: location.pathname }} to="/dashboard"></Navigate>
    
};

export default TutorRoute;
