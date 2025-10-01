import React from "react";
import StoreTable from "../components/storeList";
import { useStores } from "../components/hooks/useStore";
import { useStoreDetail } from "../components/hooks/useStoreDetail";
import StoreDetailModal from "../components/storeDetailModal";

const StorePage: React.FC = () => {
  const { stores, loading } = useStores();
  const { selectedStore, openDetail, closeDetail } = useStoreDetail();

  return (
    <div>
      <h1>Quản lý Cửa hàng</h1>
      <StoreTable stores={stores} loading={loading} onViewDetail={openDetail} />
      <StoreDetailModal store={selectedStore} onClose={closeDetail} />
    </div>
  );
};

export default StorePage;
