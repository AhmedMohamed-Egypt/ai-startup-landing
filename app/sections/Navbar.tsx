// app/sections/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonCta from "../components/buttonCta";
export default function Navbar() {
    const pathname = usePathname();
  return (
    <div className="w-(--container) mx-auto">
    <div className="top-0 left-0 w-full z-20 px-6 py-4">
      <div className="flex items-center">
        <div className="mr-auto">
          <img   width={125} height={"42"} src="/Logo.svg" alt="logo"  />
        </div>
<div  className="flex items-center">
  
          <div className="flex gap-15  text-base">
      
      <Link
        href="/"
        className={`${
          pathname === "/" ? "text-white font-bold" : ""
        }`}
      >
        Home
      </Link>

      <Link
        href="/product"
        className={`${
          pathname === "/product" ? "text-white" : "font-normal"
        }`}
      >
        Product
      </Link>

      <Link
        href="/faq"
        className={`${
          pathname === "/faq" ? "text-white" : "font-normal"
        }`}
      >
        FAQs
      </Link>

      <Link
        href="/pricing"
        className={`${
          pathname === "/pricing" ? "text-white" : "font-normal"
        }`}
      >
        Pricing
      </Link>

    </div>

        <ButtonCta classBtn="ml-16 !py-[7px]">
           <img src="/thinsmooth.svg" alt="Deploy" />
          <p className="ml-2">
            Deploy InPolicy
          </p>
        </ButtonCta>
</div>

      </div>
    </div>
    </div>
  );
}