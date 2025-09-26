import { useNavigate } from "react-router-dom";
import type { StoreListProps } from "../../../../types/home";
import { getStoreById } from "../../services/homeService";
import styles from "../css/StoreList.module.css";


export default function StoreList({ searchMode, address, stores, loading, error }: StoreListProps) {
  const navigate = useNavigate();

  const handleStoreClick = async (storeId: string) => {
    try {
      const storeDetail = await getStoreById(storeId);
      navigate(`/bookings/new?storeId=${storeId}`, { state: { store: storeDetail } });
    } catch (err) {
      console.error("Không thể lấy chi tiết cửa hàng:", err);
    }
};
  return (
    <div>
      <h2 className={styles.subtitle}>
        {searchMode === "gps"
          ? "Cửa hàng gần vị trí hiện tại của bạn"
          : `Cửa hàng gần: ${address}`}
      </h2>

      {loading && <p>Đang tải cửa hàng...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <ul className={styles.storeList}>
        {stores.map((store) => (
          <li
            key={store.id}
            className={styles.storeItem}
            onClick={() => handleStoreClick(store.id)}
            style={{ cursor: "pointer" }}
          >
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            <p>Cách vị trí đã chọn khoảng {store.distance.toFixed(2)} km</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
