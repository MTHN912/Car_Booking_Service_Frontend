import React from "react";
import type { Booking } from "./useBooking";
import styles from "./bookinglist.module.css";

interface Props {
  bookings: Booking[];
  loading: boolean;
}

const BookingTable: React.FC<Props> = ({ bookings, loading }) => {
  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Khách hàng</th>
          <th>Email</th>
          <th>Garage</th>
          <th>Dịch vụ</th>
          <th>Trạng thái</th>
          <th>Ngày tạo</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((b) => (
          <tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.user.name}</td>
            <td>{b.user.email}</td>
            <td>{b.store.name}</td>
            <td>
              {b.services.map((s) => (
                <div key={s.id}>{s.name}</div>
              ))}
            </td>
            <td>{b.status}</td>
            <td>{new Date(b.createdAt).toLocaleString("vi-VN")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
