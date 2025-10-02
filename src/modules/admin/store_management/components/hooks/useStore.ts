import { useEffect, useState } from "react";
import { getStores } from "../../services/store_managementServices";

export interface Store {
  id: string;
  name: string;
  address: string;
  createdAt: string;
}

export const useStores = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);
        const data = await getStores();
        setStores(data);
      } catch (err) {
        console.error("Error fetching stores", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  return { stores, loading };
};
