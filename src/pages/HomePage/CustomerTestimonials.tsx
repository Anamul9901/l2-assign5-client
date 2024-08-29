/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetCustomerReviewQuery } from "../../redux/features/order/orderApi";

const CustomerTestimonials = () => {
  const { data: getCustomerReview } = useGetCustomerReviewQuery(undefined);
  return (
    <div className="flex justify-center items-center">
      <div className="carousel w-full">
        {getCustomerReview?.data?.map((item: any, idx: number) => (
          <div
            id={`slide${idx + 1}`}
            className="carousel-item flex justify-center items-center relative w-full"
            key={idx}
          >
            <div className="">
              <h2 className="text-3xl font-bold text-center mb-12">
                Customer Testimonials
              </h2>
              <div className="space-y-8">
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <div>
                    <p className="text-gray-700 italic mb-4">
                      "{item?.message}"
                    </p>
                    <div className="flex justify-center items-center gap-2">
                      <img
                        className="rounded-full w-15"
                        src={item?.image}
                        alt=""
                      />
                      <div className="text-right text-blue-500 font-bold">
                        {item?.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-5 right-5 md:top-2/3 bottom-0 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${
                  idx === 0 ? getCustomerReview.data.length : idx
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${
                  ((idx + 1) % getCustomerReview.data.length) + 1
                }`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}

        {/* <div
          id="slide2"
          className="carousel-item flex justify-center items-center relative w-full"
        >
          <div className="">
            <h2 className="text-3xl font-bold text-center mb-12">
              Customer Testimonials
            </h2>
            <div className="space-y-8">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "Great experience! The booking process was smooth and the
                  facility was top-notch."
                </p>
                <div className="text-right text-blue-500 font-bold">
                  - John Doe2
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-2/3 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item flex justify-center items-center relative w-full"
        >
          <div className="">
            <h2 className="text-3xl font-bold text-center mb-12">
              Customer Testimonials
            </h2>
            <div className="space-y-8">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "Great experience! The booking process was smooth and the
                  facility was top-notch."
                </p>
                <div className="text-right text-blue-500 font-bold">
                  - John Doe3
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-2/3 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item flex justify-center items-center relative w-full"
        >
          <div className="">
            <h2 className="text-3xl font-bold text-center mb-12">
              Customer Testimonials
            </h2>
            <div className="space-y-8">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "Great experience! The booking process was smooth and the
                  facility was top-notch."
                </p>
                <div className="text-right text-blue-500 font-bold">
                  - John Doe4
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-2/3 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
