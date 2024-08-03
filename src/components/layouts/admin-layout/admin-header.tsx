import { PropsWithChildren } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineNotificationAdd } from "react-icons/md";

export const AdminHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen h-full flex-1 p-5">
      <div className="min-h-[calc(100vh-40px)] h-full bg-gray-200 rounded-lg p-6">
        <header className="h-10 flex mb-5">
          <h1 className="text-3xl text-black mr-auto">Dashboard</h1>
          <div className="h-full w-100 bg-white rounded-md flex py-2 px-4 shadow">
            <BiSearch className="text-2xl text-gray-600" />
            <input
              type="text"
              placeholder="Search your product"
              className="w-full border-none outline-none text-base px-4"
            />
          </div>
          <div className="h-full w-10 mx-4 bg-white rounded-md flex items-center justify-center shadow">
            <MdOutlineNotificationAdd className="text-2xl" />
          </div>
          <div className="he-full flex items-center">
            <img className="picture" src="/vite.svg" alt="" />
            <div className="px-4">
              <h3 className="text-base font-bold">Paolo Soncco</h3>
              <span className="block text-sm text-gray-500 font-medium">
                Vendedor
              </span>
            </div>
            <IoIosArrowDown className="cursor-pointer" />
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};
