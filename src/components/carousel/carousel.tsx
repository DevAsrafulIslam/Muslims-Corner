"use client";
import Image from "next/image";
import React, { Component } from "react";
import Slider, { Settings } from "react-slick";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  fade: true,
};

function Carousel() {
  return (
    <Slider {...settings}>
      <div className="relative w-full h-40 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1584286595398-a8c264b1dea4?q=80&w=1350&auto=format&fit=crop"
          width={1350}
          height={0}
          alt="Premium Prayer Beads"
          className="object-cover"
        />
        <div className="container flex items-center absolute top-0 left-0 bg-gradient-to-r from-black/70 to-transparent h-full w-full text-start">
          <div className="md:w-1/2 p-6 text-white">
            <h4 className="text-xl uppercase md:text-2xl bg-green-600 w-fit py-2 px-4 rounded-sm font-medium">
              New Collection
            </h4>
            <h3 className="my-4 animate__animated animate__bounceIn text-2xl md:text-5xl font-bold drop-shadow-lg">
              Handcrafted Prayer Beads
            </h3>
            <p className="hidden md:block text-lg">
              Discover our exquisite collection of handcrafted prayer beads, designed to enhance your spiritual journey.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-40 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1350&auto=format&fit=crop"
          width={1350}
          height={0}
          alt="Premium Prayer Beads"
          className="object-cover"
        />
        <div className="container absolute flex items-center top-0 left-0 bg-gradient-to-r from-black/70 to-transparent h-full w-full text-start">
          <div className="md:w-1/2 p-6 text-white">
            <h4 className="text-xl uppercase md:text-2xl bg-green-600 w-fit py-2 px-4 rounded-sm font-medium">
              30% off
            </h4>
            <h3 className="my-4 text-2xl md:text-5xl font-bold drop-shadow-lg">
              Premium Islamic Attire
            </h3>
            <p className="hidden md:block text-lg">
              Elevate your wardrobe with our premium collection of modest and elegant Islamic clothing.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-40 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1350&auto=format&fit=crop"
          width={1350}
          height={0}
          alt="Sacred Quran Collection"
          className="object-cover"
        />
        <div className="container absolute flex items-center top-0 left-0 bg-gradient-to-r from-black/70 to-transparent h-full w-full text-start">
          <div className="md:w-1/2 p-6 text-white">
            <h4 className="text-xl uppercase md:text-2xl bg-green-600 w-fit py-2 px-4 rounded-sm font-medium">
              Featured
            </h4>
            <h3 className="my-4 text-2xl md:text-5xl font-bold drop-shadow-lg">
              Sacred Quran Collection
            </h3>
            <p className="hidden md:block text-lg">
              Explore our beautifully crafted Quran collection, perfect for study and reflection.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Carousel;
