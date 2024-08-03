import { Fragment } from "react/jsx-runtime";
import { ClientHeader } from "./client-header";
import { LoginModal } from "./login-modal/login-modal";
import { Outlet } from "react-router-dom";

export const ClientLayout = () => {
  return (
    <Fragment>
      <ClientHeader />
      <Outlet />
      <LoginModal />
      {/* <RegisterModal /> */}
    </Fragment>
  );
};
