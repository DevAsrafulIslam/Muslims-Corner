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
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredItems = selectedCategory
    ? categories.filter((item) => item.category === selectedCategory)
    : categories;

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mb-4">
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

      {/* Conditionally render TryOn */}
      {selectedCategory === "Clothing" && <TryOn />}

      {/* Display filtered and paginated items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((item) => (
          <div
          className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden group"
          key={item.id}
        >
          <Link
            href={{ pathname: `/products/${item.id}` }}
            className="relative block overflow-hidden"
          >
            <div className="absolute top-2 right-2 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
              Top Rated
            </div>
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={400}
              className="w-full h-52 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-col flex-1 p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{item.shortDescription}</p>
            <div className="flex items-center mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">(25 reviews)</span>
            </div>
            <div className="mt-auto">
              <div className="flex justify-between items-center mb-3">
                <p className="text-primary font-bold">
                  ৳<span className="text-2xl">{item.price}</span>
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="flex-1 bg-white text-primary border border-primary font-medium py-2 px-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 text-sm flex items-center justify-center"
                  // onClick={() =>handleAddToCart(topproduct)}
                >
                  <FaCartShopping className="mr-1" />
                  Add to Cart
                </button>
                <button
                  className="flex-1 bg-primary text-white font-medium py-2 px-3 rounded-md hover:bg-primary/90 transition-colors duration-300 text-sm"
                  // onClick={() => handleBuyNow(topproduct)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
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