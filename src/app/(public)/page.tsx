import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto bg-[#081b29]  text-white grid grid-cols-1 items-center  md:grid-cols-2 gap-8">
      <Image
        className=" rounded-full border-2 border-[#00abf0]"
        src="/images/asraful.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <div>
        <h3 className="text-3xl">
          About <span className="text-[#00abf0]">Me</span>
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          necessitatibus consectetur nulla alias voluptas culpa, facilis
          mollitia impedit recusandae amet.
        </p>
      </div>
    </div>
  );
}
