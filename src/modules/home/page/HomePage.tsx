import { useEffect, useState } from "react";
import HomeForm from "../components/HomeForm/";
import type { Store } from "../services/homeService";
import { geocodeAddress, getNearbyStores } from "../services/homeService";

export default function HomePage() {

  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [searchMode, setSearchMode] = useState<"gps" | "address">("gps");
  const [radius, setRadius] = useState<number>(10);
  const [lastCoords, setLastCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [address, setAddress] = useState("");

  const fetchStores = async (lat: number, lon: number, mode: "gps" | "address") => {
    try {
      setLoading(true);
      setError(null);
      const data = await getNearbyStores(lat, lon, radius);
      setStores(data);
      setSearchMode(mode);
      setLastCoords({ lat, lon });
    } catch {
      setError("Không tìm thấy cửa hàng nào.");
    } finally {
      setLoading(false);
    }
  };

  // lấy vị trí hiện tại
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchStores(pos.coords.latitude, pos.coords.longitude, "gps"),
        () => setError("Không thể lấy vị trí của bạn. Hãy bật GPS.")
      );
    } else {
      setError("Trình duyệt không hỗ trợ Geolocation.");
    }
  }, []);

  // tìm theo địa chỉ
  const handleSearchByAddress = async (addr: string) => {
    setAddress(addr);
    const coords = await geocodeAddress(addr);
    if (!coords) {
      setError("Không tìm thấy địa điểm này.");
      return;
    }
    fetchStores(coords.lat, coords.lon, "address");
  };

  // thay đổi bán kính
  useEffect(() => {
    if (lastCoords) {
      fetchStores(lastCoords.lat, lastCoords.lon, searchMode);
    }
  }, [radius]);

  return (
    <HomeForm
      onSearchByAddress={handleSearchByAddress}
      onRadiusChange={setRadius}
      radius={radius}
      searchMode={searchMode}
      address={address}
      loading={loading}
      error={error}
      stores={stores}
    />
  );
}
