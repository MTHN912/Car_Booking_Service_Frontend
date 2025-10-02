import React, { useState } from "react";
import BookingTable from "../components/component/BookingList";
import BookingDetailModal from "../components/component/bookingDetailModal";
import { useBookings } from "../components/hooks/useBooking";

const BookingPage: React.FC = () => {
  const { bookings, loading, refetch } = useBookings();
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);

  return (
    <div>
      <h2>Quản lý Booking</h2>
      <BookingTable
        bookings={bookings}
        loading={loading}
        onViewDetail={(b) => setSelectedBooking(b)}
      />
      {selectedBooking && (
        <BookingDetailModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onUpdated={refetch}
        />
      )}
    </div>
  );
};


export default BookingPage;
