import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";
import NavbarItems from "./NavbarItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b sticky top-0">
      <div className="wrapper flex items-center justify-between max-w-full">
        <Link href="/" className="w-36 ">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavbarItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
            {/* Hide MobileNav on small devices */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </SignedIn>

          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
