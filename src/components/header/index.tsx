"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { DropdownMenubar } from "../dropdownmenu/dropdownmenu";
import { NavMenu } from "../navmenu/navmenu";
import { Mood } from "../mood/mood";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Header = () => {
  const { setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm" 
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile menu */}
        <div className="lg:hidden">
          <DropdownMenubar />
        </div>
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/muslimlogo.png" 
            alt="Muslims Corner" 
            width={50} 
            height={50} 
            className="rounded-md"
          />
          <span className="text-xl font-bold hidden sm:inline-block text-gray-800">Muslims Corner</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavMenu />
        </div>
        
        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Search button */}
          <button className="p-2 rounded-full hover:bg-green-50 transition-colors text-gray-700">
            <Search size={20} />
          </button>
          
          {/* Cart button with counter */}
          <Link href="/checkout" className="p-2 rounded-full hover:bg-green-50 transition-colors relative text-gray-700">
            <ShoppingCart size={20} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
          
          {/* Theme toggle */}
          <Mood />
        </div>
      </div>
    </header>
  );
};
