import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { Modal } from "../../../components/commons/modal";
import { toggleModal } from "../../../lib/helpers";
import { Fragment } from "react/jsx-runtime";

export const Productos = () => {
  return (
    <Fragment>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Productos</h1>
        <button
          className="px-2 py-1 inline-flex text-xs leading-5 rounded-md border bg-green-100 text-green-800 hover:text-green-900 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
          onClick={() => toggleModal.show("createProductModal")}
        >
          <FaPlus className="text-base" />
          <span className="ml-2">Agregar producto</span>
        </button>
      </div>
      <div className="p-5 bg-white shadow-md rounded-lg">
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
              <tr className="odd:bg-gray-100 even:bg-white">
                <td className="pl-2 pr-4 py-4 whitespace-nowrap">
                  Producto de prueba
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  Descripción de prueba
                </td>
                <td className="px-4 py-4 whitespace-nowrap">$10.00</td>
                <td className="px-4 py-4 whitespace-nowrap">10</td>
                <td className="px-4 py-4 whitespace-nowrap">Activo</td>
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
              <tr className="odd:bg-gray-100 even:bg-white">
                <td className="pl-2 pr-4 py-4 whitespace-nowrap">
                  Producto de prueba
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  Descripción de prueba
                </td>
                <td className="px-4 py-4 whitespace-nowrap">$10.00</td>
                <td className="px-4 py-4 whitespace-nowrap">10</td>
                <td className="px-4 py-4 whitespace-nowrap">Activo</td>
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
            </tbody>
          </table>
        </div>
      </div>
      <Modal id="createProductModal">
        <div className="bg-white px-8 pb-8 sm:p-10 sm:pb-20 sm:pt-0">
          <h3>Crear producto</h3>
        </div>
      </Modal>
    </Fragment>
  );
};
