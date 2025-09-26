import type { Store } from "./store";

//tổng
export type HomeFormProps = {
  onSearchByAddress: (address: string) => void;
  onRadiusChange: (radius: number) => void;
  radius: number;
  searchMode: "gps" | "address";
  address: string;
  loading: boolean;
  error: string | null;
  stores: Store[];
};

//bán kính
export type RadiusFilterProps = {
  radius: number;
  onRadiusChange: (r: number) => void;
};

//cây tìm kiếm
export type SearchBarProps = {
  onSearch: (address: string) => void;
};

//List của hàng
export type StoreListProps = {
  searchMode: "gps" | "address";
  address: string;
  stores: Store[];
  loading: boolean;
  error: string | null;
};