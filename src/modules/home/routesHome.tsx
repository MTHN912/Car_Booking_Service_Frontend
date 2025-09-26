import type { RouteObject } from "react-router-dom";
import HomePage from "./page/HomePage";

const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];

export default homeRoutes;
