import { topproducts } from "@/data/topproducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const TopProducts = () => {
  return (
    <div>
      <h2 className="text-3xl text-primary font-medium my-4">
        Top Rated Products
      </h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topproducts.map((topproduct) => (
            <div
              className="border border-dashed rounded-md hover:shadow-md flex flex-col"
              key={topproduct.id}
            >
              <Link
                href={{ pathname: `/products/${topproduct.id}` }}
                className="relative block"
              >
                <img
                  src={topproduct.image}
                  alt={topproduct.name}
                  className="w-full h-52 object-cover rounded-t-md"
                />
              </Link>
              <div className="flex flex-col flex-1 p-2">
                <h2 className="text-lg font-semibold">{topproduct.name}</h2>
                <p className="text-gray-500">{topproduct.shortDescription}</p>
                <div className="divider my-2"></div>
                <div className="mt-auto flex justify-between items-center">
                  <p className="text-[#9b2d11]">
                    ৳<span className="text-2xl">{topproduct.price}</span>
                  </p>
                  <div className="flex space-x-2">
                    <button className="text-white bg-orange-300 p-2 rounded">
                      Add Cart
                    </button>
                    <button className="text-white bg-slate-600 p-2 rounded">
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
  );
};

export default TopProducts;
