import { ChangeEvent, FormEvent, useState } from "react";
import { IProduct } from "../../types";
import toast from "react-hot-toast";
import { postProductService } from "../../services";

export const useCreateProductForm = () => {
  const [values, setValues] = useState<IProduct>({
    name: "",
    code: "",
    description: "",
    image: null,
    brand: "",
    size: "",
    price: 0,
    stock: 0,
    category_id: 0,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    if (file) {
      setValues({
        ...values,
        image: file,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await postProductService(values);

      if (response.status === 201) {
        toast.success(response.json.message);
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
    handleImageChange,
    handleSubmit,
  };
};
