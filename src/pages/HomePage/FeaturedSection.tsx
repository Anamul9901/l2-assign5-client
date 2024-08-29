/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdLocationOn } from "react-icons/md";
import { useGetAllFacilityQuery } from "../../redux/features/facilitys/facilityApi";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const { data: allFacility } = useGetAllFacilityQuery(undefined);
  const filterFacility = allFacility?.data
    ?.filter((item: any) => !item?.isDeleted)
    .slice(0, 4);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 justify-center items-center">
      {filterFacility?.map((item: any) => (
          <div key={item?._id}>
            <div className="rounded-lg card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full rounded-t-lg"
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
                <h2>Price (per-hour): {item.pricePerHour}$</h2>
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
  );
};

export default FeaturedSection;
