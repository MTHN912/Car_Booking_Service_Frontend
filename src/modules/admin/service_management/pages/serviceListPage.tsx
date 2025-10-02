import React from "react";
import ServiceTable from "../components/serviceList";
import styles from "../components/servicePage.module.css";
import { useServices } from "../components/useService";

const ServicePage: React.FC = () => {
  const { services, loading, activeTab, setActiveTab } = useServices();

  return (
    <div>
      <h2>Quản lý dịch vụ</h2>

      <div className={styles.tabs}>
        {(["ALL", "BASIC", "STANDARD", "PREMIUM"] as const).map((tab) => (
          <button
            key={tab}
            className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "ALL" ? "Tất cả" : tab}
          </button>
        ))}
      </div>

      <ServiceTable services={services} loading={loading} />
    </div>
  );
};

export default ServicePage;
