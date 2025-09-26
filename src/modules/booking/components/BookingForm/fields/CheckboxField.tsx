type CheckboxFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function CheckboxField({ label, ...props }: CheckboxFieldProps) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <input type="checkbox" {...props} />
      {label}
    </label>
  );
}
