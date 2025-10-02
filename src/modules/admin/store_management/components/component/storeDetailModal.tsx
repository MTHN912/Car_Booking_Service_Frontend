import React from "react";
import type { Store } from "../hooks/useStore";
import { useStoreServices } from "../hooks/useStoreService";
import styles from "../css/storeDetailModal.module.css";

interface Props {
  store: Store | null;
  onClose: () => void;
}

const StoreDetailModal: React.FC<Props> = ({ store, onClose }) => {
  const { services, loading } = useStoreServices(store?.id || null);

  if (!store) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Chi tiết cửa hàng</h2>
        <p><strong>Tên:</strong> {store.name}</p>
        <p><strong>Địa chỉ:</strong> {store.address}</p>
        <p><strong>Ngày tạo:</strong> {new Date(store.createdAt).toLocaleString("vi-VN")}</p>

        <h3>Dịch vụ tại cửa hàng</h3>
        {loading ? (
          <p>Đang tải dịch vụ...</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tên dịch vụ</th>
                <th>Mô tả</th>
                <th>Giá</th>
                <th>Thời gian (phút)</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {services.map((svc) => (
                <tr key={svc.serviceId}>
                  <td>{svc.service.name}</td>
                  <td>{svc.service.description}</td>
                  <td>{svc.price.toLocaleString("vi-VN")} đ</td>
                  <td>{svc.duration}</td>
                  <td>{svc.isActive ? "Hoạt động" : "Ngưng"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button onClick={onClose} className={styles.closeBtn}>Đóng</button>
      </div>
    </div>
  );
};

export default StoreDetailModal;
