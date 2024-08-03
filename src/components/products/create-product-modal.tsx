import { useEffect, useRef, useState } from "react";
import { Input } from "../commons/input";
import { Modal } from "../commons/modal";
import { Select } from "../commons/select";
import { useCreateProductForm } from "./use-create-product-form";
import { ICategory, IProduct } from "../../types";
import { getAllCategoriesService } from "../../services";

interface IProps {
  setProducts: (products: IProduct[]) => void;
}

export const CreateProductModal = ({ setProducts }: IProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { values, handleInputChange, handleImageChange, handleSubmit } =
    useCreateProductForm({ setProducts, formRef });

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getAllCategoriesService().then((categories) => {
      if (categories) {
        setCategories(categories.data);
      }
    });
  }, []);

  const categoriesOptions = categories.map((category) => ({
    value: category.id!.toString(),
    label: category.name,
  }));

  return (
    <Modal id="createProductModal">
      <div className="bg-white px-8 pb-8 sm:p-10 sm:pb-20 sm:pt-0">
        <h3>Crear producto</h3>
        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <Input
            label="Nombre"
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
          <Input
            label="Código"
            type="text"
            name="code"
            value={values.code}
            onChange={handleInputChange}
          />
          <Input
            label="Descripción"
            type="text"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          />
          <Input
            label="Imagen"
            type="file"
            name="image"
            onChange={handleImageChange}
          />
          <Input
            label="Marca"
            type="text"
            name="brand"
            value={values.brand}
            onChange={handleInputChange}
          />
          <Input
            label="Talla"
            type="text"
            name="size"
            value={values.size}
            onChange={handleInputChange}
          />
          <Input
            label="Precio"
            type="text"
            name="price"
            value={values.price}
            onChange={handleInputChange}
          />
          <Input
            label="Stock"
            type="text"
            name="stock"
            value={values.stock}
            onChange={handleInputChange}
          />
          <Select
            label="Categoria"
            name="category_id"
            onChange={handleInputChange}
            options={categoriesOptions}
          />
          <button type="submit" className="px-4 py-2 bg-black text-white">
            Crear producto
          </button>
        </form>
      </div>
    </Modal>
  );
};
