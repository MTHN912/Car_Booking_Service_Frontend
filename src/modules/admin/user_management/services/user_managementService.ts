import axios from "../../../../utils/axios";

export interface User {
  email: string;
  name: string;
  role: string;
  gender: string;
  address: string | null;
  phoneNumber: string | null;
}

export async function getUsers(): Promise<User[]> {
  const response = await axios.get("/users", { withCredentials: true });
  return response.data.data;
}
