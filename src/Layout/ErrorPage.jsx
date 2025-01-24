import { Link } from "react-router-dom";
import pageNotFound from "../assets/pageNotFound.png";
import { FaArrowLeftLong } from "react-icons/fa6";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2 ml-10 mt-5 text-lg font-semibold text-green-800">
      <FaArrowLeftLong className="mt-1"/> 
        <Link to="/">Back To Home</Link>
      </div>
      <div className="flex justify-center items-center">
        <img src={pageNotFound} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
