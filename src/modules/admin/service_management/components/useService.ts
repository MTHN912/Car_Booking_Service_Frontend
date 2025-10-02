import { useEffect, useState } from "react";
import { getServices, getServicesByCategory } from "../services/service_managementServices";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export type TabType = "ALL" | "BASIC" | "STANDARD" | "PREMIUM";

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("ALL");

  const fetchServices = async (tab: TabType) => {
    try {
      setLoading(true);
      let data: Service[] = [];
      if (tab === "ALL") {
        data = await getServices();
      } else {
        data = await getServicesByCategory(tab);
      }
      setServices(data);
    } catch (err) {
      console.error("Error fetching services", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices(activeTab);
  }, [activeTab]);

  return { services, loading, activeTab, setActiveTab };
};
