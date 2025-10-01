import axios from "../../../../utils/axios";

export const getBookings = async () => {
  const res = await axios.get("/bookings", { withCredentials: true });
  return res.data.data;
};
