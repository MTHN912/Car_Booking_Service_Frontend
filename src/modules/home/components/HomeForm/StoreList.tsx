import styles from "../Css/StoreList.module.css";
import type { Store } from "../../services/homeService";

type StoreListProps = {
  searchMode: "gps" | "address";
  address: string;
  stores: Store[];
  loading: boolean;
  error: string | null;
};

export default function StoreList({ searchMode, address, stores, loading, error }: StoreListProps) {
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
        {stores.map((store, idx) => (
          <li key={idx} className={styles.storeItem}>
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            <p>Cách vị trí đã chọn khoảng {store.distance.toFixed(2)} km</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
