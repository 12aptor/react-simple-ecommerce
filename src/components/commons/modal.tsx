import { PropsWithChildren } from "react";
import { LineMdClose } from "../../assets/icons";
import { toggleModal } from "../../lib/helpers";

interface IProps extends PropsWithChildren {
  id: string;
}

export const Modal = ({ children, id, ...props }: IProps) => {
  const handleCloseModal = () => {
    toggleModal.close(id);
  };

  return (
    <dialog
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      id={id}
      {...props}
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-lg">
            <div className="flex items-center justify-end p-4 pb-0">
              <LineMdClose
                className="cursor-pointer hover:text-gray-500"
                onClick={handleCloseModal}
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </dialog>
  );
};
