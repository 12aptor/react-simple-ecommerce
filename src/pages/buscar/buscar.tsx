import { useSearchParams } from "react-router-dom";
import { isPathActive } from "../../lib/helpers";

export const Buscar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex pt-10 pb-20">
        <div className="w-48">
          <h5 className="text-gray-800 font-medium text-base">Categorias</h5>
          <ul className="flex flex-col gap-y-2">
            <li className="text-gray-800 text-base">Todos</li>
            <li className="text-gray-800 text-base">Mujer</li>
          </ul>
        </div>
        <div className="flex-1">
          <h6 className="text-gray-800 font-medium text-base">
            Se ha encontrado 5 resultados
          </h6>
          <div className="All-products-content-content">Lista de productos</div>
        </div>
        <div className="w-48">
          <h5 className="text-gray-800 font-medium text-base">Relevancia</h5>
          <ul className="All-products-filter-content">
            <li className="text-gray-800 text-base">Orden alfabetico A-Z</li>
            <li className="text-gray-800 text-base">Orden alfabetico Z-A</li>
            <li className="text-gray-800 text-base">Precio: Menor a mayor</li>
            <li className="text-gray-800 text-base">Precio: Mayor a menor</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
