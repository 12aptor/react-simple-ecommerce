import { Link, NavLink } from "react-router-dom";
import { toggleModal } from "../../../lib/helpers";
import { RiShoppingBag3Line, RiUser3Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

export const ClientHeader = () => {
  return (
    <div className="flex justify-center h-20 shadow">
      <div className="sm:px-0 p-4 max-w-7xl w-full">
        <nav className="h-full flex">
          <div className="font-luckiest-guy text-4xl flex items-center justify-center mr-auto">
            <Link to={"/pe"}>MODA</Link>
          </div>
          <ul className="lg:flex items-center justify-between gap-x-8 list-none hidden">
            <li className="flex items-center justify-center w-full h-full">
              <NavLink
                to={"/buscar?categoria=todos"}
                className={(state) =>
                  !state.isActive
                    ? "text-gray-600 text-lg font-semibold hover:text-black"
                    : "text-black"
                }
              >
                Todos
              </NavLink>
            </li>
            <li className="flex items-center justify-center w-full h-full">
              <NavLink
                to={"/buscar?categoria=novedades"}
                className={(state) =>
                  !state.isActive
                    ? "text-gray-600 text-lg font-semibold hover:text-black"
                    : "text-black"
                }
              >
                Novedades
              </NavLink>
            </li>
            <li className="flex items-center justify-center w-full h-full">
              <NavLink
                to={"/buscar?categoria=destacados"}
                className={(state) =>
                  !state.isActive
                    ? "text-gray-600 text-lg font-semibold hover:text-black"
                    : "text-black"
                }
              >
                Destacados
              </NavLink>
            </li>
          </ul>
          <div className="lg:flex items-center h-full ml-auto hidden">
            <div className="flex items-center py-2 px-5 rounded-md bg-gray-100">
              <BiSearch className="text-gray-600 text-lg mr-2" />
              <input
                className="w-36 bg-transparent border-none outline-none text-black font-semibold placeholder:text-gray-500"
                type="text"
                placeholder="Buscar producto"
              />
            </div>
          </div>
          <div className="flex items-center justify-center pl-5 cursor-pointer">
            <RiShoppingBag3Line className="text-2xl" />
          </div>
          <div
            className="flex items-center justify-center pl-5 cursor-pointer"
            onClick={() => toggleModal.show("loginModal")}
          >
            <RiUser3Line className="text-2xl" />
          </div>
          <div className="Header-burger-button">
            {/* <HiOutlineMenuAlt3 /> */}
          </div>
        </nav>
      </div>
    </div>
  );
};
