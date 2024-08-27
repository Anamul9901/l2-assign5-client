/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../redux/features/facilitys/facilityApi";
import { useCheckAvailablBookingQuery } from "../../redux/features/bookings/bookingsApi";
import { useState } from "react";

const BookingPage = () => {
  const [bookingData, setBookingData] = useState();
  const { id } = useParams();
  const { data: allFacility } = useGetAllFacilityQuery(undefined);
  const { data: availableBooking } = useCheckAvailablBookingQuery(bookingData, {
    skip: !bookingData,
  });

  console.log(availableBooking);

  const handleCheckBooking = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = form.date.value;
    const checkBookingData = { date: data, facilityId: id };
    console.log(checkBookingData);
    setBookingData(checkBookingData as any);
  };
  return (
    <div className="min-h-[100vh] max-w-7xl mx-auto w-full">
      <div>
        <h1 className="text-2xl font-bold text-center">Booking page</h1>
      </div>
      <div className="">
        {/* facility */}
        {allFacility?.data
          ?.filter((item: any) => item?._id == id)
          ?.map((item: any) => (
            <div key={item?._id} className="flex justify-center pt-8">
              <div className="bg-slate-200 w-1/2 p-2">
                <h1 className="text-xl font-semibold">{item?.name}</h1>
                <div className="flex gap-5">
                  <h1>Prce: {item?.pricePerHour}$</h1>
                  <h1>Location: {item?.location}</h1>
                </div>
              </div>
            </div>
          ))}
        {/* date picker */}
        <form onSubmit={handleCheckBooking} action="">
          <div className="flex justify-center pt-2">
            <div className=" w-1/2  flex justify-between">
              <input
                required
                className="border px-8"
                type="date"
                name="date"
                id=""
              />
              <button className="btn btn-sm rounded-none w-1/2">Submin</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
