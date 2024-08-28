/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaFlagCheckered, FaProductHunt, FaRegBookmark } from "react-icons/fa";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { MdManageAccounts, MdOutlineBookmarkAdd, MdOutlineManageAccounts } from "react-icons/md";
import { BsBookmarkPlus } from "react-icons/bs";

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  let user;
  if (token) {
    user = verifyToken(token);
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="flex max-w-[1300px] mx-auto w-full">
        {/* dashboard side bar */}
        <div className="md:w-64 w-14 pt-6 min-h-screen bg-[#f76b00] text-white">
          <ul className="menu">
            <Link to="/dashboard/home">
              <div className="flex items-center  justify-center mb-2">
                {/* <img
                  className="w-[15%] rounded mb-5"
                  // src={filterUser?.[0]?.shopLogo}
                  alt=""
                /> */}
                <h2 className="text-center font-bold">--</h2>
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
                <span className="hidden md:inline-block">Dashboard</span>
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
                    <FaRegBookmark />
                    <span className="hidden md:inline-block">My Bookings</span>
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
                    <FaFlagCheckered />
                    <span className="hidden md:inline-block">
                      Facility Management
                    </span>
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
                    <BsBookmarkPlus />
                    <span className="hidden md:inline-block">
                      Booking Management
                    </span>
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
                   <MdManageAccounts />
                    <span className="hidden md:inline-block">Add Admin</span>
                  </NavLink>
                </li>
              </div>
            )}

            <hr className="my-4 mx-2" />
            <li>
              <NavLink to="/">
                <FaHouseMedicalFlag />
                <span className="hidden md:inline-block">Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/">
                <div onClick={handleLogout} className="flex items-center gap-2">
                  {" "}
                  <IoIosLogOut />
                  <span className="hidden md:inline-block">Log-Out</span>
                </div>
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
