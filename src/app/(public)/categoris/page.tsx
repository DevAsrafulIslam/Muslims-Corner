"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/data/categories";
import React, { useState } from "react";

const Categories = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Function to handle category click and set the selected category
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter categories based on selectedCategory
  const filteredItems = selectedCategory
    ? categories.filter((item) => item.category === selectedCategory)
    : categories;

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mt-4 text-[#00000098]">Categories</h1>

      {/* Category filter buttons */}
      {/* Select dropdown for categories */}
      <div className="my-4 max-w-sm mx-auto">
        <Select
          onValueChange={(value) =>
            setSelectedCategory(value === "all" ? null : value)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Books">Books</SelectItem>
            <SelectItem value="Wedding Gifts">Wedding Gifts</SelectItem>
            <SelectItem value="Decor">Decor</SelectItem>
            <SelectItem value="Clothing">Clothing</SelectItem>
            <SelectItem value="all">All Categories</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Display filtered items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border border-dashed rounded-md p-4 hover:shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-500">{item.shortDescription}</p>
            <span className="flex justify-between items-center">
              <p className="text-[#9b2d11] font-bold mt-2">৳{item.price}</p>
              <button className="text-white bg-slate-600 p-2 rounded mt-2">
                Buy Now
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
