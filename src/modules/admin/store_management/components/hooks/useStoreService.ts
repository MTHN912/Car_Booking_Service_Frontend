import { useEffect, useState } from "react";
import { getStoreServices } from "../../services/store_managementServices";

export interface StoreService {
  serviceId: string;
  price: number;
  duration: number;
  isActive: boolean;
  service: {
    id: string;
    name: string;
    description: string;
  };
}

export const useStoreServices = (storeId: string | null) => {
  const [services, setServices] = useState<StoreService[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!storeId) return;
    setLoading(true);
    getStoreServices(storeId)
      .then((data) => {
        setServices(data || []);
      })
      .finally(() => setLoading(false));
  }, [storeId]);

  return { services, loading };
};
