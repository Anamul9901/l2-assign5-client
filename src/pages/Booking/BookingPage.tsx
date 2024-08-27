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

  console.log("avaial", availableBooking?.data);

  const handleCheckBooking = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = form.date.value;
    const checkBookingData = { date: data, facilityId: id };
    setBookingData(checkBookingData as any);
  };

  // ------------------------
  function mergeTimeSlots(data: any) {
    if (data.length === 0) return [];

    const mergedSlots = [];
    let currentSlot = { ...data[0] };

    for (let i = 1; i < data.length; i++) {
      if (data[i].startTime === currentSlot.endTime) {
        currentSlot.endTime = data[i].endTime;
      } else {
        mergedSlots.push(currentSlot);
        currentSlot = { ...data[i] };
      }
    }

    mergedSlots.push(currentSlot); // Push the last merged slot

    return mergedSlots;
  }

  const mergedData = mergeTimeSlots(availableBooking?.data || []);
  console.log("convert format", mergedData);
  //----------------------------

  const handleBooking = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const startTime = form.startTime.value;
    const endTime = form.endTime.value;

    const bookingData = { startTime, endTime };
    console.log(bookingData);
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
        {/* Start form */}
        <form onSubmit={handleCheckBooking} action="">
          <div className="flex justify-center pt-2">
            {/* date picker */}
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
        {/* End form */}

        {/* start avilabile time div  */}
        <div className="pt-6">
          <h1 className="text-center text-xl font-semibold pb-2">
            Available Slots
          </h1>
          <div className="flex justify-center ">
            <div className=" w-1/2 grid grid-cols-2 justify-between gap-3 items-center">
              {mergedData?.map((item: any, idx: number) => (
                <div key={idx} className="w-full">
                  <div className="bg-slate-300 text-center py-1">
                    <h1>
                      {item?.startTime} - {item?.endTime}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {mergedData.length == 0 && (
            <h1 className="text-center border w-1/2 mx-auto">
              Slot not available
            </h1>
          )}
        </div>
        {/* End avilabile time div  */}

        {/* start book time div  */}
        <form onSubmit={handleBooking} action="">
          <div className="flex justify-center pt-6">
            <div className=" w-1/2 flex justify-between gap-8 items-center">
              <div className="w-full">
                <h1>Start Time</h1>
                <div className=" border text-center">
                  <input
                    className="py-1 w-full"
                    name="startTime"
                    type="time"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <h1>End Time</h1>
                <div className=" border text-center">
                  <input
                    className="py-1 w-full"
                    name="endTime"
                    type="time"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-6 w-1/2 mx-auto">
            <button className="btn btn-sm w-full rounded-none">submit</button>
          </div>
        </form>
        {/* end book time div  */}
      </div>
    </div>
  );
};

export default BookingPage;
