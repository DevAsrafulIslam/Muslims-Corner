"use client";
import React, { createContext, useContext, useState } from "react";
import { CartNotification } from "@/components/ui/cart-notification";
import { Product } from "@/context/CartContext";

interface NotificationContextType {
  showCartNotification: (product: Product) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const showCartNotification = (product: Product) => {
    setCurrentProduct(product);
    setIsVisible(true);
  };

  const hideNotification = () => {
    setIsVisible(false);
  };

  return (
    <NotificationContext.Provider value={{ showCartNotification }}>
      {children}
      <CartNotification 
        isVisible={isVisible} 
        product={currentProduct} 
        onClose={hideNotification} 
      />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};