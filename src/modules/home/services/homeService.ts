import axios from "../../../utils/axios";
import type {Store, StoreDetail} from "../../../types/store"

const API_URL = "/stores"

// Gọi API tìm cửa hàng theo lat/lng
export async function getNearbyStores(
  latitude: number,
  longitude: number,
  radius: number
): Promise<Store[]> {
  const res = await axios.get(`${API_URL}/nearby`, {
    params: { latitude, longitude, radius },
    withCredentials: true,
  });
  return res.data.data;
}

// Gọi API geocoding bên ngoài (OpenStreetMap)
export async function geocodeAddress(address: string): Promise<{ lat: number; lon: number } | null> {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`
  );
  const data = await res.json();
  if (!data || data.length === 0) return null;
  return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
}

export async function getStoreById(storeId: string): Promise<StoreDetail> {
  const res = await axios.get(`${API_URL}/${storeId}`, {
    withCredentials: true,
  });
  return res.data.data;
}