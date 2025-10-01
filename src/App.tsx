import { BrowserRouter, useRoutes } from "react-router-dom";
import adminRoutes from "./modules/admin/adminRoutes";
import { AuthProvider } from "./modules/auth/context/AuthContext";
import authRoutes from "./modules/auth/routesAuth";
import bookingRoutes from "./modules/booking/routesBooking";
import homeRoutes from "./modules/home/routesHome";
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
        ...adminRoutes
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
