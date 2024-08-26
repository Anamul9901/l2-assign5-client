/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../redux/features/facilitys/facilityApi";

const Facility = () => {
  const { data: allFacility } = useGetAllFacilityQuery(undefined);
  const avilableFacility = allFacility?.data?.filter(
    (item: any) => !item?.isDeleted
  );
  console.log(avilableFacility);
  return (
    <div className="min-h-[100vh] max-w-7xl mx-auto w-full py-12 px-2">
        <div>
            <h1 className="text-center text-2xl font-bold pb-4">All Facility</h1>
        </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2 justify-center items-center">
        {avilableFacility?.map((item: any) => (
          <div key={item?._id}>
            <div className=" card rounded-none card-compact w-[200px] bg-base-100 shadow-xl">
              <figure>
                <img className="w-[200px]"
                  src={item?.image || 'https://i.ibb.co/kBNtTmC/No-Image-Available.jpg'}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <h2 className="">Price (per-hour): {item.pricePerHour}$</h2>
                <div className="card-actions justify-end">
                  <Link to={`/facility/${item?._id}`} className="btn btn-sm">View Details</Link>
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
