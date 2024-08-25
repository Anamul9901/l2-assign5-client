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
  const [modalData, setModalData] = useState();
  console.log(getSingleBooking);

  const handleShowDetails = (id: string) => {
    console.log(id);
    const filterData = getSingleBooking?.data?.filter(
      (item: any) => item?._id == id
    );
    setModalData(filterData);
  };
  console.log('modal', modalData);
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
              <th>Start Time</th>
              <th>End Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getSingleBooking?.data?.map((item: any, idx: number) => (
              <tr key={item?._id}>
                <th>{idx + 1}</th>
                <td>{item?.facility?.name}</td>
                <td>{item?.startTime}</td>
                <td>{item?.endTime}</td>
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
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p>
                        <div>
                          <h1>{item?.startTime}</h1>
                        </div>
                      </div>
                    </dialog>
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
