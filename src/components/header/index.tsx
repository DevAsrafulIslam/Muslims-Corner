"use client";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { DropdownMenubar } from "../dropdownmenu/dropdownmenu";
import { NavMenu } from "../navmenu/navmenu";
import { Mood } from "../mood/mood";

export const Header = () => {
  const { setTheme } = useTheme();
  return (
    <header className="flex justify-between mt-2 animate__animated animate__zoomIn navbar container bg-base-100">
      <DropdownMenubar />
      <a className="text-xl md:text-3xl font-bold">𝘔𝘶𝘴𝘭𝘪𝘮𝘴 𝘊𝘰𝘳𝘯𝘦𝘳</a>
      {/* <a className="text-xl md:text-3xl font-bold">𓆩𝙂𝙞𝙛𝙩𝙡𝙮𓆪</a> */}
      <NavMenu />
      <Mood />
    </header>
  );
};
