import { HiOutlineStar } from "react-icons/hi";
import { IoGridOutline, IoListOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

type classNameType = {
  isActive: boolean;
};

export const AdminSidebar = () => {
  const className = ({ isActive }: classNameType) =>
    isActive
      ? "py-2 px-7 text-black font-bold flex gap-x-2 items-center rounded-md bg-white"
      : "py-2 px-7 text-gray-300 font-bold flex gap-x-2 items-center rounded-md";

  return (
    <div className="h-full w-64">
      <div className="h-16 text-3xl text-white font-bold flex items-center justify-start py-5 px-7">
        MODA
      </div>
      <ul className="list-none">
        <li className="px-3">
          <NavLink to={"/admin-panel"} end className={className}>
            <IoGridOutline />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="px-3">
          <NavLink to={"/admin-panel/productos"} className={className}>
            <IoListOutline />
            <span>Productos</span>
          </NavLink>
        </li>
        <li className="px-3">
          <NavLink to={"/admin-panel/categorias"} className={className}>
            <HiOutlineStar />
            <span>Categorias</span>
          </NavLink>
        </li>
        <li className="px-3">
          <NavLink to={"/admin-panel/usuarios"} className={className}>
            <HiOutlineStar />
            <span>Usuarios</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
