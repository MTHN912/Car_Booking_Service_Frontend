import React from "react";
import type { Service } from "./useService";
import styles from "./serviceList.module.css";

interface Props {
  services: Service[];
  loading: boolean;
}

const ServiceTable: React.FC<Props> = ({ services, loading }) => {
  if (loading) return <p>Đang tải dữ liệu...</p>;

  const renderCategory = (category: string) => {
    let className = "";
    switch (category) {
      case "BASIC":
        className = styles.basic;
        break;
      case "STANDARD":
        className = styles.standard;
        break;
      case "PREMIUM":
        className = styles.premium;
        break;
      default:
        className = styles.default;
    }
    return <span className={`${styles.badge} ${className}`}>{category}</span>;
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên dịch vụ</th>
          <th>Mô tả</th>
          <th>Loại</th>
          <th>Ngày tạo</th>
        </tr>
      </thead>
      <tbody>
        {services.map((s, index) => (
          <tr key={s.id}>
            <td>{index + 1}</td>
            <td>{s.name}</td>
            <td>{s.description}</td>
            <td>{renderCategory(s.category)}</td>
            <td>{new Date(s.createdAt).toLocaleString("vi-VN")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;
