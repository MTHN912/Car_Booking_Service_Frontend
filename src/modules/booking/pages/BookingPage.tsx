import { useNavigate, useSearchParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { createBooking, type BookingPayload } from "../services/bookingService";

export default function NewBookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const storeId = searchParams.get("storeId");

  if (!storeId) {
    return <p>Không tìm thấy storeId trong URL</p>;
  }

  const handleCreateBooking = async (payload: BookingPayload) => {
    try {
      const booking = await createBooking(payload);
      navigate(`/bookings/${booking.id}`);
    } catch (err) {
      console.error("Tạo booking thất bại:", err);
      alert("Có lỗi xảy ra khi đặt lịch!");
    }
  };

  return <BookingForm storeId={storeId} onSubmit={handleCreateBooking} />;
}
