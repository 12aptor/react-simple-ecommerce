import { Fragment, useEffect, useState } from "react";
import { IProduct } from "../../types";
import { ProductCard } from "../../components/products/product-card";

export const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {}, []);

  return (
    <Fragment>
      <div className="h-full min-h-[calc(100vh-80px)] flex justify-center items-center">
        <div className="max-w-7xl w-full">
          <div className="flex flex-wrap">
            <div className="flex-1">
              <p className="text-gray-800 font-medium text-base">
                Absolutely hot collections <span>🔥</span>
              </p>
              <h1 className="text-black text-6xl font-bold">
                The Best Place To Find And Buy Amazing{" "}
                <span className="bg-gradient-to-r from-violet-500 ti bg-purple-800 bg-clip-text text-transparent">
                  Products
                </span>
              </h1>
              <p className="text-gray-800 font-medium text-base mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo voluptatum optio accusantium molestiae saepe.
              </p>
              <div className="mt-5">
                <button className="bg-black text-white px-4 py-2 rounded-md">
                  Explore Now
                </button>
              </div>
              <div className="flex gap-x-24 mt-12">
                <div>
                  <div className="text-4xl font-bold pb-1">20k+</div>
                  <div className="text-lg">Collections</div>
                </div>
                <div>
                  <div className="text-4xl font-bold pb-1">16k</div>
                  <div className="text-lg">Users</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:">
              <img src={"/dress.png"} alt="Dress" className="h-[500px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-20">
        <div className="max-w-7xl w-full">
          <div className="grid gap-x-6 gap-y-12 grid-cols-4">
            {products.length > 0 &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
