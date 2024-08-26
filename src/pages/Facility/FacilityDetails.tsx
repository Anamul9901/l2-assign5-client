import { useParams } from "react-router-dom";

const FacilityDetails = () => {
    const {id}  = useParams();
    console.log(id);
  return (
    <div className="min-h-[100vh] max-w-7xl mx-auto w-full pt-10">
      facility etails
    </div>
  );
};

export default FacilityDetails;
