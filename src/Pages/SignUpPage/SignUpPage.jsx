import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/registerImg.json";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaArrowLeftLong } from "react-icons/fa6";

const SignUpPage = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser, updateUserProfile, setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  // handle register
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value

    if (password.length < 6) {
      toast.error("Length must be at least 6 character", {
        position: "top-center",
      });
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!regex.test(password)) {
      toast.error(
        "Must have a Uppercase and Lowercase letter in the password  ",
        {
          position: "top-center",
        }
      );
      return;
    }


   


    createUser(email, password).then((res) => {
      updateUserProfile(name, photo).then(() => {
        //create user entry in the data
        setUser({ displayName: name, photoURL: photo, email: email });
    
      });
      
      const studentInfo = {
        name: name,
        email: email,
        photo: photo,
        role: role,
      };
      axiosPublic.post("/students", studentInfo).then((res) => {
      toast.success(`${role} created is successfully`, {
        position: "top-center",
      });
      navigate("/");
      });
    })
  };

  return (
    <div>
      <Link to="/">
      <button className="ml-20 mt-2 text-blue-500 flex items-center gap-2"><FaArrowLeftLong className="mt-1" /> Back to home</button>
      </Link>
      <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6 md:gap-10 lg:gap-24">
        <div className="w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h3 className="text-center text-2xl font-bold">
              Sign Up Your Account
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="">
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <label className="label" htmlFor="role">
                  Role
                </label>
                <select name="role" className="border p-3 rounded-md bg-white">
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
            </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-5 top-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="form-control mt-4 -mb-8">
              <button className="px-4 py-1 border border-blue-500 bg-transparent text-black hover:bg-blue-500 hover:text-white rounded-sm text-lg font-semibold">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center font-semibold my-3">
            Already Have an account ?{" "}
            <Link className="text-red-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUpPage;
