import { useEffect } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { IProduct } from "../../types";
import { getAllProductsService } from "../../services";

interface IProps {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

export const ProductsTable = ({ products, setProducts }: IProps) => {
  useEffect(() => {
    getAllProductsService().then((json) => {
      if (json) {
        setProducts(json);
      }
    });
  }, [setProducts]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th
              scope="col"
              className="pl-2 pr-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nombre
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Descripción
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Precio
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Cantidad
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Estado
            </th>
            <th
              scope="col"
              className="pr-2 pl-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product) => (
              <tr className="odd:bg-gray-100 even:bg-white" key={product.id}>
                <td className="pl-2 pr-4 py-4 whitespace-nowrap">
                  {product.code}-{product.name}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {product.description}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  ${product.price}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">{product.stock}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {product.status ? "Activo" : "Inactivo"}
                </td>
                <td className="pr-2 pl-4 py-4 whitespace-nowrap">
                  <div className="flex gap-x-2">
                    <button
                      className="px-2 py-1 inline-flex text-xs leading-5 rounded-md border"
                      title="Editar"
                    >
                      <FaEdit className="text-base" />
                    </button>
                    <button
                      className="px-2 py-1 inline-flex text-xs leading-5 rounded-md border"
                      title="Eliminar"
                    >
                      <FaRegTrashAlt className="text-base" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
