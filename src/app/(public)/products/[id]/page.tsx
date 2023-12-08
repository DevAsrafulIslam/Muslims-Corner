"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import Products from "../page";
import { useParams } from "next/navigation";
import { products } from "@/data/product";

const Shop = () => {
  const { id } = useParams();
  const product = useMemo(() => {
    return products.find((product) => product.id === id);
  }, [id]);
  if (!product) {
    return "product not found";
  }
  return (
    <div className=" container max-h-screen">
      <div className="grid gap-14 md:grid-cols-2 space-x-4 justify-between my-12">
        {/* <button>Go Home</button> */}
        <Image src={product?.image} alt="" width={500} height={500} />
        <div>
          <div className="flex flex-col ">
            <h4 className="uppercase text-2xl">{product.name}</h4>
            <h1 className="text-4xl md:text-5xl text-gray-700 mt-5 mb-3">
              Umrah Mubarak Mug - Italic
            </h1>
            <span className="flex justify-start space-x-4">
              <p>{product.rating}</p>
              <p>{product.numReviews} Reviews</p>
            </span>
            <span className="divider"></span>
          </div>
          <div>
            <span className="flex items-center mb-4 space-x-4">
              <h2 className="text-2xl">${product.price}</h2>
              <h2>
                {product.countInStock}{" "}
                <span className="bg-green-200 rounded-xl px-2 -y-3">
                  In Stock
                </span>
              </h2>
            </span>
            <p>
              A beautiful mug that will make the perfect gift for someone
              special returning from Umrah. Ceramic mug with 11oz Capacity.
              Dishwasher and microwave safe.
            </p>
            <div className="grid grid-cols-3 mt-5 items-center self-center">
              <h4 className="font-bold">Quantity</h4>
              <button className="text-white py-2 px-7 mt-0 rounded-md bg-purple-900">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
