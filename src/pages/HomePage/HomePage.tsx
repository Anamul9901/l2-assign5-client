import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";

const HomePage = () => {
  return (
    <div className="font-sans mx-auto w-full">
      {/* Header */}

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[92vh]"
        style={{ backgroundImage: "https://i.ibb.co/99pvnRm/banner-bg.jpg" }}
      >
        <h1 className="text-black text-3xl font-bold text-center pt-10">
          Guide for booking
        </h1>
        <div className=" bg-white bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
          <HeroSection />
        </div>
      </section>

      {/* Featured Facilities */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
          Popular Facilities
          </h2>
          <div className="">
            {/* Facility Card */}
            {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/assets/facility1.jpg"
                alt="Facility 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Football Ground</h3>
                <p className="text-gray-700 mb-4">
                  A premium football ground with top-notch facilities.
                </p>
                <NavLink
                  to="/facility/1"
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </NavLink>
              </div>
            </div> */}
            <FeaturedSection />
            {/* Repeat Facility Card as needed */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-6xl mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Search Facilities</h3>
              <p>
                Find the perfect sports facility by browsing our extensive
                listings.
              </p>
            </div>
            <div>
              <div className="text-6xl mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Check Availability</h3>
              <p>Select your desired date and time to see available slots.</p>
            </div>
            <div>
              <div className="text-6xl mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Book & Enjoy</h3>
              <p>Book your slot online and enjoy your favorite sport!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Customer Testimonials
          </h2>
          <div className="space-y-8">
            {/* Testimonial Item */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">
                "Great experience! The booking process was smooth and the
                facility was top-notch."
              </p>
              <div className="text-right text-blue-500 font-bold">
                - John Doe
              </div>
            </div>
            {/* Repeat Testimonial Item as needed */}
          </div>
        </div>
      </section>

      {/* Unique Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-8">
            We offer the best sports facilities in town with a hassle-free
            booking process. Whether you're a beginner or a pro, we've got you
            covered!
          </p>
          <NavLink
            to="/about"
            className="btn bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          >
            Learn More
          </NavLink>
        </div>
      </section>

      {/* Footer */}
    </div>

    // <div className="font-sans bg-gray-100 text-gray-900">
    //   {/* Header */}
    //   <header className="bg-white shadow-md sticky top-0 z-10">
    //     <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
    //       <div className="text-2xl font-bold text-blue-600">
    //         Sports Facility
    //       </div>
    //       <nav className="space-x-8 text-lg">
    //         <NavLink to="/" className="hover:text-blue-600">
    //           Home
    //         </NavLink>
    //         <NavLink to="/about" className="hover:text-blue-600">
    //           About Us
    //         </NavLink>
    //         <NavLink to="/facilities" className="hover:text-blue-600">
    //           Facilities
    //         </NavLink>
    //         <NavLink to="/contact" className="hover:text-blue-600">
    //           Contact Us
    //         </NavLink>
    //       </nav>
    //       <div className="space-x-4">
    //         <NavLink
    //           to="/login"
    //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    //         >
    //           Login
    //         </NavLink>
    //         <NavLink
    //           to="/register"
    //           className="bg-gray-200 text-gray-900 px-4 py-2 rounded hover:bg-gray-300"
    //         >
    //           Register
    //         </NavLink>
    //       </div>
    //     </div>
    //   </header>

    //   {/* Hero Section */}
    //   <section className="relative bg-blue-600 text-white h-screen flex items-center justify-center">
    //     <div className="text-center">
    //       <h1 className="text-5xl font-bold mb-6">
    //         Book Your Sports Facility Now
    //       </h1>
    //       <p className="text-xl mb-10">
    //         Explore, book, and enjoy top sports facilities near you with ease.
    //       </p>
    //       <NavLink
    //         to="/facilities"
    //         className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100"
    //       >
    //         Get Started
    //       </NavLink>
    //     </div>
    //     <div className="absolute inset-x-0 bottom-0 text-center mb-4 animate-bounce">
    //       <span className="text-lg font-semibold">Scroll Down</span>
    //     </div>
    //   </section>

    //   {/* Featured Facilities */}
    //   <section className="py-20 bg-white">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <h2 className="text-4xl font-bold text-center mb-12">
    //         Featured Facilities
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //         {/* Facility Card */}
    //         <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
    //           <img
    //             src="/assets/facility2.jpg"
    //             alt="Facility 2"
    //             className="w-full h-56 object-cover"
    //           />
    //           <div className="p-6">
    //             <h3 className="text-2xl font-bold mb-2">Basketball Court</h3>
    //             <p className="text-gray-600 mb-4">
    //               Indoor court with modern facilities for all skill levels.
    //             </p>
    //             <NavLink
    //               to="/facility/2"
    //               className="text-blue-600 hover:underline font-semibold"
    //             >
    //               View Details
    //             </NavLink>
    //           </div>
    //         </div>
    //         {/* Repeat Facility Card as needed */}
    //       </div>
    //     </div>
    //   </section>

    //   {/* How It Works */}
    //   <section className="py-20 bg-gray-50">
    //     <div className="max-w-7xl mx-auto px-6 text-center">
    //       <h2 className="text-4xl font-bold text-gray-800 mb-12">
    //         How It Works
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         <div className="px-6">
    //           <div className="text-6xl text-blue-600 mb-4">1</div>
    //           <h3 className="text-2xl font-semibold mb-4">Search Facilities</h3>
    //           <p className="text-gray-600">
    //             Discover a wide range of sports facilities and find the one that
    //             suits your needs.
    //           </p>
    //         </div>
    //         <div className="px-6">
    //           <div className="text-6xl text-blue-600 mb-4">2</div>
    //           <h3 className="text-2xl font-semibold mb-4">
    //             Check Availability
    //           </h3>
    //           <p className="text-gray-600">
    //             Easily check available slots for your desired date and time.
    //           </p>
    //         </div>
    //         <div className="px-6">
    //           <div className="text-6xl text-blue-600 mb-4">3</div>
    //           <h3 className="text-2xl font-semibold mb-4">Book & Enjoy</h3>
    //           <p className="text-gray-600">
    //             Book your facility online and get ready to enjoy your game!
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Customer Testimonials */}
    //   <section className="py-20 bg-white">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <h2 className="text-4xl font-bold text-center mb-12">
    //         Customer Testimonials
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //         {/* Testimonial Item */}
    //         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    //           <p className="text-gray-600 italic mb-4">
    //             "Amazing experience! The booking process was seamless, and the
    //             facilities were excellent."
    //           </p>
    //           <div className="text-right font-bold text-blue-600">
    //             - Jane Smith
    //           </div>
    //         </div>
    //         {/* Repeat Testimonial Item as needed */}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Unique Section */}
    //   <section className="py-20 bg-blue-600 text-white text-center">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
    //       <p className="text-lg mb-8">
    //         Be part of a growing community of sports enthusiasts who enjoy the
    //         best facilities in town.
    //       </p>
    //       <NavLink
    //         to="/about"
    //         className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100"
    //       >
    //         Learn More
    //       </NavLink>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="bg-gray-900 text-white py-8">
    //     <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
    //       <div>&copy; 2024 Sports Facility Booking. All rights reserved.</div>
    //       <div className="flex space-x-4">
    //         <a
    //           href="https://linkedin.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <FaLinkedin className="text-xl hover:text-gray-400" />
    //         </a>
    //         <a
    //           href="https://github.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <FaGithub className="text-xl hover:text-gray-400" />
    //         </a>
    //         <a
    //           href="https://facebook.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <FaFacebook className="text-xl hover:text-gray-400" />
    //         </a>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
};

export default HomePage;
