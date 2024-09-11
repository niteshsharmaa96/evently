import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import { Separator } from "../separator";
import NavbarItems from "./NavbarItems";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="align-middle">
        <Image src="/assets/icons/menu.svg" alt="menu" width={24} height={24} />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={128}
          height={38}
        />
        <Separator className="border border-gray-50" />
        <NavbarItems />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
