import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormData, FormErrors } from "../../../types/auth";
import RegisterForm from "../components/RegisterForm";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // thông báo lỗi frontend
  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.fullname.trim()) newErrors.fullname = ["Họ và tên không được để trống"];
    if (!data.email.trim()) newErrors.email = ["Email không được để trống"];
    if (!data.password) newErrors.password = ["Mật khẩu không được để trống"];
    if (!data.confirmPassword) newErrors.confirmPassword = ["Vui lòng nhập lại mật khẩu"];
    if (data.password && data.confirmPassword && data.password !== data.confirmPassword) {
      newErrors.confirmPassword = [...(newErrors.confirmPassword || []), "Mật khẩu nhập lại không khớp!"];
    }
    if (!data.agreeTerms) {
      newErrors.agreeTerms = ["Bạn phải đồng ý với Điều khoản và Điều kiện!"];
    }
    return newErrors;
  };

  // thông báo lỗi backend
  const mapApiErrors = (res: any, form: FormData): FormErrors => {
    const errors: FormErrors = {};
      //dto
    if (Array.isArray(res?.message)) {
      return (res.message as string[]).reduce((acc: FormErrors, msg) => {
        if (msg.includes("Email")) {
          acc.email = [...(acc.email || []), msg];
        } else if (msg.includes("Mật khẩu")) {
          acc.password = [...(acc.password || []), msg];
          if (form.confirmPassword) {
            acc.confirmPassword = [...(acc.confirmPassword || []), msg];
          }
        } else if (msg.includes("Họ") || msg.includes("Tên")) {
          acc.fullname = [...(acc.fullname || []), msg];
        } else {
          acc.general = [...(acc.general || []), msg];
        }
        return acc;
      }, {} as FormErrors);
    }
      //exception filters
    if (res?.errorCode === "USER_EMAIL_EXISTS") {
      errors.email = ["Email đã được đăng ký!"];
      return errors;
    }
      //lỗi lạ
    errors.general = ["Đăng ký thất bại, vui lòng thử lại sau."];
    return errors;
  };

  const handleRegister = async (form: FormData) => {
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await register({
        name: form.fullname,
        email: form.email,
        password: form.password,
      });

      setErrors({});
      navigate("/login", { replace: true });
    } catch (error: any) {
      const res = error.response?.data;
      const apiErrors = mapApiErrors(res, form);
      setErrors(apiErrors);
    } finally {
      setLoading(false);
    }
  };

  return <RegisterForm onSubmit={handleRegister} errors={errors} loading={loading} />;
}
