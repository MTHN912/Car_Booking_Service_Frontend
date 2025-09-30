import { useNavigate } from "react-router-dom";
import type { LoginFormProps } from "../../../../types/auth";
import { InputField } from "../fields/InputField";
import { useLoginForm } from "./useLoginForm";
import styles from "../LoginForm/LoginForm.module.css";

export default function LoginForm({ onSubmit, loading, error }: LoginFormProps) {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    show,
    toggleShow,
    handleSubmit,
  } = useLoginForm(onSubmit);

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
          onToggle={toggleShow}
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
