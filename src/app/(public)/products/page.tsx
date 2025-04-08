"use client";

import { products } from "@/data/product";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Image from "next/image";

const Products = () => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    router.push("/checkout");
  };

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
                  <Image
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
                      <button 
                        className="text-white bg-orange-300 px-4 py-2 rounded hover:bg-orange-400 transition-colors"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add Cart
                      </button>
                      <button 
                        className="text-white bg-slate-600 px-4 py-2 rounded hover:bg-slate-700 transition-colors"
                        onClick={() => handleBuyNow(product)}
                      >
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
