import { useState } from "react";
import type { BookingPayload } from "../services/bookingService";
import styles from "./css/Booking.module.css";

type BookingFormProps = {
  storeId: string;
  onSubmit: (payload: BookingPayload) => Promise<void>;
};

export default function BookingForm({ storeId, onSubmit }: BookingFormProps) {
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
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleServiceChange = (service: string) => {
    setForm((prev) => {
      const exists = prev.service.includes(service);
      return {
        ...prev,
        service: exists
          ? prev.service.filter((s) => s !== service)
          : [...prev.service, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) {
      setError("Bạn phải đồng ý với chính sách bảo mật.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await onSubmit({
        storeId,
        date: form.date,
        time: form.time,
        note: form.note,
      });
    } catch (err: any) {
      setError(err.message || "Đặt lịch thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>ĐẶT LỊCH DỊCH VỤ</h2>

      {/* 1. Thông tin khách hàng */}
      <fieldset>
        <legend>1. Thông tin khách hàng</legend>
        <label>Họ tên *</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          maxLength={80}
        />

        <label>Số điện thoại *</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          minLength={10}
        />

        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </fieldset>

      {/* 2. Thông tin xe */}
      <fieldset>
        <legend>2. Thông tin xe</legend>
        <label>Mẫu xe *</label>
        <select
          name="carModel"
          value={form.carModel}
          onChange={handleChange}
          required
        >
          <option value="">Lựa chọn</option>
          <option value="vf5">VF 5</option>
          <option value="vf8">VF 8</option>
          <option value="vf9">VF 9</option>
        </select>

        <label>Số Km</label>
        <input name="km" value={form.km} onChange={handleChange} />

        <label>Biển số xe *</label>
        <input
          name="licensePlate"
          value={form.licensePlate}
          onChange={handleChange}
          required
        />
      </fieldset>

      {/* 3. Dịch vụ */}
      <fieldset>
        <legend>3. Dịch vụ</legend>
        <div>
          <label>
            <input
              type="checkbox"
              checked={form.service.includes("bao-duong-nho")}
              onChange={() => handleServiceChange("bao-duong-nho")}
            />
            Bảo dưỡng định kỳ cấp nhỏ
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={form.service.includes("bao-duong-trung-binh")}
              onChange={() => handleServiceChange("bao-duong-trung-binh")}
            />
            Bảo dưỡng định kỳ cấp trung bình
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={form.service.includes("bao-duong-lon")}
              onChange={() => handleServiceChange("bao-duong-lon")}
            />
            Bảo dưỡng định kỳ cấp lớn
          </label>
        </div>
      </fieldset>

      {/* 4. Địa điểm & Thời gian */}
      <fieldset>
        <legend>4. Địa điểm và Thời gian</legend>
        <label>Tỉnh thành *</label>
        <select
          name="province"
          value={form.province}
          onChange={handleChange}
          required
        >
          <option value="">Chọn tỉnh</option>
          <option value="hanoi">Hà Nội</option>
          <option value="hcm">TP Hồ Chí Minh</option>
        </select>

        <label>Quận/Huyện *</label>
        <select
          name="district"
          value={form.district}
          onChange={handleChange}
          required
        >
          <option value="">Chọn quận/huyện</option>
        </select>

        <div>
          <label>
            <input
              type="radio"
              name="locationType"
              value="workshop"
              checked={form.locationType === "workshop"}
              onChange={handleChange}
            />
            Xưởng dịch vụ
          </label>
          <label>
            <input
              type="radio"
              name="locationType"
              value="mobile"
              checked={form.locationType === "mobile"}
              onChange={handleChange}
            />
            Dịch vụ sửa chữa lưu động
          </label>
        </div>

        <label>Thời gian *</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />
      </fieldset>

      {/* Note */}
      <label>Ghi chú</label>
      <textarea name="note" value={form.note} onChange={handleChange} />

      {/* Checkbox chính sách */}
      <div>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          Tôi đồng ý với chính sách bảo vệ dữ liệu cá nhân
        </label>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Đang gửi..." : "Gửi yêu cầu"}
      </button>
    </form>
  );
}
