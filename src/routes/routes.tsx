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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookingPage from "../pages/Booking/BookingPage";
import ProtctedRoute from "../Layout/ProtctedRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
      {
        path: "/booking/:id",
        element: <BookingPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
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
        element: (
          <ProtctedRoute role="user">
            <MyBookings />
          </ProtctedRoute>
        ),
      },
      {
        path: "facility-management",
        element: (
          <ProtctedRoute role="admin">
            <FacilityManagement />
          </ProtctedRoute>
        ),
      },
      {
        path: "single-facility/:id",
        element: (
          <ProtctedRoute role="admin">
            <SingleFacility />
          </ProtctedRoute>
        ),
      },
      {
        path: "booking-management",
        element: (
          <ProtctedRoute role="admin">
            <BookingManagement />
          </ProtctedRoute>
        ),
      },
      {
        path: "add-admin",
        element: (
          <ProtctedRoute role="admin">
            <AddAdmin />
          </ProtctedRoute>
        ),
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
