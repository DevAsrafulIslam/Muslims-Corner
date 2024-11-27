import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/data/product";
import Link from "next/link";

export function SuggestedProductsPage() {
  return (
    <Carousel className="container mx-auto">
      <h1 className="mt-8">Suggested Products</h1>
      <CarouselContent className="flex">
        {products.slice(0, 30).map((product) => (
          <CarouselItem
            key={product.id}
            className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/8"
          >
            <div className="p-1">
              <Card className="max-w-[150px]">
                <CardContent className="flex flex-col items-center justify-center p-2">
                  <Link
                    href={{ pathname: `/products/${product.id}` }}
                    className="relative block"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-24 object-cover rounded-md mb-2"
                    />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default SuggestedProductsPage;
