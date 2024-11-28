import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DropdownMenu } from "../ui/dropdown-menu";
import Link from "next/link";

export function NavMenu() {
  return (
    <Menubar className="border-none md:flex hidden">
      <DropdownMenu />
      <MenubarMenu>
        <Link href="/">
          <MenubarTrigger>Home</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/menu">
          <MenubarTrigger>Menu</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/about">
          <MenubarTrigger>About</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/recycle">
          <MenubarTrigger>Recycle</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/login">
          <MenubarTrigger>Login</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/register">
          <MenubarTrigger>Register</MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
