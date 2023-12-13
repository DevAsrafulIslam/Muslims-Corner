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
        <MenubarTrigger>
          <Link href="/">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/about">About</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/login">Login</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/register">Register</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
