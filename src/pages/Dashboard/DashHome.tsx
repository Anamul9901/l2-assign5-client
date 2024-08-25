/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetUserQuery } from "../../redux/features/auth/authApi";
import { selectCurrentUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

const DashHome = () => {
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(useCurrentToken);
  console.log(token);
  const userInfo = { email: (user as any)?.email, token };
  console.log(userInfo);
  const { data: userData } = useGetUserQuery(userInfo);
  console.log("userem", userData);

  return <div>Welcome</div>;
};

export default DashHome;
