import { CalendarCheck, FileText, LayoutDashboard, Store, Users, Wrench } from "lucide-react";
import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./adminLayout.module.css";

export default function AdminLayout() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("admin-body");
    return () => {
      document.body.classList.remove("admin-body");
    };
  }, []);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link
                to="/admin/dashboard"
                className={location.pathname === "/admin/dashboard" ? styles.active : ""}
              >
                <LayoutDashboard size={18} /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className={location.pathname === "/admin/users" ? styles.active : ""}
              >
                <Users size={18} /> Users Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/bookings"
                className={location.pathname === "/admin/bookings" ? styles.active : ""}
              >
                <CalendarCheck size={18} /> Bookings Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/stores"
                className={location.pathname === "/admin/stores" ? styles.active : ""}
              >
                <Store size={18} /> Stores Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/services"
                className={location.pathname === "/admin/services" ? styles.active : ""}
              >
                <Wrench size={18} /> Services Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/logs"
                className={location.pathname === "/admin/logs" ? styles.active : ""}
              >
                <FileText size={18} /> Audit Log Management
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
