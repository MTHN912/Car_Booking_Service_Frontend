//gọi api
export type Store = {
  id:string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  distance: number;
};

export type StoreDetail = {
  id: string;
  name: string;
  address: string;
  createdAt: string;
};