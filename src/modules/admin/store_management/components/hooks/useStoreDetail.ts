import { useState } from "react";
import type { Store } from "../hooks/useStore";

export const useStoreDetail = () => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const openDetail = (store: Store) => setSelectedStore(store);
  const closeDetail = () => setSelectedStore(null);

  return { selectedStore, openDetail, closeDetail };
};
