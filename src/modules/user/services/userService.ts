import axios from "../../../utils/axios";
import type {User} from "../../../types/user"

export async function getCurrentUser() {
  const res = await axios.get<User>("/users/me", { withCredentials: true });
  return res.data;
}

export async function updateUser(data: Partial<User>) {
  const res = await axios.put<User>("/users/me", data, { withCredentials: true });
  return res.data;
}
