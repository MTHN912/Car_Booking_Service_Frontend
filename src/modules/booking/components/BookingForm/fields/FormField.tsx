type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

export default function FormField({ label, children }: FormFieldProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", fontWeight: "500" }}>{label}</label>
      {children}
    </div>
  );
}
