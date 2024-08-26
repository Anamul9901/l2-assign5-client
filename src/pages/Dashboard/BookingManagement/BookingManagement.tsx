/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBookingQuery } from "../../../redux/features/bookings/bookingsApi";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";

const BookingManagement = () => {
  const { data: getSingleBooking } = useGetAllBookingQuery(undefined);
  const [modalData, setModalData] = useState([]);

  const handleShowDetails = (id: string) => {
    const filterData = getSingleBooking?.data?.filter(
      (item: any) => item?._id == id
    );
    setModalData(filterData);
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
              <th>Details</th>
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
                                {
                                  (modalData[0] as any as any)?.facility
                                    ?.pricePerHour
                                }
                                $
                              </h1>
                              <h1>
                                Payable Amount:{" "}
                                {(modalData[0] as any)?.payableAmount}$
                              </h1>
                              <h1>
                                Location:{" "}
                                {(modalData[0] as any)?.facility?.location}
                              </h1>
                            </div>
                            <div>
                              <h1>Date: {(modalData[0] as any)?.date}$</h1>
                              <h1>
                                Start Time: {(modalData[0] as any)?.startTime}$
                              </h1>
                              <h1>
                                End Time: {(modalData[0] as any)?.endTime}$
                              </h1>
                            </div>
                          </div>
                          <h1 className="flex justify-center">
                            {(modalData[0] as any)?.facility?.description}
                          </h1>
                        </div>
                      </div>
                    </dialog>
                    {/* modal end */}
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

export default BookingManagement;
