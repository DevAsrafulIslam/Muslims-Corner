import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className=" bg-[#081b29] ">
      <nav className="container h-20   text-white flex justify-between items-center gap-3">
        <div className="text-3xl">.asraful</div>
        <div className="flex gap-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
};

// export * from "./menu";
