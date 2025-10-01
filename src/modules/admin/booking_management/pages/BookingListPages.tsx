import React from "react";
import { useBookings } from "../components/useBooking";
import BookingTable from "../components/BookingList";

const BookingPage: React.FC = () => {
  const { bookings, loading } = useBookings();

  return (
    <div>
      <h1>Quản lý Booking</h1>
      <BookingTable bookings={bookings} loading={loading} />
    </div>
  );
};

export default BookingPage;
