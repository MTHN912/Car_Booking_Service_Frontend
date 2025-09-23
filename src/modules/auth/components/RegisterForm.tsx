import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormData, RegisterFormProps } from "../../../types/auth";
import { InputField } from "./InputField";
import styles from "./RegisterForm.module.css";

export default function RegisterForm({ onSubmit, errors, loading }: RegisterFormProps) {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = useCallback(
    (key: keyof FormData, value: string | boolean) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Họ và tên */}
        <InputField
          type="text"
          placeholder="Họ và tên"
          value={form.fullname}
          onChange={(v) => handleChange("fullname", v)}
          errors={errors.fullname}
        />

        {/* Email */}
        <InputField
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(v) => handleChange("email", v)}
          errors={errors.email}
        />

        {/* Mật khẩu */}
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder="Mật khẩu"
          value={form.password}
          onChange={(v) => handleChange("password", v)}
          errors={errors.password}
          withToggle
          onToggle={() => setShowPassword((s) => !s)}
        />

        {/* Nhập lại mật khẩu */}
        <InputField
          type="password"
          placeholder="Nhập lại mật khẩu mới"
          value={form.confirmPassword}
          onChange={(v) => handleChange("confirmPassword", v)}
          errors={errors.confirmPassword}
        />

        {/* Checkbox */}
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={form.agreeTerms}
            onChange={(e) => handleChange("agreeTerms", e.target.checked)}
          />
          Tôi đã đọc, hiểu và đồng ý với <a href="#">Điều khoản và Điều kiện</a>
        </label>
        {errors.agreeTerms?.map((err, i) => (
          <p key={i} className={styles.error}>{err}</p>
        ))}

        {/* General error */}
        {errors.general?.map((err, i) => (
          <div key={i} className={styles.errorBox}>
            <p className={styles.error}>{err}</p>
          </div>
        ))}

        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </button>
      </form>

      <p className={styles.switchText}>
        Đã có tài khoản?{" "}
        <button
          type="button"
          className={styles.link}
          onClick={() => navigate("/login")}
        >
          Đăng nhập
        </button>
      </p>
    </div>
  );
}
