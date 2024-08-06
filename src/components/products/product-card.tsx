import { useState } from "react";
import { IProduct, IProductCart } from "../../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import toast from "react-hot-toast";

interface IProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProps) => {
  const [likedProduct, setLikedProduct] = useState(false);

  const addToCart = (product: IProduct) => {
    const cart = localStorage.getItem("cart") || "[]";
    const newCart = JSON.parse(cart) as IProductCart[];

    const productInCart = newCart.find((prod) => prod.id === product.id);

    if (productInCart) {
      const updatedNewCart = newCart.map((prod) => {
        if (prod.id === product.id) {
          return {
            ...prod,
            quantity: prod.quantity + 1,
            subtotal: parseFloat((prod.subtotal + prod.price).toFixed(2)),
          };
        }

        return prod;
      });

      localStorage.setItem("cart", JSON.stringify(updatedNewCart));

      toast.success("Producto agregado al carrito");
      return;
    }

    const newProduct = {
      ...product,
      quantity: 1,
      subtotal: product.price,
    };

    localStorage.setItem("cart", JSON.stringify([...newCart, newProduct]));

    toast.success("Producto agregado al carrito");
  };

  return (
    <div className="min-w-64">
      <div className="h-80 bg-gray-300 rounded-lg overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src={product.image as string}
          alt="Imagen de producto"
        />
        <span className="absolute top-2 right-2 px-4 py-1 rounded-lg bg-black bg-opacity-20 text-white font-bold text-center">
          50% Off
        </span>
        <div
          className="absolute bottom-2 left-2 h-10 w-10 flex items-center justify-center rounded-full bg-white text-2xl font-bold cursor-pointer"
          onClick={() => setLikedProduct(!likedProduct)}
        >
          {likedProduct ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart className="text-gray-300" />
          )}
        </div>
      </div>
      <div className="py-4">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-gray-600 text-base">{product.description}</p>
        <p className="text-gray-600 text-base">Talla: {product.size}</p>
        <div className="flex justify-between items-center pt-5">
          <p>${product.price}</p>
          <button
            className="py-2 px-3 text-white text-base border-none outline-none rounded-md bg-gradient-to-r from-violet-500 ti bg-purple-800"
            onClick={() => addToCart(product)}
          >
            Compra ahora
          </button>
        </div>
      </div>
    </div>
  );
};
