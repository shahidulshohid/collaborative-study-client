import Lottie from "lottie-react";
import signInLottieData from "../../assets/lottie/signIn.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublice";

const LoginPage = () => {
  const axiosPublic = useAxiosPublic()
  const {signIn, signInWithGoogle, signInWithGithub} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        toast.success("Login is successfully", {
          position: "top-center",
        });

        if (location.state) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-center",
        });
      });
  };

  const handleGoogleLoginHandler = () => {
    signInWithGoogle()
    .then(result => {
      const studentInfo = {
        name: result.user.displayName,
        email:result.user.email,
        photo:result.user.photoURL,
        role:'student'
      }
      axiosPublic.post('/students', studentInfo)
    })

    if (location.state) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };

  const handleGitHubLoginHandler = () => {
    signInWithGithub()
    .then(result => {
      const studentInfo = {
        name: result.user.displayName,
        email:result.user.email,
        photo:result.user.photoURL,
        role:'student'
      }
      axiosPublic.post('/students', studentInfo)
    })

    if (location.state) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6 md:gap-10 lg:gap-24">
        <div className="w-96">
          <Lottie animationData={signInLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-center text-2xl font-bold">
              Login Your Account
            </h3>
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="px-4 py-1 border border-blue-500 bg-transparent text-black hover:bg-blue-500 hover:text-white rounded-sm text-lg font-semibold">
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center -mt-5 gap-6">
            <button onClick={handleGoogleLoginHandler} className="px-4 border border-blue-500 rounded-sm hover:bg-blue-500 hover:text-white font-semibold pb-1">Google</button>
            <button onClick={handleGitHubLoginHandler} className="px-4 border border-blue-500 rounded-sm hover:bg-blue-500 hover:text-white font-semibold pb-1">GitHub</button>
          </div>
          <p className="text-center font-semibold my-3">
            Don't Have Your Account ?{" "}
            <Link className="text-red-500" to="/signUp">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
