import { useState } from "react";
import { updateBookingStatus } from "../../services/booking_managementService";
import type { Booking } from "./useBooking";

export const useBookingDetail = (
  booking: Booking | null,
  onUpdated: () => void,
  onClose: () => void
) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(booking?.status || "");

  const handleUpdate = async () => {
    if (!booking) return;
    try {
      setLoading(true);
      await updateBookingStatus(booking.id, status);
      onUpdated();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Cập nhật trạng thái thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return {
    status,
    setStatus,
    loading,
    handleUpdate,
  };
};
