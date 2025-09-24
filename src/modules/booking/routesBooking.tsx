import type { RouteObject } from "react-router-dom";
import NewBookingPage from "./pages/BookingPage";

const bookingRoutes: RouteObject[] = [
    {
    path: "/bookings",
    // element: <BookingPage />,
    },

    {
    path: "/bookings/new",
    element: <NewBookingPage />,
    },
];

export default bookingRoutes;
