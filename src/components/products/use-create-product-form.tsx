import { ChangeEvent, useState } from "react";
import { IProduct } from "../../types";

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  return {
    values,
    handleInputChange,
    handleImageChange,
  };
};
