import { useEffect, useState } from "react";
import { getServicesByCategory } from "../../../services/bookingService";
import type { Service } from "../../../../../types/booking";

export function useServices(storeId: string, category: string) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!storeId || !category) return;

    const fetchServices = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getServicesByCategory(storeId, category);
        setServices(data);
      } catch (err: any) {
        setError(err.message || "Không thể tải danh sách dịch vụ");
      } finally {
        setLoading(false);
      }
    };

    fetchServices(); 
  }, [storeId, category]);

  return { services, loading, error };
}
