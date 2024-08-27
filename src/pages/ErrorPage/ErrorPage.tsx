import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="text-center">
        <h2 className="text-xl font-semibold pb-2">404!</h2>
        <h2 className="text-3xl font-bold pb-8">Opps!! No Data Found</h2>
        <Link to="/">
          <button className="btn font-bold btn-sm mt-5">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
