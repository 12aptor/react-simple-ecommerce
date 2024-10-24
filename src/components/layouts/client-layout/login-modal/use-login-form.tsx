import { FormEvent, useState } from "react";
import { loginService } from "../../../../services";
import { ILogin } from "../../../../types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLoginForm = () => {
  const [values, setValues] = useState<ILogin>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await loginService(values);

      if (response.status === 200) {
        toast.success("Inicio de sesión exitoso");
        localStorage.setItem("token", response.json.access);
        navigate("/admin-panel");
        return;
      }

      throw new Error(response.json.message);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return;
      }
    }
  };

  return {
    values,
    handleInputChange,
    handleLogin,
  };
};
