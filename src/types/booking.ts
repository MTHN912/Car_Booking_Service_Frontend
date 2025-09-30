export type BookingPayload = {
  name: string;
  phone: string;
  email?: string;
  carModel: string;
  km?: string;
  licensePlate: string;
  province: string;
  district: string;
  locationType: string;
  date: string;
  time: string;
  notes?: string;
  services: string[];
};

export type BookingResponse = {
  id: string;
  storeId: string;
  userId: string;
  name: string;
  phone: string;
  email?: string;
  carModel: string;
  km?: number;
  licensePlate: string;
  province: string;
  district: string;
  locationType: string;
  scheduledAt: string;
  notes?: string;
  status: string;
};

export type Service = {
  serviceId: string;
  price: number;
  duration: number;
  service: {
    id: string;
    name: string;
    description: string;
  };
};

export type BookingFormProps = {
  storeId: string;
  onSubmit: (payload: any) => Promise<void>;
};