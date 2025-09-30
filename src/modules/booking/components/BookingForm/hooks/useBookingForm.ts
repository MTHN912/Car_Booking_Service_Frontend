import { useState } from "react";
import type { BookingPayload } from "../../../../../types/booking";
import { useServices } from "./useService";

export const useBookingForm = (storeId: string, onSubmit: (payload: BookingPayload) => Promise<void>) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    carModel: "",
    km: "",
    licensePlate: "",
    service: [] as string[],
    province: "",
    district: "",
    locationType: "workshop",
    date: "",
    time: "",
    note: "",
  });

  const [category, setCategory] = useState<string>("");
  const { services, loading: serviceLoading, error: serviceError } = useServices(storeId, category);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setForm((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const handleServiceChange = (serviceId: string) => {
    setForm((prev) => {
      const exists = prev.service.includes(serviceId);
      return {
        ...prev,
        service: exists ? prev.service.filter((s) => s !== serviceId) : [...prev.service, serviceId],
      };
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setCategory(selected);
    setForm((prev) => ({ ...prev, service: [] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      await onSubmit({
        name: form.name,
        phone: form.phone,
        email: form.email,
        carModel: form.carModel,
        km: form.km,
        licensePlate: form.licensePlate,
        province: form.province,
        district: form.district,
        locationType: form.locationType,
        date: form.date,
        time: form.time,
        services: form.service,
      });
    } catch (err: any) {
      setError(err.message || " Đặt lịch thất bại, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    setForm,
    category,
    setCategory,
    services,
    serviceLoading,
    serviceError,
    loading,
    error,
    handleChange,
    handleServiceChange,
    handleCategoryChange,
    handleSubmit,
  };
};
