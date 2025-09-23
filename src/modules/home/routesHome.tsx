import type { RouteObject } from "react-router-dom";
import Layout from "../layout/components/Layout";
import HomePage from "./page/HomePage";

const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export default homeRoutes;
