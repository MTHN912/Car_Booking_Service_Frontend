import type { ApiResponse, User } from "../../../types/user";
import axios from "../../../utils/axios";

export async function getCurrentUser() {
  const res = await axios.get<ApiResponse<User>>("/users/me", { withCredentials: true });
  return res.data.data;
}

export async function updateUser(data: Partial<User>) {
  const res = await axios.put<User>("/users/me", data, { withCredentials: true });
  return res.data;
}
