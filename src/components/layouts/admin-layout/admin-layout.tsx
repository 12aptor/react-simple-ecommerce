import { AdminSidebar } from "./admin-sidebar";
import { AdminHeader } from "./admin-header";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="min-h-screen h-full bg-black flex ">
      <AdminSidebar />
      <AdminHeader>
        <Outlet />
      </AdminHeader>
    </div>
  );
};
