// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Lottie from "lottie-react";
// import registerImg from "../../assets/lottie/registerImg.json";
// import useAuth from "../../Hooks/useAuth";

// const SignUpPage = () => {
//   const navigate = useNavigate();
//   const { createUser, updateUserProfile, setUser } = useAuth()
//   const [showPassword, setShowPassword] = useState(false);

//   // handle register
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const photo = e.target.photo.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value

//     const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

//     if (!regex.test(password)) {
//       toast.error(
//         "Must have a Uppercase and Lowercase letter in the password  ",
//         {
//           position: "top-center",
//         }
//       );
//       return;
//     }

//     if (password.length < 6) {
//       toast.error("Length must be at least 6 character", {
//         position: "top-center",
//       });
//       return;
//     }

//     createUser(email, password).then((res) => {
//       console.log(res.user);
//       updateUserProfile(name, photo);
//       setUser({ displayName: name, photoURL: photo, email: email });
//       toast.success("Sign Up is successfully", {
//         position: "top-center",
//       });
//       navigate("/");
//     });
//   };

//   return (
//     <div className="hero min-h-screen">
//       <div className="hero-content flex-col md:flex-row-reverse">
//         <div className="text-center lg:text-left lg:w-5/12">
//           <Lottie animationData={registerImg} loop={true} />;
//         </div>
//         <div className="card bg-base-100 shrink-0 shadow-2xl">
//           <form onSubmit={handleSubmit} className="card-body">
//             <h3 className="text-center text-2xl font-bold">
//               Register Your Account
//             </h3>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="name"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Photo URL</span>
//               </label>
//               <input
//                 type="text"
//                 name="photo"
//                 placeholder="photo-url"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control relative">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 required
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="btn btn-xs absolute right-5 top-12"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//             <div className="form-control mt-4 -mb-8">
//               <button className="px-4 py-1 border border-blue-500 bg-transparent text-black hover:bg-blue-500 hover:text-white rounded-sm text-lg font-semibold">
//                 Sign Up
//               </button>
//             </div>
//           </form>
//           <p className="text-center font-semibold my-3">
//             Already Have an account ?{" "}
//             <Link className="text-red-500" to="/login">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;





import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json'
import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, setUser } = useAuth()
  const [showPassword, setShowPassword] = useState(false);

  // handle register
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

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
      updateUserProfile(name, photo)
      .then(()=> {
        //create user entry in the data
        setUser({ displayName: name, photoURL: photo, email: email });
      })
      toast.success("Sign Up is successfully", {
        position: "top-center",
      });
      navigate("/");
    });
  };

  return (
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
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
  );
};

export default SignUpPage;


