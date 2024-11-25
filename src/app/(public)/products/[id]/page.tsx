import React from "react";
import { Metadata } from "next";
import { products } from "@/data/product";
import Image from "next/image";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const product = products.find((product) => product.id === Number(id)); // Convert id to a number
  return {
    title: product?.name || "Product not found",
    description: product?.shortDescription || "No description available",
    openGraph: {
      images: product ? [product.image as string] : [],
    },
  };
}

const ProductDetailsPage = ({ params: { id } }: Props) => {
  const product = products.find((product) => product.id === Number(id)); // Convert id to a number

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div className="container">
      <div className="grid gap-14 md:grid-cols-2 space-x-4 justify-between my-12">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
        />
        <div>
          <div className="flex flex-col">
            <h4 className="uppercase text-2xl">{product.name}</h4>
            <span className="divider"></span>
          </div>
          <div>
            <span className="flex items-center mb-4 space-x-4">
              <h2 className="text-2xl">${product.price}</h2>
              <h2>
                {product.countInStock > 0 ? (
                  <span className="bg-green-200 rounded-xl px-2">
                    In Stock ({product.countInStock})
                  </span>
                ) : (
                  <span className="bg-red-200 rounded-xl px-2">
                    Out of Stock
                  </span>
                )}
              </h2>
            </span>
            <p>
              {product.shortDescription || "No detailed description provided."}
            </p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 items-center self-center">
              <div className="flex items-center space-x-2 justify-around md:justify-between">
                <h4 className="font-bold">Quantity</h4>
                <input
                  className="border-2 rounded outline-none w-20 py-2 px-2"
                  type="number"
                  defaultValue={1}
                  min={1}
                  max={product.countInStock}
                />
              </div>
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

export default ProductDetailsPage;
