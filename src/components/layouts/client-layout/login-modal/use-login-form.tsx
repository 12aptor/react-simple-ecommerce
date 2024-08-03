import { FormEvent, useState } from "react";

export const useLoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return {
    values,
    handleInputChange,
    handleLogin,
  };
};
