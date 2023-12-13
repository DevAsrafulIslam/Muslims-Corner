import { topproducts } from "@/data/topproducts";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const TopProducts = () => {
  return (
    <div>
      <h2 className="text-3xl text-primary font-medium my-4">
        Top Rated Products
      </h2>
      {/*  border-2 border-[#0c232722] border-dashed w-3/12 */}
      <div className="">
        <div className="grid mx-auto gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topproducts.map((topproduct) => (
            <div
              className="hover:shadow-xl font-sans text-[#00000098] font-medium border-2 border-dashed bg-white"
              key={topproduct.id}
            >
              <Link href={{ pathname: `/products/${topproduct.id}` }}>
                <Image
                  className="mx-0 bg-[#dee4e8]"
                  src={topproduct.image}
                  alt={topproduct.name}
                  width={300}
                  height={300}
                />
                <div className="container flex justify-between ">
                  <span>
                    <h4>{topproduct.brand}</h4>
                    <h4>{topproduct.name}</h4>
                  </span>
                  <span>
                    <h4>{topproduct.rating}</h4>
                    <h4 className="text-[13px]">
                      {topproduct.numReviews} reviews
                    </h4>
                  </span>
                </div>
                <div className="divider my-0"></div>
                <div className="container my-2 flex justify-between self-center">
                  <p className="text-[#9b2d11]">
                    $<span className="text-2xl">{topproduct.price}</span>
                  </p>
                  <button className="flex items-center gap-2 hover:text-[#0a80c8]">
                    <FaCartShopping />
                    Product Details
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
