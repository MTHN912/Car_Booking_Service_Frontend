import FormField from "./FormField";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function InputField({ label, ...props }: InputFieldProps) {
  return (
    <FormField label={label}>
      <input {...props} />
    </FormField>
  );
}
