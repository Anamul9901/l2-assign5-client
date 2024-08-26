import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Auth/Login";
import Register from "./Register";
import Dashboard from "../Layout/Dashboard";
import DashHome from "../pages/Dashboard/DashHome";
import MyBookings from "../pages/Dashboard/MyBookings/MyBookings";
import FacilityManagement from "../pages/Dashboard/FacilityManagement/FacilityManagement";
import SingleFacility from "../pages/Dashboard/FacilityManagement/SingleFacility";
import BookingManagement from "../pages/Dashboard/BookingManagement/BookingManagement";
import AddAdmin from "../pages/Dashboard/AddAdmin/AddAdmin";
import Facility from "../pages/Facility/Facility";
import FacilityDetails from "../pages/Facility/FacilityDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/facility",
        element: <Facility />,
      },
      {
        path: "/facility/:id",
        element: <FacilityDetails />,
      },
    ],
  },

  //Dashboard
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/home",
        element: <DashHome />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "facility-management",
        element: <FacilityManagement />,
      },
      {
        path: "single-facility/:id",
        element: <SingleFacility />,
      },
      {
        path: "booking-management",
        element: <BookingManagement />,
      },
      {
        path: "add-admin",
        element: <AddAdmin />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
