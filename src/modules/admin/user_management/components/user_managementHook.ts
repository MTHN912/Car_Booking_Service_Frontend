import { useEffect, useState } from "react";
import { getUsers } from "../services/user_managementService";
import type {User} from "../services/user_managementService";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching users");
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
}
