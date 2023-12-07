import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="border-b bg-white text-[#00000098]">
      <nav className="container h-20  flex justify-between items-center gap-3">
        <div className="text-3xl font-mono">
          <Image
            className=""
            src="/logo/aafiyah-logo.svg"
            width={200}
            height={200}
            alt="LoGo"
          />
        </div>
        <div className="flex font-semibold gap-6 text-lg">
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
