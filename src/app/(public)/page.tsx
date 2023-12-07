import { Header } from "@/components/header";
import Image from "next/image";
import Products from "./products/page";

export default function Home() {
  return (
    <div className="bg-[#f3f4f6]  py-8">
      <div className="container mx-auto">
        <div className="carousel container mx-auto flex text-black  w-full mx-w-96">
          <div
            id="item1"
            className="container mx-auto carousel-item w-full  relative h-96"
          >
            <Image
              src="/images/flower.jpeg"
              fill
              className="object-cover"
              alt="Picture of the author"
            />
            <div className="  text-[#00000098] absolute w-full md:w-1/2 text-center md:text-start self-center">
              <h3 className="text-4xl mx-auto md:items-start md:w-fit sm:text-2xl uppercase  px-4 py-2 bg-[#fde047]">
                25% off
              </h3>
              <h3 className="text-2xl md:text-5xl bg-slate-300 md:bg-inherit mx-auto  w-fit px-4 py-8  my-4">
                Tick & Glow's Timeless Elegance
              </h3>
              <p className="hidden md:block">
                Elevate your surroundings with the timeless elegance of our wall
                clocks, each tick matched with the warm glow of our stylish
                lamps.Elevate your surroundings with the timeless elegance of
                our wall clocks, each tick matched with the warm glow of our
                stylish lamps.
              </p>
              <button className="px-8 py-4 mt-4 bg-[#f58e2c]">Shop Now</button>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full relative h-96">
            <Image
              src="/images/watch.jpeg"
              fill
              className="object-cover"
              alt="Picture of the author"
            />
            <div className=" container text-[#00000098] absolute w-5/12   self-center">
              <h3 className="text-4xl uppercase w-fit px-1 py-1 bg-[#fde047]">
                30% off
              </h3>
              <h3 className="text-5xl my-4">
                Elegant Timepieces and Accessories
              </h3>
              <p>
                Elevate your surroundings with the timeless elegance of our wall
                clocks, each tick matched with the warm glow of our stylish
                lamps.Elevate your surroundings with the timeless elegance of
                our wall clocks, each tick matched with the warm glow of our
                stylish lamps.
              </p>
              <button className="px-8 py-4 mt-4 bg-[#f58e2c]">Shop Now</button>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div> */}
        <Products />
      </div>
    </div>
  );
}
