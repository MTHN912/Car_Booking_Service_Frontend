import { useState } from "react";

export const useLoginForm = (onSubmit: (email: string, password: string) => void) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
    setPassword("");
  };

  const toggleShow = () => setShow((s) => !s);

  return {
    email,
    setEmail,
    password,
    setPassword,
    show,
    toggleShow,
    handleSubmit,
  };
};
