import { BrowserRouter, useRoutes } from "react-router-dom";
import { AuthProvider } from "./modules/auth/context/AuthContext";
import authRoutes from "./modules/auth/routesAuth";
import homeRoutes from "./modules/home/routesHome";
import bookingRoutes from "./modules/booking/routesBooking";
import Layout from "./modules/layout/routesLayout";

function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        ...homeRoutes,
        ...authRoutes,
        ...bookingRoutes,
      ],
    },
  ];

  return useRoutes(routes);
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
