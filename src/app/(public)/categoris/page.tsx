"use client";

import { categories } from "@/data/categories";
import React, { useState } from "react";

const Categories = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle category click and set the selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter categories based on selectedCategory
  const filteredItems = selectedCategory
    ? categories.filter((item) => item.category === selectedCategory)
    : categories;

  return (
    <div className="my-4">
      <h1 className="text-3xl text-center mt-4 text-[#00000098]">Categories</h1>

      {/* Category filter buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center gap-4 my-4">
        {[
          "Books",
          "Wedding Gifts",
          "Decor",
          "Clothing",
          "Home & Kitchen",
          "Cosmetics",
        ].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="px-4 py-2 border rounded-md text-white bg-gray-600 hover:bg-gray-700"
          >
            {category}
          </button>
        ))}

        {/* Reset button to show all categories */}
        <button
          onClick={() => setSelectedCategory(null)} // Reset filter
          className="px-4 py-2 border rounded-md text-white bg-gray-600 hover:bg-gray-700"
        >
          All Categories
        </button>
      </div>

      {/* Display filtered items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border border-dashed rounded-md hover:shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <div className="px-4 pb-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.shortDescription}</p>
              <span className="flex justify-between items-center">
                <p className="text-[#9b2d11] font-bold mt-2">৳{item.price}</p>
                <button className="text-white bg-slate-600 p-2 rounded mt-2">
                  Buy Now
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
