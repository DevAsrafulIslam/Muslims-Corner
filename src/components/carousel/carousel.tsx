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
  //   arrows: true,
  autoplay: true,
};

function Carousel() {
  return (
    <Slider {...settings}>
      <div className="relative h-40 md:h-96">
        <Image src="/images/watch.jpeg" fill className="object-cover" />
        <div className="container flex items-center  absolute top-0 left-0 bg-[#b6b6b465] h-full w-full text-start">
          <div className="md:w-1/2">
            <h4 className="text-xl uppercase md:text-2xl bg-[#f99d2c] w-fit py-2 px-4">
              25% Off
            </h4>
            <h3 className="my-4 animate__animated animate__bounceIn text-2xl md:text-5xl bg-slate-400 md:bg-transparent ">
              Elegant Timepieces and Accessories
            </h3>
            <p className=" hidden md:block">
              Discover our exquisite collection of handcrafted watches and
              accessories, designed to elevate your style.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-40 md:h-96">
        <Image src="/images/flower.jpeg" fill className="object-cover" />
        <div className="container absolute flex items-center top-0 left-0 bg-[#b6b6b465] h-full w-full text-start">
          <div className="md:w-1/2">
            <h4 className="text-xl uppercase md:text-2xl bg-[#f99d2c] w-fit py-2 px-4">
              30% off
            </h4>
            <h3 className="my-4 text-2xl md:text-5xl  bg-slate-400 md:bg-transparent ">
              Tick & Glow{"'"}s Timeless Elegance
            </h3>
            <p className=" hidden md:block">
              Discover our exquisite collection of handcrafted watches and
              accessories, designed to elevate your style.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Carousel;
