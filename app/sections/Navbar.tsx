// app/sections/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonCta from "../components/buttonCta";
import { useState } from "react";
export default function Navbar() {
 
    const pathname = usePathname();
    const [open,setOpen] = useState(false)
    
    
  return (
    <div className="w-(--container) mx-auto max-w-full">
    <div className="top-0 left-0 w-full z-20 lg:px-8 px-4 py-4">
      <div className={`flex items-center ${open?'flex-wrap':'flex-nowrap'}`}>
        <div className="mr-auto">
          <img   width={125} height={"42"} src="/Logo.svg" alt="logo"  />
        </div>
<div  className={`flex items-center ${open?'w-full order-3':''}`}>
  
          <ul className={`hidden   text-base items-center lg:hidden xl:flex ${open?'p-[40px] flex! flex-col items-start w-full gap-8':'gap-15'}`}>
      
     <li> <Link
        href="/"
        className={`${
          pathname === "/" ? "text-white font-bold" : ""
        }`}
      >
        Home
      </Link></li>

     <li>
       <Link
        href="/product"
        className={`${
          pathname === "/product" ? "text-white" : "font-normal"
        }`}
      >
        Product
      </Link>
     </li>

   <li>
       <Link
        href="/faq"
        className={`${
          pathname === "/faq" ? "text-white" : "font-normal"
        }`}
      >
        FAQs
      </Link>
   </li>

     <li>
       <Link
        href="/pricing"
        className={`${
          pathname === "/pricing" ? "text-white" : "font-normal"
        }`}
      >
        Pricing
      </Link>
     </li>
     <li>
           <ButtonCta classBtn={` !py-[7px] ${open?'ml-0':'ml-16'}`}>
           <img src="/thinsmooth.svg" alt="Deploy" />
          <p className="ml-2">
            Deploy InPolicy
          </p>
        </ButtonCta>
     </li>

    </ul>

   
</div>
    <div onClick={()=>setOpen((op)=>!op)} className={`${open?'showmenu':''} hamburgMenu lg:block xl:hidden`}> <span> </span><span> </span><span></span></div>


      </div>
    </div>
    </div>
  );
}