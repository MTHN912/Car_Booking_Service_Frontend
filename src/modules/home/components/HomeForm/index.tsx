import type { HomeFormProps } from "../../../../types/home";
import RadiusFilter from "./RadiusFilter";
import SearchBar from "./SearchBar";
import StoreList from "./StoreList";

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
