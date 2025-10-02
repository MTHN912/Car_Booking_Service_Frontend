import React from "react";
import { FiEye } from "react-icons/fi";
import type { Store } from "../hooks/useStore";
import styles from "../css/storeList.module.css";
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
          <th>STT</th>
          <th>Tên cửa hàng</th>
          <th>Địa chỉ</th>
          <th>Ngày tạo</th>
          <th>Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        {stores.map((s, index) => (
          <tr key={s.id}>
            <td>{index + 1}</td>
            <td>{s.name}</td>
            <td>{s.address}</td>
            <td>{new Date(s.createdAt).toLocaleString("vi-VN")}</td>
            <td>
              <button onClick={() => onViewDetail(s)} className={styles.detailBtn}>
              <FiEye size={16} />
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
