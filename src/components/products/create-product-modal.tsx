import { Input } from "../commons/input";
import { Modal } from "../commons/modal";
import { Select } from "../commons/select";
import { useCreateProductForm } from "./use-create-product-form";

export const CreateProductModal = () => {
  const { values, handleInputChange, handleImageChange } =
    useCreateProductForm();

  console.log(values);

  return (
    <Modal id="createProductModal">
      <div className="bg-white px-8 pb-8 sm:p-10 sm:pb-20 sm:pt-0">
        <h3>Crear producto</h3>
        <form className="flex flex-col gap-y-4">
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
            options={[
              {
                value: "1",
                label: "Hombre",
              },
              {
                value: "2",
                label: "Mujer",
              },
            ]}
          />
        </form>
      </div>
    </Modal>
  );
};
