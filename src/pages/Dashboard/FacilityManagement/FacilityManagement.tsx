/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiViewList } from "react-icons/ci";

import {
  useCreateFacilityMutation,
  useDeleteFacilityMutation,
  useGetAllFacilityQuery,
  useUpdateFacilityMutation,
} from "../../../redux/features/facilitys/facilityApi";
import moment from "moment";
import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const FacilityManagement = () => {
  const [updatableFacility, setUpdatableFacility] = useState([]);
  const [updatableId, setUpdatableId] = useState("");
  const { data: getAllFacility } = useGetAllFacilityQuery(undefined);
  const [addFacility] = useCreateFacilityMutation();
  const [deleteFacility] = useDeleteFacilityMutation();
  const [updateData] = useUpdateFacilityMutation();

  const HandleFindUpdatedFacility = (id: string) => {
    const filterUpdatedFacility = getAllFacility?.data?.filter(
      (item: any) => item?._id == id
    );
    setUpdatableFacility(filterUpdatedFacility);
    setUpdatableId(id);
  };
  const handleUpdateFacility = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const pricePerHour = Number(form.price.value);
    const location = form.location.value;
    const image = form.image.value;
    const description = form.description.value;

    const updateFacilityData = {
      name,
      pricePerHour,
      location,
      image,
      description,
    };
    const data = { id: updatableId, data: updateFacilityData };
    const res = await updateData(data);
    if (res?.data?.success === true) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${(res as any)?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (res.error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${(res as any)?.error?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDeleteFacility = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteFacility(id);
        if (res?.data?.success) {
          Swal.fire({
            title: "Deleted!",
            text: "This Facility has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Sorry!",
            text: "Something want wrong.",
            icon: "error",
          });
        }
      }
    });
  };

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

    const res = await addFacility(addFacilityData);
    if (res?.data?.success === true) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${(res as any)?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (res.error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${(res as any)?.error?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    form.reset();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold text-center pb-3">
          Facility Management
        </h1>
        <div className="flex justify-end items-end">
          <button
            className="btn btn-sm bg-blue-600 text-white hover:text-blue-600"
            onClick={() =>
              (document as any).getElementById("my_modal_2").showModal()
            }
          >
            Add Facility
          </button>
          {/* Start Add facility Modal  */}
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
          {/* End Add facility Modal  */}
        </div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden md:inline-block">No.</th>
              <th>Facility Name</th>
              <th>Pric Per Hour</th>
              <th className="hidden md:inline-block">Created Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {getAllFacility?.data
              ?.filter((item: any) => !item.isDeleted) // Filter out deleted items
              .map((item: any, idx: number) => (
                <tr key={item?._id}>
                  <th className="hidden md:inline-block">{idx + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.pricePerHour}</td>
                  <td className="hidden md:inline-block">
                    {moment(new Date(item?.createdAt)).format("Y-MM-DD")}
                  </td>
                  <td>
                    <div className="flex gap-1 items-center">
                      <div>
                        <button
                          onClick={() =>
                            (document as any)
                              .getElementById("my_modal_3")
                              .showModal()
                          }
                          className="text-xl"
                        >
                          <CiViewList
                            onClick={() => HandleFindUpdatedFacility(item?._id)}
                          />
                        </button>
                        {/* //!! show all data on facility*/}
                        <dialog id="my_modal_3" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <h3 className="font-bold text-lg text-center">
                              {(updatableFacility[0] as any)?.name}
                            </h3>
                            <div>
                              <div className="flex justify-around">
                                <div>
                                  <h1>
                                    Price Per Hour:{" "}
                                    {
                                      (updatableFacility[0] as any)
                                        ?.pricePerHour
                                    }{" "}
                                    tk
                                  </h1>
                                  <h1>
                                    Location:{" "}
                                    {(updatableFacility[0] as any)?.location}
                                  </h1>
                                </div>
                                <div>
                                  <h1>
                                    Created at:{" "}
                                    {moment(
                                      new Date(
                                        (updatableFacility[0] as any)?.createdAt
                                      )
                                    ).format("Y-MM-DD")}
                                  </h1>
                                  <h1>
                                    Updated at:{" "}
                                    {moment(
                                      new Date(
                                        (updatableFacility[0] as any)?.updatedAt
                                      )
                                    ).format("Y-MM-DD")}
                                  </h1>
                                </div>
                              </div>
                              <h1 className="flex justify-center pt-4">
                                {(updatableFacility[0] as any)?.description}
                              </h1>
                            </div>
                          </div>
                        </dialog>
                        {/* modal end */}
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            (document as any)
                              .getElementById("my_modal_4")
                              .showModal()
                          }
                        >
                          <FaRegEdit
                            onClick={() => HandleFindUpdatedFacility(item?._id)}
                            className="text-lg text-blue-500"
                          />
                        </button>
                        {/* //!!!Start update facility Modal  */}
                        <dialog id="my_modal_4" className="modal">
                          <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">
                              Update Facility
                            </h3>

                            <form action="" onSubmit={handleUpdateFacility}>
                              <div className="text-center">
                                <div className="md:flex gap-2 items-center justify-center w-full">
                                  <div className="pt-1 w-full">
                                    <input
                                      type="text"
                                      name="name"
                                      placeholder="Facility Name"
                                      className="input input-bordered w-full "
                                      defaultValue={
                                        (updatableFacility[0] as any)?.name
                                      }
                                    />
                                  </div>
                                  <div className="pt-2 w-full">
                                    <input
                                      type="number"
                                      name="price"
                                      placeholder="Price Per Hour"
                                      className="input input-bordered w-full"
                                      defaultValue={
                                        (updatableFacility[0] as any)
                                          ?.pricePerHour
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="md:flex gap-2 items-center justify-center w-full">
                                  <div className="pt-1 w-full">
                                    <input
                                      type="text"
                                      name="location"
                                      placeholder="Location"
                                      className="input input-bordered w-full"
                                      defaultValue={
                                        (updatableFacility[0] as any)?.location
                                      }
                                    />
                                  </div>
                                  <div className="pt-2 w-full">
                                    <input
                                      type="text"
                                      name="image"
                                      placeholder="Image URL"
                                      className="input input-bordered w-full "
                                      defaultValue={
                                        (updatableFacility[0] as any)?.image
                                      }
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
                                      defaultValue={
                                        (updatableFacility[0] as any)
                                          ?.description
                                      }
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
                        {/* End update facility Modal  */}
                      </div>
                      <div>
                      <button
                        onClick={() => handleDeleteFacility(item?._id)}
                        className="text-xl text-red-500"
                      >
                        <AiFillDelete />
                      </button>
                      </div>
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
