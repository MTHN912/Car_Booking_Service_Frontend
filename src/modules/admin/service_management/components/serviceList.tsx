import React from "react";
import type { Service } from "./useService";
import styles from "./serviceList.module.css";

interface Props {
  services: Service[];
  loading: boolean;
}

const ServiceTable: React.FC<Props> = ({ services, loading }) => {
  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên dịch vụ</th>
          <th>Mô tả</th>
          <th>Loại</th>
          <th>Ngày tạo</th>
        </tr>
      </thead>
      <tbody>
        {services.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.description}</td>
            <td>{s.category}</td>
            <td>{new Date(s.createdAt).toLocaleString("vi-VN")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;
