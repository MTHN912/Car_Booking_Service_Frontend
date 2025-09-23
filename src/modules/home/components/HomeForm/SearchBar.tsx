import { useState } from "react";
import styles from "../Css/Search.module.css";

type SearchBarProps = {
  onSearch: (address: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (!input.trim()) return;
    onSearch(input);
  };

  return (
    <div>
      <h2 className={styles.subtitle}>Tìm cửa hàng theo địa chỉ khác</h2>
      <div className={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập địa chỉ hoặc thành phố"
          className={styles.input}
        />
        <button className={styles.button} onClick={handleSearch}>
          Tìm cửa hàng
        </button>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}
