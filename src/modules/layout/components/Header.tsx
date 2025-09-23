import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/context/AuthContext";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleAccountClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleRegisterClick = () => {
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="../../../../../src/assets/images.png" alt="Logo" />
      </div>

      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/stores">Store</a>
        <a href="/bookings/new">Create Booking</a>
        <a href="/bookings">Booking List</a>
        <a href="/contact">Contact</a>
        <a href="/dontknow">Chưa Nghĩ Ra...</a>
      </nav>

      <div className={styles.userSection}>
        <span
          className={styles.account}
          onClick={handleAccountClick}
          style={{ cursor: "pointer" }}
        >
          {user ? "Tài khoản" : "Tài khoản"}
        </span>

        {user ? (
          <button className={styles.button} onClick={logout}>
            Đăng Xuất
          </button>
        ) : (
          <button className={styles.button} onClick={handleRegisterClick}>
            Đăng Nhập
          </button>
        )}
      </div>
    </header>
  );
}
