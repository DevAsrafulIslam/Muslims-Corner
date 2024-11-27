import { SuggestedProductsPage } from "@/components/suggetion/page";
import { products } from "@/data/product";

const ProductPage = ({ params }: { params: { id: string } }) => {
  console.log("Product ID from params:", params.id); // params.id লগ করুন

  const product = products.find((p) => p.id === Number(params.id));

  console.log("Found Product:", product); // পণ্যটি সঠিকভাবে পাওয়া যাচ্ছে কিনা তা লগ করুন

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-around md:flex-row md:items-start md:gap-6">
        <div>
          <img
            src={product.image}
            alt={product.name}
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
          <div className="flex space-x-2 my-4">
            <button className="text-white bg-orange-300 px-4 py-2 rounded">
              Add Cart
            </button>
            <button className="text-white bg-slate-600 px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 my-4 w-11/12 mx-auto">
        <SuggestedProductsPage />
      </div>
    </div>
  );
};

export default ProductPage;
