/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiViewList } from "react-icons/ci";

import {
  useCreateFacilityMutation,
  useGetAllFacilityQuery,
} from "../../../redux/features/facilitys/facilityApi";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const FacilityManagement = () => {
  const { data: getAllFacility } = useGetAllFacilityQuery(undefined);
  const [addFacility, { error }] = useCreateFacilityMutation();
  console.log("add error", error);

  const handleAddFacility = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const pricePerHour = Number(form.price.value);
    const location = form.location.value;
    const image = form.image.value;
    const description = form.description.value;

    const addFacilityData = {
      name,
      pricePerHour,
      location,
      image,
      description,
    };
    console.log(addFacilityData);

    const res = await addFacility(addFacilityData);
    console.log(res);
    if (res?.data?.success === true) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${(res as any)?.data?.messaage}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (res.error) {
      console.log((res as any)?.error?.data?.messaage);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${(res as any)?.error?.data?.messaage}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    form.reset();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-end items-end">
          <button
            className="btn btn-sm"
            onClick={() =>
              (document as any).getElementById("my_modal_2").showModal()
            }
          >
            Add Facility
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">
                Add New Facility
              </h3>

              <form action="" onSubmit={handleAddFacility}>
                <div className="text-center">
                  <div className="md:flex gap-2 items-center justify-center w-full">
                    <div className="pt-1 w-full">
                      <input
                        type="text"
                        name="name"
                        placeholder="Facility Name"
                        className="input input-bordered w-full "
                        required
                      />
                    </div>
                    <div className="pt-2 w-full">
                      <input
                        type="number"
                        name="price"
                        placeholder="Price Per Hour"
                        className="input input-bordered w-full "
                        required
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-2 items-center justify-center w-full">
                    <div className="pt-1 w-full">
                      <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="input input-bordered w-full "
                        required
                      />
                    </div>
                    <div className="pt-2 w-full">
                      <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="input input-bordered w-full "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="pt-1 pb-2 w-full">
                      <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <button className="btn btn-sm">Submit</button>
                </div>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Facility Name</th>
              <th>Pric Per Hour</th>
              <th>Created Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {getAllFacility?.data?.map((item: any, idx: number) => (
              <tr key={item?._id}>
                <th>{idx + 1}</th>
                <td>{item?.name}</td>
                <td>{item?.pricePerHour}</td>
                <td>{moment(new Date(item?.createdAt)).format("Y-MM-DD")}</td>
                <td>
                  <div className="flex gap-1 items-center">
                    <Link
                      to={`/dashboard/single-facility/${item?._id}`}
                      className="text-xl text-green-500"
                    >
                      <CiViewList />
                    </Link>
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

export default FacilityManagement;
