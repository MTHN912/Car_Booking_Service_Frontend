import axios from "../../../../utils/axios";

export const getServices = async () => {
  const res = await axios.get("/services", { withCredentials: true });
  return res.data.data;
};

export const getServicesByCategory = async (category: string) => {
  const res = await axios.get(`/services/category/${category}`, { withCredentials: true });
  return res.data.data;
};
