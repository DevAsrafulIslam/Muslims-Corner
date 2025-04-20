"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function NavMenu() {
  const pathname = usePathname();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-2">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.path;
        return (
          <Link 
            href={item.path} 
            key={item.name}
            className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              isActive 
                ? "bg-green-600 text-white" 
                : "hover:bg-green-50 text-gray-700 dark:text-gray-300"
            }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <span className="relative z-10">
              {item.name}
            </span>
            {!isActive && hoverIndex === index && (
              <motion.span 
                className="absolute inset-0 bg-green-50 dark:bg-green-900/20 rounded-md z-0"
                layoutId="hoverNavItem"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
