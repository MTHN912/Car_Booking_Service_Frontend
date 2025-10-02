import axios from "../../../../utils/axios";

export const getStores = async () => {
  const res = await axios.get("/stores", { withCredentials: true });
  return res.data.data;
};

export const getStoreServices = async (storeId: string) => {
  const res = await axios.get(`/stores/${storeId}/services`, { withCredentials: true });
  return res.data.data;
};
