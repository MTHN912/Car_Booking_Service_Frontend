import { useUsers } from "../components/user_managementHook";
import UserManagement from "../components/user_managementForm";

export default function UserManagementPage() {
  const { users, loading, error } = useUsers();

  return (
    <UserManagement users={users} loading={loading} error={error} />
  );
}
