import type { InputFieldProps } from "../../../types/auth";
import styles from "./RegisterForm.module.css";

export function InputField({ type, placeholder, value, onChange, errors, withToggle, onToggle }: InputFieldProps) {
  return (
    <div className={styles.field}>
      <div className={withToggle ? styles.passwordWrapper : ""}>
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {withToggle && onToggle && (
          <button type="button" className={styles.eyeButton} onClick={onToggle}>
            👁
          </button>
        )}
      </div>
      {errors?.map((err, i) => (
        <p key={i} className={styles.error}>{err}</p>
      ))}
    </div>
  );
}