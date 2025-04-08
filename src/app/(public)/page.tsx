import { Header } from "@/components/header";
import Products from "./products/page";
import Carousel from "@/components/carousel/carousel";
import HomeScreen from "./screens/topproducts";

export default function Home() {
  return (
    <div className="  py-2">
      <div className="container mx-auto">
        <Carousel />
        <Products />
        <HomeScreen />
      </div>
    </div>
  );
}
