import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField } from "./InputField";
import styles from "./css/LoginForm.module.css";
import type { LoginFormProps } from "../../../types/auth";

export default function LoginForm({ onSubmit, loading, error }: LoginFormProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Đăng nhập</h2>

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {/* Email */}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />

        {/* Password */}
        <InputField
          type={show ? "text" : "password"}
          placeholder="Mật khẩu"
          value={password}
          onChange={setPassword}
          withToggle
          onToggle={() => setShow((s) => !s)}
        />

        <div className={styles.options}>
          <a className={styles.forgot} href="/forgot-password">
            Quên mật khẩu?
          </a>
        </div>

        {error && (
          <div className={styles.errorBox}>
            <p className={styles.error}>{error}</p>
          </div>
        )}

        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      <p className={styles.switchText}>
        Chưa có tài khoản?{" "}
        <button
          type="button"
          className={styles.link}
          onClick={() => navigate("/register")}
        >
          Đăng ký
        </button>
      </p>
    </div>
  );
}
