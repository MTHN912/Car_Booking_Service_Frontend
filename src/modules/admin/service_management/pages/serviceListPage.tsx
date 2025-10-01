import React from "react";
import ServiceTable from "../components/serviceList";
import { useServices } from "../components/useService";

const ServicePage: React.FC = () => {
  const { services, loading } = useServices();

  return (
    <div>
      <h1>Quản lý Dịch vụ</h1>
      <ServiceTable services={services} loading={loading} />
    </div>
  );
};

export default ServicePage;
