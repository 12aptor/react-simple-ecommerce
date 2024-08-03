import { useState } from "react";
import { IProduct } from "../../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface IProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProps) => {
  const [likedProduct, setLikedProduct] = useState(false);

  return (
    <div className="min-w-64">
      <div className="h-80 bg-gray-300 rounded-lg overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src={product.image}
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
          <button className="py-2 px-3 text-white text-base border-none outline-none rounded-md bg-gradient-to-r from-violet-500 ti bg-purple-800">
            Compra ahora
          </button>
        </div>
      </div>
    </div>
  );
};
