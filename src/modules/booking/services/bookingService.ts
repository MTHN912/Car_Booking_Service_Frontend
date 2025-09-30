import type { BookingPayload, BookingResponse } from "../../../types/booking";
import axios from "../../../utils/axios";

export async function createBooking( storeId: string, payload: BookingPayload ): Promise<BookingResponse> {
  const res = await axios.post(`/bookings/${storeId}`, payload, {
    withCredentials: true,
  });
  return res.data.data;
}


export async function getServicesByCategory(storeId: string, category: string) {
  const res = await axios.get(`/stores/${storeId}/services/category/${category}`, {
    withCredentials: true,
  });
  return res.data.data;
}