"use client";

import { topproducts } from "@/data/topproducts";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Product, useCart } from "@/context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface TopProductsProps {
  onAddToCart?: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

const TopProducts: React.FC<TopProductsProps> = () => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: Product) => {
    addToCart(product);
    router.push("/checkout");
  };
  return (
    <div className="mt-6">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl uppercase font-bold text-gray-800 mb-2">Top Rated Products</h2>
        <p className="text-lg uppercase text-gray-600">
          Explore our Top Rated collection of products.
        </p>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topproducts.map((topproduct) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden group"
            key={topproduct.id}
          >
            <Link
              href={{ pathname: `/products/${topproduct.id}` }}
              className="relative block overflow-hidden"
            >
              <div className="absolute top-2 right-2 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                Top Rated
              </div>
              <Image
                src={topproduct.image}
                alt={topproduct.name}
                width={400}
                height={400}
                className="w-full h-52 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="flex flex-col flex-1 p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{topproduct.name}</h2>
              <p className="text-gray-600 text-sm mb-3">{topproduct.shortDescription}</p>
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-500 ml-1">(25 reviews)</span>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-primary font-bold">
                    ৳<span className="text-2xl">{topproduct.price}</span>
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="flex-1 bg-white text-primary border border-primary font-medium py-2 px-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 text-sm flex items-center justify-center"
                    onClick={() =>handleAddToCart(topproduct)}
                  >
                    <FaCartShopping className="mr-1" />
                    Add to Cart
                  </button>
                  <button
                    className="flex-1 bg-primary text-white font-medium py-2 px-3 rounded-md hover:bg-primary/90 transition-colors duration-300 text-sm"
                    onClick={() => handleBuyNow(topproduct)}
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
  );
};

export default TopProducts;
