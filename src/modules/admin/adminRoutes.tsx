import AdminLayout from "./admin_layout/AdminLayout";
import BookingPage from "./booking_management/pages/BookingListPages";
import DashboardPage from "./dashboard/pages/dashboardPage";
import ServicePage from "./service_management/pages/serviceListPage";
import StorePage from "./store_management/pages/storeListPage";
import UserManagementPage from "./user_management/pages/user_managementPage";

const adminRoutes = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "users",
        element: <UserManagementPage />
      },
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "bookings",
        element: <BookingPage />
      },
      {
        path: "stores",
        element: <StorePage />
      },
      {
        path: "services",
        element: <ServicePage />
      }
    ],
  },
];

export default adminRoutes;
