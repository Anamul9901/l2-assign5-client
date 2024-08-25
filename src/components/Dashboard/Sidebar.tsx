import { BsGraphUpArrow } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import { FaHouseMedicalFlag, FaUsersGear } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link, NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  const isModarator = true;
  const isAdmin = false;
  return (
    <div>
      <div className="flex max-w-[1300px] mx-auto w-full">
        {/* dashboard side bar */}
        <div className="w-64 pt-6 min-h-screen bg-[#f76b00] text-white">
          {isModarator && (
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

              {/* admin sidebar*/}
              {/* <li>
                <NavLink
                  to="my-bookings"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#050506] underline font-black"
                      : "lg:text-white text-[#09962f]"
                  }
                >
                  <FaProductHunt />
                  My Bookings
                </NavLink>
              </li> */}

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
          )}
          {isAdmin && (
            <ul className="menu">
              <Link to="/dashboard">
                <div className="flex items-center justify-center mb-2">
                  <img
                    className="w-[15%]  "
                    src={"https://i.ibb.co/LZsK9YV/pngwing-com-15.png"}
                    alt=""
                  />
                  <h2 className="font-bold text-xl">i-SHOP</h2>
                </div>
              </Link>
              <hr className="my-4 mx-2" />
              <li>
                <NavLink to="manage-shop">
                  <MdManageAccounts />
                  Manage Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="sales-sectin">
                  <BsGraphUpArrow />
                  Sales Section
                </NavLink>
              </li>
              <li>
                <NavLink to="manage-user">
                  <FaUsersGear />
                  Users Section
                </NavLink>
              </li>

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
          )}
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
