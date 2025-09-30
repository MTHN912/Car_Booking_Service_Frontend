import { useNavigate, useSearchParams } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";
import { createBooking } from "../services/bookingService";
import type { BookingPayload } from "../../../types/booking";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const storeId = searchParams.get("storeId");

  if (!storeId) {
    return <p>Không tìm thấy storeId trong URL</p>;
  }

  const handleCreateBooking = async (payload: BookingPayload) => {
    try {
      const booking = await createBooking(storeId, payload);
      navigate(`/bookings/${booking.id}`);
    } catch (error) {
      console.error("Tạo booking thất bại:", error);
      alert("Có lỗi xảy ra khi đặt lịch. Vui lòng thử lại!");
    }
  };

  return (
    <BookingForm storeId={storeId} onSubmit={handleCreateBooking} />
  );
}
