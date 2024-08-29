
const HeroSection = () => {
    return (
        <div className="px-2">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-blue-300">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>

    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-[#f4b70d]">Step-1</time>
      <div className="text-lg font-black">Facility</div>
      First go to facility page
    </div>
    <hr className="bg-blue-300" />
  </li>

  <li>
  <hr className="bg-blue-300" />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-blue-400">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>

    <div className="timeline-end mb-10 md:text-start">
      <time className="font-mono italic text-[#f4b70d]">Step-2</time>
      <div className="text-lg font-black">View Details</div>
      Choes a facility and click 'View Details' button
    </div>
    <hr className="bg-blue-400" />
  </li>

  <li>
  <hr className="bg-blue-400" />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-blue-500">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>

    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-[#f4b70d]">Step-3</time>
      <div className="text-lg font-black">Book Now</div>
      Click the 'Book Now' button.
    </div>
    <hr className="bg-blue-500" />
  </li>

  <li>
  <hr className="bg-blue-500" />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-blue-600">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>

    <div className="timeline-end mb-10 md:text-start">
      <time className="font-mono italic text-[#f4b70d]">Step-4</time>
      <div className="text-lg font-black">Date Chose</div>
      Choase your date and click 'Submit' button. Then You can show all available time slots.
    </div>
    <hr className="bg-blue-600" />
  </li>

  <li>
  <hr className="bg-blue-600" />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-blue-800">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>

    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-[#f4b70d]">Step-5</time>
      <div className="text-lg font-black">Start and End time</div>
      Select your start and end time. Then click 'Proceed to Pay' button.
    </div>
  </li>

</ul>
        </div>
    );
};

export default HeroSection;