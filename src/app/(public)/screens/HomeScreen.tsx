"use client";

import React from "react";
import TopProducts from "./topproducts";
import { useCart, Product } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
// import HeroSection from "./HeroSection";
// import FeaturedCategories from "./FeaturedCategories";
// import TestimonialsSection from "./TestimonialsSection";
// import NewsletterSection from "./NewsletterSection";

const HomeScreen: React.FC = () => {
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
    <div className="min-h-screen">
      {/* Hero Section with animated banner */}
      {/* <HeroSection /> */}
      
      {/* Featured Categories Section */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            <span className="inline-block border-b-2 border-primary pb-2">Explore Categories</span>
          </h2>
          {/* <FeaturedCategories /> */}
        </div>
      </section>
      
      {/* Top Products Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            <span className="inline-block border-b-2 border-primary pb-2">Top Rated Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular Islamic products, carefully selected for quality and authenticity
          </p>
        </div>
        <TopProducts 
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              <span className="inline-block border-b-2 border-primary pb-2">What Our Customers Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied customers
            </p>
          </div>
          {/* <TestimonialsSection /> */}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          {/* <NewsletterSection /> */}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;