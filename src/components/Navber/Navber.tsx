/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import { verifyToken } from "../../utils/verifyToken";

const Navber = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token);
  }

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you want to Sign Out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sign Out!",
          text: "Your are not login.",
          icon: "success",
        });
        dispatch(logout());
        navigate('/')
      }
    });
  };
  const navitem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#e8ab05] hover:text-blue-600 underline font-bold md:text-lg "
              : "lg:text-white hover:text-gray-400 text-[#e8ab05] font-bold md:text-lg"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/facility"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#e8ab05] hover:text-blue-600 underline font-bold md:text-lg "
              : "lg:text-white hover:text-gray-400 text-[#e8ab05] font-bold md:text-lg"
          }
        >
          Facility
        </NavLink>
      </li>

      {user && (
        <li className="relative group">
          <NavLink
            to="/dashboard/home"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#e8ab05] hover:text-blue-600 underline font-bold md:text-lg"
                : "lg:text-white hover:text-gray-400 text-[#e8ab05] font-bold md:text-lg"
            }
          >
            Dashboard
          </NavLink>
          {/* Dropdown menu */}
          <ul className="absolute z-10 hidden w-36 group-hover:block bg-white text-black shadow-lg md:rounded-lg rounded-xl  md:mt-8 mt-6">
            <li>
              <Link
                to="/dashboard/home"
                className="text-sm rounded-none hover:text-[#e8ab05] font-semibold"
              >
                Home
              </Link>
            </li>
            {(user as any)?.role == "user" && (
              <li>
                <Link
                  to="/dashboard/my-bookings"
                  className="text-sm w-full rounded-none hover:text-[#e8ab05] font-semibold"
                >
                  My Bookings
                </Link>
              </li>
            )}
            {(user as any)?.role == "admin" && (
              <div>
                <li>
                  <Link
                    to="/dashboard/facility-management"
                    className="text-sm w-full rounded-none hover:text-[#e8ab05] font-semibold"
                  >
                    Facility Mana
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/booking-management"
                    className="text-sm w-full rounded-none hover:text-[#e8ab05] font-semibold"
                  >
                    Booking Mana
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add-admin"
                    className="text-sm w-full rounded-none hover:text-[#e8ab05] font-semibold"
                  >
                    Add Admin
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </li>
      )}
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#e8ab05] hover:text-blue-600 underline font-bold md:text-lg "
              : "lg:text-white hover:text-gray-400 text-[#e8ab05] font-bold md:text-lg"
          }
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#e8ab05] hover:text-blue-600 underline font-bold md:text-lg "
              : "lg:text-white hover:text-gray-400 text-[#e8ab05] font-bold md:text-lg"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="navbar   ">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navitem}
              </ul>
            </div>
            <Link to="/">
              <div className="flex items-center gap-1">
                <img
                  className="md:w-10%] w-[50%]"
                  src={
                    "https://i.ibb.co/LxLzCSH/Picsart-24-08-29-12-34-16-998.png"
                  }
                  alt=""
                />
                {/* <h2 className="font-bold md:text-xl">Sport Zone</h2> */}
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navitem}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center">
                <div className="flex flex-row-reverse items-center">
                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <h1>{(user as any)?.name}</h1>
                    </label>
                  </div>
                  <div className="">
                    <span className="text-xs md:text-lg font-bold">
                      {/* <h1>{user ? user?.name : "No Name"}</h1> */}
                    </span>
                  </div>
                </div>
                <button onClick={handleLogout} className=" ">
                  <h1 className="text-2xl hover:text-3xl">
                    <FiLogOut />
                  </h1>
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm bg-white hover:text-[#080403] text-black font-bold">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
