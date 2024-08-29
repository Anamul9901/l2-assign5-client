import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    /**
     * <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
     */
    <footer className="bg-gray-800 text-white py-14">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>&copy; 2024 Sports Facility Booking. All rights reserved.</div>

        <div className="flex space-x-4">
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
        <div>
          <nav className="grid grid-flow-col gap-4">
            <Link to='/about-us' className="link link-hover">About us</Link>
            <Link to='/contact-us' className="link link-hover">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
