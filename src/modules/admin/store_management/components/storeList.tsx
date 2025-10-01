import React from "react";
import type { Store } from "./hooks/useStore";
import styles from "./storeList.module.css";

interface Props {
  stores: Store[];
  loading: boolean;
  onViewDetail: (store: Store) => void;
}

const StoreTable: React.FC<Props> = ({ stores, loading, onViewDetail }) => {
  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Tên cửa hàng</th>
          <th>Địa chỉ</th>
          <th>Ngày tạo</th>
          <th>Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        {stores.map((s) => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.address}</td>
            <td>{new Date(s.createdAt).toLocaleString("vi-VN")}</td>
            <td>
              <button onClick={() => onViewDetail(s)} className={styles.detailBtn}>
                Xem chi tiết
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StoreTable;
