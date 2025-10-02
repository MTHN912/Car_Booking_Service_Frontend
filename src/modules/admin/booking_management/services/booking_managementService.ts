import axios from "../../../../utils/axios";

export const getBookings = async () => {
  const res = await axios.get("/bookings", { withCredentials: true });
  return res.data.data;
};

export const updateBookingStatus = async (id: string, status: string) => {
  const res = await axios.patch(`/bookings/${id}/status`, { status }, { withCredentials: true });
  return res.data;
};