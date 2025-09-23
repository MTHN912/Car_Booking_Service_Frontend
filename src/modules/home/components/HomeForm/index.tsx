import RadiusFilter from "./RadiusFilter";
import SearchBar from "./SearchBar";
import StoreList from "./StoreList";

type HomeFormProps = {
  onSearchByAddress: (address: string) => void;
  onRadiusChange: (radius: number) => void;
  radius: number;
  searchMode: "gps" | "address";
  address: string;
  loading: boolean;
  error: string | null;
  stores: any[];
};

export default function HomeForm({
  onSearchByAddress,
  onRadiusChange,
  radius,
  searchMode,
  address,
  loading,
  error,
  stores,
}: HomeFormProps) {
  return (
    <div>
      <SearchBar onSearch={onSearchByAddress} />
      <RadiusFilter radius={radius} onRadiusChange={onRadiusChange} />
      <StoreList
        searchMode={searchMode}
        address={address}
        stores={stores}
        loading={loading}
        error={error}
      />
    </div>
  );
}
