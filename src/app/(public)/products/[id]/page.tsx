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
  const product = products.find((product) => product.id === id);
  return {
    title: product?.name,
    description: product?.description,
    openGraph: {
      images: [product?.image as string],
    },
  };
}

const ProductDetailsPage = ({ params: { id } }: Props) => {
  const product = products.find((product) => product.id === id);

  if (!product) {
    return "Product not found";
  }

  return (
    <div className="container ">
      <div className="grid gap-14 md:grid-cols-2 space-x-4 justify-between my-12">
        {/* <button>Go Home</button> */}
        <Image src={product?.image} alt="" width={500} height={500} />
        <div>
          <div className="flex flex-col ">
            <h4 className="uppercase text-2xl">{product.name}</h4>
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
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2  mt-5 items-center self-center">
              <div className="flex items-center space-x-2 justify-around md:justify-between ">
                <h4 className="font-bold">Quantity</h4>
                <input
                  className="border-2  rounded outline-none w-20 py-2 px-2"
                  type="number"
                  name=""
                  id=""
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
