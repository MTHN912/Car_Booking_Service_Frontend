import styles from "../Css/RadiusFilter.module.css";

type RadiusFilterProps = {
  radius: number;
  onRadiusChange: (r: number) => void;
};

export default function RadiusFilter({ radius, onRadiusChange }: RadiusFilterProps) {
  return (
    <div className={styles.filter}>
      <label htmlFor="radius">Bán kính tìm kiếm: </label>
      <select
        id="radius"
        value={radius}
        onChange={(e) => onRadiusChange(Number(e.target.value))}
        className={styles.select}
      >
        <option value={5}>5 km</option>
        <option value={10}>10 km</option>
        <option value={20}>20 km</option>
        <option value={50}>50 km</option>
      </select>
    </div>
  );
}
