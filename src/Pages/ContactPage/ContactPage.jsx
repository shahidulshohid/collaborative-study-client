import React, { useEffect } from "react";
import Swal from "sweetalert2";
import contactImg from "../../assets/contactImage.png";
import contactImag2 from "../../assets/contact.jpg";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "../Shared/Container/Container";
function ContactPage() {
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

  useEffect(() => {
      window.document.title = "Contact Page" || "StudySphere"
    }, [])

  return (
    <div className="-mt-6">
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${contactImag2})`,
        height: "350px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='text-center text-white'>
        <h3 className="text-3xl md:text-5xl font-bold mb-2">
          Get In Touch With Ws
        </h3>
        <p className="text-white md:w-6/12 lg:w-5/12 mx-auto text-center px-2">
          Don't hesitate to contact with us. Feel free to get in touch with
          us. I am always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>
      </div>
    </div>
    <Container>
      <div className="pt-12">
        <div className="lg:flex items-center">
          <div className="flex-1">
            <img
              className="h-[400px] w-full object-cover"
              src={contactImg}
              alt=""
            />
          </div>
          <div className="flex-1">
            <div>
                <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Contact Info</h2>
                <div className="flex items-center gap-2 my-5 text-white bg-[#3939c8] py-4 px-4 text-lg md:text-xl md:w-1/2 rounded-sm">
                    <p><FaWhatsapp size={24}/></p>
                    <p>WhatsApp: +8801738283277</p>
                </div>
            </div>
            <form onSubmit={onSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered"
                  id=""
                ></textarea>
              </div>
              <button
                className="btn bg-[#3939c8] hover:bg-green-600 border-[#3939c8] text-lg text-white mt-3"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default ContactPage;
