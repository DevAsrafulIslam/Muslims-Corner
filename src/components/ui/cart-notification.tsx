"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { Product } from "@/context/CartContext";
import Image from "next/image";

interface CartNotificationProps {
  isVisible: boolean;
  product: Product | null;
  onClose: () => void;
}

export const CartNotification = ({ isVisible, product, onClose }: CartNotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && product && (
        <motion.div 
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black text-white rounded-full shadow-lg overflow-hidden"
          initial={{ y: -100, opacity: 0, width: "60px", height: "60px" }}
          animate={{ y: 0, opacity: 1, width: "auto", height: "auto" }}
          exit={{ y: -100, opacity: 0, width: "60px", height: "60px" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div className="flex items-center p-3 gap-3">
            <div className="bg-primary rounded-full p-2 flex-shrink-0">
              <Check size={20} />
            </div>
            <div className="flex-grow">
              <p className="font-medium">Added to cart</p>
              <p className="text-sm text-gray-300 truncate max-w-[200px]">{product.name}</p>
            </div>
            <div className="flex-shrink-0 ml-2">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="w-12 h-12 rounded-md object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};