/* eslint-disable @typescript-eslint/no-explicit-any */
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

const DashHome = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="h-[60vh] items-center flex justify-center">
     <div>
     <h1 className="text-2xl font-semibold text-center">
        Welcome back{" "}
        <span className="text-green-500">Mr. {(user as any)?.name}</span>
      </h1>
      <div className="flex justify-center pt-10">
      <div className="bg-slate-300 py-5 px-8 rounded-md">
        <h1 className="font-semibold">Role: {(user as any)?.role}</h1>
        <h1 className="font-semibold">Email: {(user as any)?.email}</h1>
        <h1 className="font-semibold">Phone: {(user as any)?.phone}</h1>
      </div>
      </div>
     </div>
    </div>
  );
};

export default DashHome;
