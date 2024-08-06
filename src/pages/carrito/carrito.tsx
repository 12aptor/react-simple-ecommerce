import { useEffect, useState } from "react";
import { IProductCart } from "../../types";
import { BiTrash } from "react-icons/bi";

export const Carrito = () => {
  const [cart, setCart] = useState<IProductCart[]>([]);

  useEffect(() => {
    const lsCart = localStorage.getItem("cart") || "[]";
    const newCart = JSON.parse(lsCart) as IProductCart[];
    setCart(newCart);
  }, []);

  const removeToCart = (product: IProductCart) => {
    const newCart = cart.filter((prod) => prod.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="pt-10 pb-20">
        <h1 className="text-3xl font-bold">Carrito</h1>
        <div className="mt-10 flex flex-col gap-5">
          {cart.length > 0 ? (
            cart.map((prod, index) => (
              <div key={index} className="flex gap-6 p-4 border rounded-lg">
                <picture className="block w-16 h-16 rounded-lg overflow-hidden relative">
                  <img
                    src={prod.image as string}
                    alt="Imagen de producto"
                    className="object-cover object-center w-full h-full"
                  />
                </picture>
                <div>
                  <h3>{prod.name}</h3>
                  <p>Cantidad: {prod.quantity}</p>
                </div>
                <div className="ml-auto">
                  <button
                    className="rounded p-2 border outline-none"
                    onClick={() => removeToCart(prod)}
                  >
                    <BiTrash className="text-red-500" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>No tienes productos en tu carrito</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
