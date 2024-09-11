"use client";
import { headerLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarItems = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col md:flex-row md:items-center sm:gap-3 text-left">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.label}
            className={`${
              isActive ? "text-gray-900 font-bold" : ""
            } flex justify-start md:justify-center py-2 md:py-0 pr-8 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarItems;
