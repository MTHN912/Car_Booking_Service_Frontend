import React from "react";
import StoreDetailModal from "../components/component/storeDetailModal";
import StoreTable from "../components/component/storeList";
import { useStores } from "../components/hooks/useStore";
import { useStoreDetail } from "../components/hooks/useStoreDetail";

const StorePage: React.FC = () => {
  const { stores, loading } = useStores();
  const { selectedStore, openDetail, closeDetail } = useStoreDetail();

  return (
    <div>
      <h2>Quản lý Cửa hàng</h2>
      <StoreTable stores={stores} loading={loading} onViewDetail={openDetail} />
      <StoreDetailModal store={selectedStore} onClose={closeDetail} />
    </div>
  );
};

export default StorePage;
