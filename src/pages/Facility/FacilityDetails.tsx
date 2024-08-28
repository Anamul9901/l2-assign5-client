/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../redux/features/facilitys/facilityApi";

const FacilityDetails = () => {
  const { id } = useParams();
  const { data: allFacility } = useGetAllFacilityQuery(undefined);
  return (
    <div className="min-h-[100vh] max-w-7xl mx-auto w-full py-10 px-2">
      <div className="md:pt-20">
        {allFacility?.data
          ?.filter((item: any) => item?._id == id)
          .map((item: any) => (
            <div
              key={item?._id}
              className="card lg:card-side bg-base-100 shadow-md rounded-none"
            >
              <figure>
                <img
                  className="md:w-[500px]"
                  src={
                    item?.image ||
                    "https://i.ibb.co/kBNtTmC/No-Image-Available.jpg"
                  }
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-3xl font-semibold">{item?.name}</h2>
                <h2 className="">Location: {item?.location}</h2>
                <h1 className="text-lg">
                  Price Per Hour: {item?.pricePerHour}$
                </h1>
                <h1>Description: {item?.description}</h1>
                <div className="flex items-end pt-6">
                  <Link to={`/booking/${item?._id}`} className="btn btn-sm">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FacilityDetails;
