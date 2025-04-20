"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

const OrderConfirmation = () => {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generate a random order number
    setOrderNumber(Math.floor(100000 + Math.random() * 900000).toString());
  }, []);

  return (
    <div className="container py-16">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4">
          <Image 
            src="/logo/muslimlogo.png" 
            alt="Muslims Corner Logo" 
            width={100} 
            height={100} 
            className="rounded-md"
          />
        </div>
        
        <div className="text-green-500 flex justify-center mb-4">
          <FiCheckCircle size={64} />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <p className="text-gray-700 mb-1">
            Order Number: <span className="font-bold">#{orderNumber}</span>
          </p>
          <p className="text-gray-600 text-sm">
            A confirmation email has been sent to your email address.
          </p>
        </div>
        
        <div className="flex flex-col space-y-3">
          <Link 
            href="/products" 
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </Link>
          
          <button 
            onClick={() => router.push}
            className="bg-white text-primary border border-primary py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
          >
            View Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;