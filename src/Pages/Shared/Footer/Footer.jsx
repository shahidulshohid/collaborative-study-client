import Container from "../Container/Container";
import logo from "../../../assets/logo.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88f9a790-8572-4074-aec2-b48c5e4ba0a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Email sent successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="my-12">
      <Container>
        <footer className="footer bg-gray-800 p-10">
          <div className="flex justify-between">
            <div className="flex-col">
              <div className="flex items-center gap-3">
                <img className="w-12 h-12 rounded-full" src={logo} alt="" />
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Study Sphere
                </h3>
              </div>
              <p className="text-white max-w-xl my-3">
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
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Contact Us
              </h3>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
