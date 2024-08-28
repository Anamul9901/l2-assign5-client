const AboutUs = () => {
  return (
    <div className="bg-gray-100">
        <div className="min-h-[100vh] max-w-7xl mx-auto w-full p-6  pb-10 pt-12">
      {/* Mission  */}
      <section className="py-12 bg-white shadow-md rounded-lg mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our mission is to provide a seamless and user-friendly platform for
            booking sports facilities, making it easier for everyone to stay
            active and enjoy their favorite sports.
          </p>
        </div>
      </section>

      {/* Team  Section */}
      <section className="py-12 mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://i.ibb.co/4jnBKKw/pngwing-com-45.png"
                alt="Team Member 2"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Name
              </h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://i.ibb.co/WDcmL7Y/Anamul-haque.jpg"
                alt="Team Member 1"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Anamul Haque
              </h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://i.ibb.co/4jnBKKw/pngwing-com-45.png"
                alt="Team Member 3"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Name
              </h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="py-12 bg-white shadow-md rounded-lg mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Since our founding, we have been dedicated to making sports
            facilities more accessible. Over the years, we have grown to serve
            thousands of users and partnered with top facilities across the
            country.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Contact Information
          </h2>
          <p className="text-lg text-gray-700">
            We're here to help you with any questions or concerns.
          </p>
          <p className="text-lg text-gray-700">
            Office Address: Mirpur-1, Dhaka, Bangladesh
          </p>
          <p className="text-lg text-gray-700">Phone: +8801864668089</p>
          <p className="text-lg text-gray-700">
            Email: anamulhaque9901@gmail.com
          </p>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
