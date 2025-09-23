// kiểu của register
export type FormData = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

export type FormErrors = Partial<Record<keyof FormData | "general", string[]>>;

export type RegisterFormProps = {
  onSubmit: (form: FormData) => void;
  errors: FormErrors;
  loading: boolean;
};

// mấy cái ô nhập form đăng nhập/đăng ký
export type InputFieldProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  errors?: string[];
  withToggle?: boolean;
  onToggle?: () => void;
};

//kiểu của loign
export type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
  loading: boolean;
  error: string | null;
};

// context
export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
  register: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
};

//gửi request tới api
export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};