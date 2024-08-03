import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Productos } from "./pages/admin-panel/productos/productos";
import { Buscar } from "./pages/buscar/buscar";
import { ClientLayout } from "./components/layouts/client-layout/client-layout";
import { AdminLayout } from "./components/layouts/admin-layout/admin-layout";
import { AdminPanel } from "./pages/admin-panel/admin-panel";

const router = createBrowserRouter([
  {
    path: "",
    element: <ClientLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "buscar",
        element: <Buscar />,
      },
    ],
  },
  {
    path: "admin-panel",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AdminPanel />,
      },
      {
        path: "productos",
        element: <Productos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
