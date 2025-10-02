import React from "react";
import { FiEye } from "react-icons/fi";
import styles from "../css/bookinglist.module.css";
import type { Booking } from "../hooks/useBooking";

interface Props {
  bookings: Booking[];
  loading: boolean;
  onViewDetail: (booking: Booking) => void;
}

const statusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "pending":
      return styles.statusPending;
    case "confirmed":
      return styles.statusConfirmed;
    case "completed":
      return styles.statusCompleted;
    case "cancelled":
      return styles.statusCancelled;
    default:
      return "";
  }
};

const BookingTable: React.FC<Props> = ({ bookings, loading, onViewDetail }) => {
  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>STT</th>
          <th>Khách hàng</th>
          <th>Email</th>
          <th>Garage</th>
          <th>Dịch vụ</th>
          <th>Trạng thái</th>
          <th>Ngày tạo</th>
          <th>Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((b, index) => (
          <tr key={b.id}>
            <td>{index + 1}</td>
            <td>{b.user.name}</td>
            <td>{b.user.email}</td>
            <td>{b.store.name}</td>
            <td>
              {b.services.map((s) => (
                <div key={s.id}>{s.name}</div>
              ))}
            </td>
            <td>
              <span className={`${styles.status} ${statusClass(b.status)}`}>
                {b.status}
              </span>
            </td>
            <td>{new Date(b.createdAt).toLocaleString("vi-VN")}</td>
            <td>
              <button
                onClick={() => onViewDetail(b)}
                className={styles.detailBtn}
              >
                <FiEye size={16} /> Xem chi tiết
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
