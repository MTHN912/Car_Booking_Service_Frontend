import { useState, useCallback } from "react";
import type { FormData } from "../../../../types/auth";

export const useRegisterForm = (onSubmit: (form: FormData) => void) => {
  const [form, setForm] = useState<FormData>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = useCallback(
    (key: keyof FormData, value: string | boolean) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  const togglePassword = () => setShowPassword((s) => !s);

  return {
    form,
    handleChange,
    handleSubmit,
    showPassword,
    togglePassword,
  };
};
