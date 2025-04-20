"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import { motion } from "framer-motion";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const updatedSettings = {
    ...settings,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
    },
  };

  return (
    <Slider {...updatedSettings}>
      <div className="relative w-full h-40 md:h-96">
        <Image
          src="/images/watch.jpeg"
          width={1350}
          height={0}
          alt=""
          className="object-cover"
        />
        <div className="container flex items-center absolute top-0 left-0 bg-[#b6b6b465] h-full w-full text-start">
          <motion.div 
            className="md:w-1/2 p-4"
            initial={{ opacity: 0, x: -50 }}
            animate={currentSlide === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h4 
              className="text-xl uppercase md:text-2xl bg-[#f99d2c] w-fit py-2 px-4"
              initial={{ y: -20, opacity: 0 }}
              animate={currentSlide === 0 ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              25% Off
            </motion.h4>
            <motion.h3 
              className="my-4 text-2xl md:text-5xl bg-slate-400 md:bg-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={currentSlide === 0 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Elegant Timepieces and Accessories
            </motion.h3>
            <motion.p 
              className="hidden md:block"
              initial={{ y: 20, opacity: 0 }}
              animate={currentSlide === 0 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover our exquisite collection of handcrafted watches and
              accessories, designed to elevate your style.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="relative w-full h-40 md:h-96">
        <Image
          src="/images/flower.jpeg"
          width={1350}
          height={0}
          alt=""
          className="object-cover"
        />
        <div className="container absolute flex items-center top-0 left-0 bg-[#b6b6b465] h-full w-full text-start">
          <motion.div 
            className="md:w-1/2 p-4"
            initial={{ opacity: 0, x: -50 }}
            animate={currentSlide === 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h4 
              className="text-xl uppercase md:text-2xl bg-[#f99d2c] w-fit py-2 px-4"
              initial={{ y: -20, opacity: 0 }}
              animate={currentSlide === 1 ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              30% off
            </motion.h4>
            <motion.h3 
              className="my-4 text-2xl md:text-5xl bg-slate-400 md:bg-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={currentSlide === 1 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Tick & Glow{"'"}s Timeless Elegance
            </motion.h3>
            <motion.p 
              className="hidden md:block"
              initial={{ y: 20, opacity: 0 }}
              animate={currentSlide === 1 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover our exquisite collection of handcrafted watches and
              accessories, designed to elevate your style.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="relative w-full h-40 md:h-96">
        <Image
          src="/images/anafiyabook.webp"
          width={1350}
          height={500}
          alt="Islamic Books"
          className="object-cover w-full h-full"
          priority
        />
        <div className="container absolute flex items-center top-0 left-0 bg-[#b6b6b465] h-full w-full text-start">
          <motion.div 
            className="md:w-1/2 p-4"
            initial={{ opacity: 0, x: -50 }}
            animate={currentSlide === 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h4 
              className="text-xl uppercase md:text-2xl bg-[#f99d2c] w-fit py-2 px-4"
              initial={{ y: -20, opacity: 0 }}
              animate={currentSlide === 2 ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              New Arrival
            </motion.h4>
            <motion.h3 
              className="my-4 text-2xl md:text-5xl bg-slate-400 md:bg-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={currentSlide === 2 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Islamic Knowledge Collection
            </motion.h3>
            <motion.p 
              className="hidden md:block"
              initial={{ y: 20, opacity: 0 }}
              animate={currentSlide === 2 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore our comprehensive collection of Islamic books and literature to deepen your understanding of faith.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Slider>
  );
}

export default Carousel;
