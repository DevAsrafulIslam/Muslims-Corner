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
import TryOn from "../try-on/page";

const Categories = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter categories based on selectedCategory
  const filteredItems = selectedCategory
    ? categories.filter((item) => item.category === selectedCategory)
    : categories;

  // Calculate total pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Get items for the current page
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1 className="text-3xl text-center mt-4 text-[#00000098]">Categories</h1>

      {/* Category filter dropdown */}
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
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Books">Books</SelectItem>
            <SelectItem value="Wedding Gifts">Wedding Gifts</SelectItem>
            <SelectItem value="Decor">Decor</SelectItem>
            <div className="flex items-center justify-around space-x-2">
              <SelectItem value="Clothing">Clothing</SelectItem>
              <TryOn />
            </div>
            <SelectItem className="text-red-400" value="Gift Package">
              Gift Package
            </SelectItem>
            <SelectItem className="text-red-400" value="Victory Day">
              Victory Day Package
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Display filtered and paginated items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="border border-dashed rounded-md hover:shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.shortDescription}</p>
              <span className="flex justify-between items-center">
                <p className="text-[#9b2d11] font-bold mt-2">৳{item.price}</p>
                <span className="flex space-x-2">
                  <button className="text-white bg-orange-300 p-2 rounded mt-2">
                    Add Cart
                  </button>
                  <button className="text-white bg-slate-600 p-2 rounded mt-2">
                    Buy Now
                  </button>
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {/* Previous Button */}
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )}

        {/* Next Button */}
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Categories;
