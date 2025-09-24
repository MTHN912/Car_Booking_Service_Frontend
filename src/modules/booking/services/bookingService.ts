import axios from "../../../utils/axios";

export type BookingPayload = {
  storeId: string;
  date: string;
  time: string;
  note?: string;
};

export type BookingResponse = {
  id: string;
  storeId: string;
  date: string;
  time: string;
  note?: string;
  status: string;
};

export async function createBooking(payload: BookingPayload): Promise<BookingResponse> {
  const res = await axios.post("/bookings", payload, { withCredentials: true });
  return res.data.data;
}
