import Container from "../Container/Container";
import logo from "../../../assets/logo.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Footer = () => {
  return (
    <div className="my-16 bg-gray-800 dark:bg-[#3939c8]">
      <Container>
        <footer className=" lg:p-10 pt-5">
          <div className="md:flex justify-between">
            <div className="flex-col">
              <div className="flex items-center gap-3">
                <img className="w-12 h-12 rounded-full" src={logo} alt="" />
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">
                  Study Sphere
                </h3>
              </div>
              <p className="text-gray-300 max-w-lg my-3">
                The Study Sphere refers to an environment, platform, or
                ecosystem designed to facilitate learning, research, and
                personal development. It can encompass physical spaces, digital
                platforms, or even conceptual frameworks that aim to create a
                conducive atmosphere for study and academic growth.
              </p>
              <div className="flex items-center gap-3 text-white text-2xl">
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="https://bd.linkedin.com/"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  <FaInstagramSquare />
                </Link>
                <Link
                  to="https://www.whatsapp.com/"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  <FaWhatsappSquare />
                </Link>
              </div>
            </div>
            <div className="text-gray-300">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Features</h3>
              <p>Study session section</p>
              <p>Tutor Section</p>
              <p>View booked session</p>
              <p>Create note</p>
              <p>Manage personal notes</p>
              <p>View all study materials</p>
            </div>

            <div className="text-gray-300">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Contact Us</h3>
            <h4>Email: shahidulislamshohid7@gmail.com</h4>
            <h4>Phone: 01738283277</h4>
            </div>
          </div>
          <p className="text-center text-gray-300 mt-5">© 2025 Study Sphere. All rights reserved.</p>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
