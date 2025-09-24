import type { RouteObject } from "react-router-dom";
import GuestRoute from "./components/GuestRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const authRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <GuestRoute><LoginPage /></GuestRoute>,
  },

  {
    path: "/register",
    element: <GuestRoute><RegisterPage /></GuestRoute>,
  }
];

export default authRoutes;
