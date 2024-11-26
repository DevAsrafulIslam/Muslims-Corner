import { products } from "@/data/product";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="container px-0">
      <div>
        <h2 className="text-3xl text-primary font-medium my-4">
          Our Latest Products
        </h2>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                className="border border-dashed rounded-md hover:shadow-md flex flex-col"
                key={product.id}
              >
                <Link
                  href={{ pathname: `/products/${product.id}` }}
                  className="relative block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover rounded-t-md"
                  />
                </Link>
                <div className="flex flex-col flex-1 p-2">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-500">{product.shortDescription}</p>
                  <div className="divider my-2"></div>
                  <div className="mt-auto flex justify-between items-center">
                    <p className="text-[#9b2d11]">
                      ৳<span className="text-2xl">{product.price}</span>
                    </p>
                    <div className="flex space-x-2">
                      <button className="text-white bg-orange-300 px-4 py-2 rounded">
                        Add Cart
                      </button>
                      <button className="text-white bg-slate-600 px-4 py-2 rounded">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
