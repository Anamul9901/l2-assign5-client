/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../redux/features/facilitys/facilityApi";
import { MdLocationOn } from "react-icons/md";

const Facility = () => {
  const { data: allFacility } = useGetAllFacilityQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");

  const avilableFacility = allFacility?.data?.filter((item: any) => {
    const isNameOrLocationMatch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const isPriceMatch =
      (!minPriceFilter ||
        parseInt(item.pricePerHour) >= parseInt(minPriceFilter)) &&
      (!maxPriceFilter ||
        parseInt(item.pricePerHour) <= parseInt(maxPriceFilter));

    return !item?.isDeleted && isNameOrLocationMatch && isPriceMatch;
  });


  return (
    <div className="min-h-[100vh] max-w-7xl mx-auto w-full py-12 px-2">
      <div>
        <h1 className="text-center text-2xl font-bold">All Facility</h1>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-end pt-2">
        <div className="flex  justify-end gap-2 pb-3">
          <input
            type="text"
            placeholder="Search by name or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-2 py-1 rounded-md"
          />
          <div className="flex">
            <input
              type="number"
              placeholder="Min price"
              value={minPriceFilter}
              onChange={(e) => setMinPriceFilter(e.target.value)}
              className="border flex-1  w-24 px-1 rounded-l-md"
            />
            <input
              type="number"
              placeholder="Max price"
              value={maxPriceFilter}
              onChange={(e) => setMaxPriceFilter(e.target.value)}
              className="border flex-1 w-24 px-1 rounded-r-md"
            />
          </div>
        </div>
      </div>

      {/* Facility Grid */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 justify-center items-center">
        {avilableFacility?.map((item: any) => (
          <div key={item?._id}>
            <div className="rounded-none card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full"
                  src={
                    item?.image ||
                    "https://i.ibb.co/kBNtTmC/No-Image-Available.jpg"
                  }
                  alt={item.name}
                />
              </figure>
              <div className="p-2">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <h2 className="flex items-center gap-1">
                  <MdLocationOn className="text-red-600" />
                  <span className="text-sm">{item.location}</span>
                </h2>
                <h2>Price (per-hour): {item.pricePerHour} tk</h2>
                <div className="card-actions justify-end pt-2">
                  <Link to={`/facility/${item?._id}`} className="btn btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facility;
