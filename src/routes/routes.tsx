import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Auth/Login";
import Register from "./Register";
import Dashboard from "../Layout/Dashboard";
import DashHome from "../pages/Dashboard/DashHome";
import MyBookings from "../pages/Dashboard/MyBookings/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
