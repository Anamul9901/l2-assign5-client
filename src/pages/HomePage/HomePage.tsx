import { NavLink } from "react-router-dom";
import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";
import CustomerTestimonials from "./CustomerTestimonials";

const HomePage = () => {
  return (
    <div className="font-sans mx-auto w-full">
      {/* Header */}

      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-gray-100 h-[92vh]"
        style={{ backgroundImage: "https://i.ibb.co/99pvnRm/banner-bg.jpg" }}
      >
        <h1 className="text-black text-3xl font-bold text-center pt-10">
          Guide for booking
        </h1>
        <div className=" bg-opacity-50 pt-12 flex flex-col justify-center items-center text-white">
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
            <FeaturedSection />
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

        <CustomerTestimonials />
        </div>
      </section>

      {/* Unique Section */}
      <section className="py-16 bg-gray-200 text-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-8">
            We offer the best sports facilities in town with a hassle-free
            booking process. Whether you're a beginner or a pro, we've got you
            covered!
          </p>
          <NavLink
            to="/about-us"
            className="btn bg-blue-700 text-white px-6 py-3 rounded hover:bg-green-600"
          >
            Learn More
          </NavLink>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;
