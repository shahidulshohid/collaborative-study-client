import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Container from "../Container/Container";
import defaultImg from "../../../assets/defaultImg.jpg";
import logo from "../../../assets/logo.jpg";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const [dark, setDark] = React.useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="fixed w-full bg-[#3939c8] z-10 shadow-sm">
      <div className="py-3 lg:py-4">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={logo}
                alt="logo"
                width="100"
                height="100"
              />
              <h3 className="hidden lg:flex text-2xl font-bold text-white">
                Study Sphere
              </h3>
            </Link>
            <div className="hidden md:flex items-center gap-5 text-white text-xl">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/meetTeam">Meet Our Team</NavLink>
              {user && <NavLink to="/dashboard">Dashboard</NavLink>}
            </div>
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* dark mode  */}
                <div className="bg-white w-18 h-18 flex justify-center items-center rounded-full">
                  <button onClick={() => darkModeHandler()}>
                    {dark && <CiDark size={28} />}
                    {!dark && (
                      <h1>
                        <CiLight size={28} />
                      </h1>
                    )}
                  </button>
                </div>
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-xl cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu className="text-white" />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full w-8 h-8"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : defaultImg}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Contact
                    </Link>
                    <Link
                      to="/meetTeam"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Meet Our Team
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
