import { useState } from "react";
import type { SearchBarProps } from "../../../../types/home";
import styles from "../css/Search.module.css";


export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (!input.trim()) return;
    onSearch(input);
  };

  return (
    <div>
      <h2 className={styles.subtitle}>Find stores based on a different address</h2>
      <div className={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter address or city"
          className={styles.input}
        />
        <button className={styles.button} onClick={handleSearch}>
          Find Store
        </button>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}
