import styles from "./user_management.module.css";
import type { User } from "../services/user_managementService";

interface Props {
  users: User[];
  loading: boolean;
  error: string | null;
}

export default function UserManagement({ users, loading, error }: Props) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className={styles.container}>
      <h1>User Management</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.email}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>{u.gender}</td>
              <td>{u.address || "-"}</td>
              <td>{u.phoneNumber || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
