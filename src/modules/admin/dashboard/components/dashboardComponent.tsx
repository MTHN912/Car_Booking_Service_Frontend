import React from "react";
import "./dashboard.module.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Logo</h2>
        <ul>
          <li>🏠 Trang chủ</li>
          <li>📊 Thống kê</li>
          <li>⚙️ Cài đặt</li>
        </ul>
      </aside>

      <main className="main">
        <header className="header">
          <h1>Bảng điều khiển</h1>
        </header>

        <section className="content">
          <h2>Chào mừng bạn đến với Dashboard</h2>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
