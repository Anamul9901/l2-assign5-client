/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdCancel } from "react-icons/md";
import {
  useCancelBookingMutation,
  useGetSingleBookingQuery,
} from "../../../redux/features/bookings/bookingsApi";
import { CiViewList } from "react-icons/ci";
import { TbClockCancel } from "react-icons/tb";
import { useState } from "react";

const MyBookings = () => {
  const { data: getSingleBooking } = useGetSingleBookingQuery(undefined);
  const [cancelBooking] = useCancelBookingMutation();
  const [modalData, setModalData] = useState([]);
  console.log(getSingleBooking);

  const handleShowDetails = (id: string) => {
    console.log(id);
    const filterData = getSingleBooking?.data?.filter(
      (item: any) => item?._id == id
    );
    setModalData(filterData);
  };

  const handleCancel = async (id: string) => {
    console.log(id);
    const res = await cancelBooking(id);
    console.log("res", res);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Facility Name</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getSingleBooking?.data?.map((item: any, idx: number) => (
              <tr key={item?._id}>
                <th>{idx + 1}</th>
                <td>{item?.facility?.name}</td>
                <td>{item?.date}</td>
                <td>{item?.startTime}</td>
                <td>
                  <div className="flex gap-1 items-center">
                    <div onClick={() => handleShowDetails(item?._id)}>
                      <button
                        onClick={() =>
                          (document as any)
                            .getElementById("my_modal_3")
                            .showModal()
                        }
                        className="text-xl text-green-500"
                      >
                        <CiViewList />
                      </button>
                    </div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg text-center">
                          {(modalData[0] as any)?.facility?.name}
                        </h3>
                        <div>
                          <div className="flex justify-around">
                            <div>
                              <h1>
                                Price Per Hour:{" "}
                                {((modalData[0] as any) as any)?.facility?.pricePerHour}$
                              </h1>
                              <h1>
                                Payable Amount: {(modalData[0] as any)?.payableAmount}$
                              </h1>
                              <h1>
                                Location: {(modalData[0] as any)?.facility?.location}
                              </h1>
                            </div>
                            <div>
                              <h1>Date: {(modalData[0] as any)?.date}$</h1>
                              <h1>Start Time: {(modalData[0] as any)?.startTime}$</h1>
                              <h1>End Time: {(modalData[0] as any)?.endTime}$</h1>
                            </div>
                          </div>
                          <h1 className="flex justify-center">
                            {(modalData[0] as any)?.facility?.description}
                          </h1>
                        </div>
                      </div>
                    </dialog>
                    {/* modal end */}
                    {item?.isBooked == "canceled" ? (
                      <button className="text-xl text-red-500">
                        <MdCancel />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCancel(item?._id)}
                        className="text-xl text-green-500"
                      >
                        <TbClockCancel />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
