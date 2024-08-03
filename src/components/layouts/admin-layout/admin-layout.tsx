import { AdminSidebar } from "./admin-sidebar";
import { AdminHeader } from "./admin-header";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../../lib/helpers";

export const AdminLayout = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="min-h-screen h-full bg-black flex ">
      <AdminSidebar />
      <AdminHeader>
        <Outlet />
      </AdminHeader>
    </div>
  );
};
