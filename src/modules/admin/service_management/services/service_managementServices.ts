import axios from "../../../../utils/axios";

export const getServices = async () => {
  const res = await axios.get("/services", { withCredentials: true });
  return res.data.data;
};
