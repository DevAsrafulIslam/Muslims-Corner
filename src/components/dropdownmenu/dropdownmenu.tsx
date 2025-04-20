"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export function DropdownMenubar() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="container w-20 mx-0 md:hidden grid"
          variant="outline"
        >
          <FaBarsStaggered />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link href="/">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href="/menu">
            <DropdownMenuItem>Menu</DropdownMenuItem>
          </Link>
          <Link href="/about">
            <DropdownMenuItem>About</DropdownMenuItem>
          </Link>
          <Link href="/checkout">
            <DropdownMenuItem>Checkout</DropdownMenuItem>
          </Link>
          <Link href="/login">
            <DropdownMenuItem>Login</DropdownMenuItem>
          </Link>
          <Link href="/register">
            <DropdownMenuItem>Register</DropdownMenuItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
