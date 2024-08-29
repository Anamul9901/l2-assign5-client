/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../redux/features/facilitys/facilityApi";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import Swal from "sweetalert2";

const FacilityDetails = () => {
  const { id } = useParams();
  const { data: allFacility } = useGetAllFacilityQuery(undefined);
  const token = useAppSelector(useCurrentToken);
  const navigate = useNavigate();

  let user: any;
  if (token) {
    user = verifyToken(token);
  }

  const handleLongin = () => {
    Swal.fire({
      title: "You are not login!",
      text: "Are you want to Login?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };
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
                  Price Per Hour: {item?.pricePerHour} tk
                </h1>
                <h1>Description: {item?.description}</h1>
                <div className="flex items-end pt-6">
                  {user ? (
                    <Link to={`/booking/${item?._id}`} className="btn btn-sm">
                      Book Now
                    </Link>
                  ) : (
                    <button onClick={handleLongin} className="btn btn-sm">
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FacilityDetails;
