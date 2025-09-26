type RadioOption = { value: string; label: string };

type RadioGroupFieldProps = {
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioGroupField({ name, value, options, onChange }: RadioGroupFieldProps) {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {options.map((opt) => (
        <label key={opt.value}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
