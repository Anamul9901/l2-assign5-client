import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">&copy; 2024 Sport Zone. All rights reserved.</div>

       <div className="md:flex gap-8 items-center">
       <div className="flex gap-2 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/anamul-haque-772264299/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-gray-400" />
          </a>
          <a
            href="https://github.com/Anamul9901"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl hover:text-gray-400" />
          </a>
          <a
            href="https://www.facebook.com/Anamul114"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl hover:text-gray-400" />
          </a>
        </div>

        <div className="mt-4 md:mt-0">
          <nav className=" text-center flex gap-3 items-center justify-center">
            <Link to="/about-us" className="link link-hover">
              About us
            </Link>
            <Link to="/contact-us" className="link link-hover">
              Contact
            </Link>
          </nav>
        </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
