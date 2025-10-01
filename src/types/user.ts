export type User = {
  id: string;
  name: string;
  email: string;
  gender?: string | null;
  address?: string | null;
  phoneNumber?: string | null;
  role: "ADMIN" | "USER";
};

export type ApiResponse<T> = {
  success: boolean;
  statusCode: number;
  data: T;
  timestamp?: string;
  path?: string;
};
