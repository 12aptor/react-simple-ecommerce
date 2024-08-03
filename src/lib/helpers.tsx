export const toggleModal = {
  show: (id: string) => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    modal.show();
  },
  close: (id: string) => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    modal.close();
  },
};

export const isPathActive = (
  path: string,
  location: string,
  styles: string
) => {
  return location.includes(path) && styles;
};

export const addToCart = () => {};
