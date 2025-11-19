import { useState } from "react";

export const useContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<typeof values>>({});

  const phoneMask = (value: string) => {
    if (!value) return "";
    let digits = value.replace(/\D/g, "");
    digits = digits.substring(0, 11);
    if (digits.length === 0) return "";
    if (digits[0] !== "7") {
      digits = "7" + digits;
      digits = digits.substring(0, 11);
    }
    if (digits.length === 1) return "+7";
    let result = "+7";
    if (digits.length > 1) {
      result += "(" + digits.substring(1, 4);
    }
    if (digits.length > 4) {
      result += ") " + digits.substring(4, 7);
    }
    if (digits.length > 7) {
      result += "-" + digits.substring(7, 9);
    }
    if (digits.length > 9) {
      result += "-" + digits.substring(9, 11);
    }
    return result;
  };


  const validate = () => {
    const newErrors: Partial<typeof values> = {};

    if (!values.name.trim()) newErrors.name = "Введите имя";

    const phoneRegex = /^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(values.phone)) newErrors.phone = "Неверный формат телефона";

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(values.email)) newErrors.email = "Неверный email";


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof typeof values, value: string) => {
    if (field === "phone") value = phoneMask(value);
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (onSuccess?: () => void) => {
    if (!validate()) return false;
    onSuccess?.();
    return true;
  };

  return { values, errors, handleChange, handleSubmit };
};
