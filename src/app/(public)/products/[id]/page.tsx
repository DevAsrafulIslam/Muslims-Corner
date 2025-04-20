
"use client";

import { Product, useCart } from "@/context/CartContext";
import { products } from "@/data/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";

const ProductPage = ({ params }: { params: { id: string } }) => {
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

  console.log("Product ID from params:", params.id);

  const product = products.find((p) => p.id === Number(params.id));

  console.log("Found Product:", product);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-around md:flex-row md:items-start md:gap-6">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="max-w-sm md:max-w-md lg:max-w-lg mx-auto w-full h-auto rounded-md mb-4 md:mb-0"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-xl md:text-2xl max-w-md lg:text-xl mt-4">
            {product.shortDescription}
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4">
            ৳{product.price}
          </p>
          <div className="flex space-x-2 mt-4">
            <button
              className="flex-1 bg-white text-primary border border-primary font-medium py-2 px-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 text-sm flex items-center justify-center"
              onClick={() => handleAddToCart(product)}
            >
              <FaCartShopping className="mr-1" />
              Add to Cart
            </button>
            <button
              className="flex-1 bg-primary text-white font-medium py-2 px-3 rounded-md hover:bg-primary/90 transition-colors duration-300 text-sm"
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 my-4 w-11/12 mx-auto">
        {/* Product details can go here */}
      </div>
    </div>
  );
};

export default ProductPage;
