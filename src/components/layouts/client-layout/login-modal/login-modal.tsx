import { toggleModal } from "../../../../lib/helpers";
import { Input } from "../../../commons/input";
import { Modal } from "../../../commons/modal";
import { useLoginForm } from "./use-login-form";

export const LoginModal = () => {
  const { values, handleInputChange, handleLogin } = useLoginForm();

  const openRegisterModal = () => {
    toggleModal.close("loginModal");
    toggleModal.show("registerModal");
  };

  return (
    <Modal id="loginModal">
      <div className="bg-white px-8 pb-8 sm:p-10 sm:pb-20 sm:pt-0">
        <img src="/vite.svg" alt="Vite logo" className="w-12 mx-auto" />
        <h1 className="text-2xl font-semibold pb-4 text-center">
          Iniciar sesión
        </h1>
        <form className="flex flex-col gap-y-4" onSubmit={handleLogin}>
          <Input
            label="Correo electrónico"
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Input
            label="Contraseña"
            type="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
          <button className="px-4 py-2 bg-black text-white">
            Iniciar sesión
          </button>
        </form>
        <p className="text-center pt-2">
          ¿No tienes cuenta?{" "}
          <span className="text-black font-bold" onClick={openRegisterModal}>
            Registrate
          </span>
        </p>
      </div>
    </Modal>
  );
};
