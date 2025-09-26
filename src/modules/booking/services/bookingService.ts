import axios from "../../../utils/axios";
import type {BookingPayload, BookingResponse} from "../../../types/booking"

export async function createBooking(payload: BookingPayload): Promise<BookingResponse> {
  const res = await axios.post("/bookings", payload, { 
    withCredentials: true 
  });
  return res.data.data;
}

export async function getServicesByCategory(storeId: string, category: string) {
  const res = await axios.get(`/stores/${storeId}/services/category/${category}`, {
    withCredentials: true,
  });
  return res.data.data;
}