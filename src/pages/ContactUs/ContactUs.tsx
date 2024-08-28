/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Swal from "sweetalert2";
import GoogleMapReact from 'google-map-react';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qo1r6jo",
        "template_0h2ytja",
        (form as any).current,
        "pbLzIm3Ta3Mtb_nbp"
      )
      .then(
        (result) => {
          console.log(result);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message sent successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const AnyReactComponent = ({ text }: any) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="style max-w-7xl mx-auto w-full">
      <h1 className="text-center font-bold text-3xl pt-10">Contact Us</h1>
      <div className="pt-4 min:h-[100vh]  items-center">
        <div className="grid md:grid-cols-2 gap-4 text-white md:w-2/3 w-full mx-auto justify-center">
          <div className=" bg-stone-700  rounded-md p-5  flex items-center gap-5">
            <div className="btn rounded-full text-xl">
              <FaLocationDot />
            </div>
            <div>
              <h2 className="text-xl font-bold">My Address</h2>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="  p-5 flex items-center gap-5 bg-stone-700 rounded-md">
            <div className="btn rounded-full text-xl">
              <IoShareSocialOutline />
            </div>
            <div>
              <h2 className="text-xl font-bold">Social Profiles</h2>
              <div className="flex items-center gap-1">
                <NavLink
                  to="https://www.linkedin.com/in/anamul-haque-772264299/"
                  target="_blan"
                  className="btn glass rounded-full btn-sm text-white"
                >
                  <FaLinkedin />
                </NavLink>

                <NavLink
                  to="https://github.com/Anamul9901"
                  target="_blank"
                  className="btn glass rounded-full btn-sm text-white"
                >
                  <FaGithub />
                </NavLink>

                <NavLink
                  to="https://www.facebook.com/Anamul114"
                  target="_blank"
                  className="btn glass rounded-full btn-sm text-white"
                >
                  <FaFacebook />
                </NavLink>
              </div>
            </div>
          </div>
          <div className=" bg-stone-700 rounded-md p-5 flex items-center gap-5">
            <div className="btn rounded-full text-xl">
              <MdOutlineMail />
            </div>
            <div>
              <h2 className="text-xl font-bold">Email Me</h2>
              <p>anamulhaque9901@gmail.com</p>
            </div>
          </div>

          <div className=" bg-stone-700 rounded-md p-5 flex items-center gap-5">
            <div className="btn rounded-full text-xl">
              <IoMdCall />
            </div>
            <div>
              <h2 className="text-xl font-bold">Call Me</h2>
              <p>+8809696668089</p>
            </div>
          </div>
        </div>

        {/* email */}

        <h1 className="text-2xl font-bold text-center pt-20">
          Send Email Message
        </h1>

        <div className="pt-3 md:w-2/3 mx-auto px-12 md:px-0">
          <form ref={form as any} onSubmit={sendEmail}>
            <div className="">
              <div className="">
                <div className="md:flex gap-4 pb-4 justify-center">
                  <div className="pb-4 md:pb-0 w-full">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                      name="from_name"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input  input-bordered w-full"
                      name="from_email"
                      required
                    />
                  </div>
                </div>

                <div className="md:flex items-center gap-4 pb-4">
                  <div className="pb-4 md:pb-0 w-full">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input  input-bordered w-full"
                      name="from_subject"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Your Message"
                      className="input input-bordered w-full"
                      name="message"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="text-center pb-10">
                <input
                  className="btn bg-stone-400 uppercase text-white btn-sm w-full"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>

        {/* google map  */}

        <div className="pb-10 pt-20">
          <div style={{ height: "500px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                //   lat={59.955413}
                //   lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
