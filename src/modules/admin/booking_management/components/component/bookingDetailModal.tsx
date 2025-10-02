import React from "react";
import styles from "../css/bookingDetailModal.module.css";
import type { Booking } from "../hooks/useBooking";
import { useBookingDetail } from "../hooks/useBookingDetail";

interface Props {
  booking: Booking | null;
  onClose: () => void;
  onUpdated: () => void;
}

const BookingDetailModal: React.FC<Props> = ({ booking, onClose, onUpdated }) => {
  if (!booking) return null;

  const { status, setStatus, loading, handleUpdate } = useBookingDetail(
    booking,
    onUpdated,
    onClose
  );

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>📋 Chi tiết Booking</h2>

        <div className={styles.section}>
          <p><strong>Khách hàng:</strong> {booking.user.name}</p>
          <p><strong>Email:</strong> {booking.user.email}</p>
          <p><strong>Garage:</strong> {booking.store.name}</p>
          <p><strong>Ngày tạo:</strong> {new Date(booking.createdAt).toLocaleString("vi-VN")}</p>
        </div>

        <div className={styles.section}>
          <h3>Dịch vụ</h3>
          <table className={styles.serviceTable}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên dịch vụ</th>
              </tr>
            </thead>
            <tbody>
              {booking.services.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.statusSection}>
          <label><strong>Trạng thái:</strong></label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={styles.select}
          >
            <option value="PENDING">Pending</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>

        <div className={styles.actions}>
          <button onClick={onClose} className={styles.closeBtn}>Đóng</button>
          <button
            onClick={handleUpdate}
            disabled={loading}
            className={styles.updateBtn}
          >
            {loading ? "Đang cập nhật..." : "Cập nhật trạng thái"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailModal;
