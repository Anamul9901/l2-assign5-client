/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaProductHunt } from "react-icons/fa";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token);
  }

  return (
    <div>
      <div className="flex max-w-[1300px] mx-auto w-full">
        {/* dashboard side bar */}
        <div className="w-64 pt-6 min-h-screen bg-[#f76b00] text-white">
          <ul className="menu">
            <Link to="/dashboard/home">
              <div className="flex items-center gap-2 justify-center mb-2">
                <img
                  className="w-[15%] rounded mb-5"
                  // src={filterUser?.[0]?.shopLogo}
                  alt=""
                />
                <h2 className="text-center font-bold">Name</h2>
              </div>
            </Link>
            <hr className="my-4 mx-2" />

            <li>
              <NavLink
                to="/dashboard/home"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#050506] underline font-black"
                    : "lg:text-white "
                }
              >
                <RxDashboard />
                Dashboard
              </NavLink>
            </li>

            {/* //  user sidebar */}
            {(user as any)?.role == "user" && (
              <div>
                <li>
                  <NavLink
                    to="my-bookings"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#050506] underline font-black"
                        : "lg:text-white "
                    }
                  >
                    <FaProductHunt />
                    My Bookings
                  </NavLink>
                </li>
              </div>
            )}

            {/* admin sidebar*/}
            {(user as any)?.role == "admin" && (
              <div>
                <li>
                  <NavLink
                    to="facility-management"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#050506] underline font-black"
                        : "lg:text-white"
                    }
                  >
                    <FaProductHunt />
                    Facility Management
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="booking-management"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#050506] underline font-black"
                        : "lg:text-white"
                    }
                  >
                    <FaProductHunt />
                    Booking Management
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="add-admin"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#050506] underline font-black"
                        : "lg:text-white"
                    }
                  >
                    <FaProductHunt />
                    Add Admin
                  </NavLink>
                </li>
              </div>
            )}

            <hr className="my-4 mx-2" />
            <li>
              <NavLink to="/">
                <FaHouseMedicalFlag />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/adminHome">
                <IoIosLogOut />
                Log-Out
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
