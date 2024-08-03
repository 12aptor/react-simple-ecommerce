import { FaPlus } from "react-icons/fa";
import { Modal } from "../../../components/commons/modal";
import { toggleModal } from "../../../lib/helpers";
import { Fragment } from "react/jsx-runtime";
import { ProductsTable } from "../../../components/products/products-table";

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
        <ProductsTable />
      </div>

      <Modal id="createProductModal">
        <div className="bg-white px-8 pb-8 sm:p-10 sm:pb-20 sm:pt-0">
          <h3>Crear producto</h3>
        </div>
      </Modal>
    </Fragment>
  );
};
