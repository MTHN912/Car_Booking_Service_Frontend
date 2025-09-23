import type { LoginPayload, RegisterPayload } from "../../../types/auth";
import axios from "../../../utils/axios";
const API_URL = "/auth";

export async function login(data: LoginPayload) {
  const res = await axios.post(`${API_URL}/login`, data, { withCredentials: true });
  return res.data;
}

export async function register(data: RegisterPayload) {
  const res = await axios.post(`${API_URL}/register`, data);
  return res.data;
}

export async function logout() {
  const res = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
  return res.data;
}
