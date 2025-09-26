import { useBookingForm } from "./hooks/useBookingForm";
import InputField from "./fields/InputField";
import SelectField from "./fields/SelectField";
import CheckboxField from "./fields/CheckboxField";
import RadioGroupField from "./fields/RadioGroupField";
import FormField from "./fields/FormField";
import styles from "./css/Booking.module.css";
import type { BookingFormProps } from "../../../../types/booking";

export default function BookingForm({ storeId, onSubmit }: BookingFormProps) {
  const {
    form,
    category,
    services,
    serviceLoading,
    serviceError,
    loading,
    error,
    handleChange,
    handleServiceChange,
    handleCategoryChange,
    handleSubmit,
  } = useBookingForm(storeId, onSubmit);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>ĐẶT LỊCH DỊCH VỤ</h2>

      {/* 1. Info cusumer */}
      <fieldset>
        <legend>1. Thông tin khách hàng</legend>
        <InputField label="Họ tên *" name="name" value={form.name} onChange={handleChange} required />
        <InputField label="Số điện thoại *" name="phone" value={form.phone} onChange={handleChange} required />
        <InputField label="Email *" type="email" name="email" value={form.email} onChange={handleChange} required />
      </fieldset>

      {/* 2. car info */}
      <fieldset>
        <legend>2. Thông tin xe</legend>
        <SelectField
          label="Mẫu xe *"
          name="carModel"
          value={form.carModel}
          onChange={handleChange}
          options={[
            { value: "vf5", label: "VF 5" },
            { value: "vf8", label: "VF 8" },
            { value: "vf9", label: "VF 9" },
          ]}
        />
        <InputField label="Số Km" name="km" value={form.km} onChange={handleChange} />
        <InputField label="Biển số xe *" name="licensePlate" value={form.licensePlate} onChange={handleChange} required />
      </fieldset>

      {/* 3. service */}
      <fieldset>
        <legend>3. Dịch vụ</legend>
        <SelectField
          label="Chọn loại bảo dưỡng *"
          value={category}
          onChange={handleCategoryChange}
          options={[
            { value: "BASIC", label: "Bảo dưỡng định kỳ cấp nhỏ" },
            { value: "STANDARD", label: "Bảo dưỡng định kỳ cấp trung bình" },
            { value: "PREMIUM", label: "Bảo dưỡng định kỳ cấp lớn" },
          ]}
        />

        {serviceLoading && <p>Đang tải dịch vụ...</p>}
        {serviceError && <p className={styles.error}>{serviceError}</p>}

        {services.length > 0 && (
          <div className={styles.serviceList}>
            {services.map((s) => (
              <div key={s.serviceId}>
                <CheckboxField
                  label={`${s.service.name} (${s.price} VND, ${s.duration} phút)`}
                  checked={form.service.includes(s.serviceId)}
                  onChange={() => handleServiceChange(s.serviceId)}
                />
                <p className={styles.serviceDescription}>{s.service.description}</p>
              </div>
            ))}
          </div>
        )}
      </fieldset>

      {/* 4. address and time*/}
      <fieldset>
        <legend>4. Địa điểm và Thời gian</legend>
        <SelectField
          label="Tỉnh thành *"
          name="province"
          value={form.province}
          onChange={handleChange}
          options={[
            { value: "hanoi", label: "Hà Nội" },
            { value: "hcm", label: "TP Hồ Chí Minh" },
            { value: "cantho", label: "Cần Thơ" },
          ]}
        />
        <SelectField
          label="Quận/Huyện *"
          name="district"
          value={form.district}
          onChange={handleChange}
          options={[
            { value: "ninhkieu", label: "Ninh Kiều" },
            { value: "tanan", label: "Tân An" },
          ]}
        />
        <RadioGroupField
          name="locationType"
          value={form.locationType}
          onChange={handleChange}
          options={[
            { value: "workshop", label: "Xưởng dịch vụ" },
            { value: "mobile", label: "Dịch vụ sửa chữa lưu động" },
          ]}
        />
        <InputField type="date" label="Ngày hẹn *" name="date" value={form.date} onChange={handleChange} required />
        <InputField type="time" label="Giờ hẹn *" name="time" value={form.time} onChange={handleChange} required />
      </fieldset>

      {/* Note */}
      <FormField label="Ghi chú">
        <textarea name="note" value={form.note} onChange={handleChange} />
      </FormField>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Đang gửi..." : "Gửi yêu cầu"}
      </button>
    </form>
  );
}
