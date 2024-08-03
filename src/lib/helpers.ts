export const isAuthenticated = (): boolean => {
  const localStorageToken = localStorage.getItem("token");

  if (!localStorageToken) {
    return false;
  }

  const payload = localStorageToken.split(".")[1];
  const decodedPayload = atob(payload);
  const payloadJson = JSON.parse(decodedPayload);

  if (payloadJson.exp < Date.now() / 1000) {
    return false;
  }

  return true;
};

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
