import React from "react";

export default function Footer() {
  return (
   <section className="inpolicy_footer bg-black pt-16 md:pt-20 overflow-hidden">
  <div className="w-(--container) mx-auto px-6 md:px-10 relative z-50">
    
    {/* TOP */}
    <div className="flex flex-col lg:flex-row lg:justify-between gap-14 pb-14">
      
      {/* LEFT */}
      <div className="w-full max-w-[440px]">
        <img width="125" height="42" src="/Logo.svg" alt="logo" />

        <p className="font-inter text-grey mt-6 text-[16px] leading-relaxed">
          InPolicy turns your policies into active, real-time guardrails. It
          uses AI to check what employees write in email and chat, instantly
          flags violations, explains the issue, and provides a one-click
          fix. Browser extension + Google docs agent.
        </p>
      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-20">
        
        {/* COL */}
        <div>
          <h3 className="text-white font-medium mb-5">
            Legal
          </h3>

          <ul className="space-y-3">
            <li><a href="#" className="text-grey">[Link]</a></li>
            <li><a href="#" className="text-grey">[Link]</a></li>
            <li><a href="#" className="text-grey">[Link]</a></li>
            <li><a href="#" className="text-grey">[Link]</a></li>
            <li><a href="#" className="text-grey">[Link]</a></li>
            <li><a href="#" className="text-grey">[Link]</a></li>
          </ul>
        </div>

        {/* COL */}
        <div>
          <h3 className="text-white font-medium mb-5">
            Pages
          </h3>

          <ul className="space-y-3">
            <li><a href="#" className="text-grey">Home</a></li>
            <li><a href="#" className="text-grey">How it Works</a></li>
            <li><a href="#" className="text-grey">Pricing</a></li>
            <li><a href="#" className="text-grey">FAQ</a></li>
          </ul>
        </div>

        {/* COL */}
        <div>
          <h3 className="text-white font-medium mb-5">
            Useful
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="text-grey">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-grey">
                Terms of Services
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    {/* BOTTOM */}
    <div
      className="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between

        gap-5

        border
        border-drkgreen
        border-r-0
        border-l-0

        py-6
      "
    >
      
      <ul className="flex items-center gap-6">
        <li>
          <a href="#" className="mb-0 text-grey">
            Terms
          </a>
        </li>

        <li>
          <a href="#" className="mb-0 text-grey">
            Privacy
          </a>
        </li>
      </ul>

      <p className="font-inter text-[14px] text-grey">
        © InPolicy LLC 2026 All rights reserved.
      </p>
    </div>
  </div>

  {/* BIG TEXT */}
  <p
    className="inpolicy_footer--bigText
      font-inter
      font-medium
      text-center
      lg:text-[350px]
      xl:text-[470px]
      md:text-[250px]
      md:!tracking-[-20px]
      lg:mt-10
      tracking-normal
      lg:h-[300px]
      h-auto
      text-[50px]
      lg:-translate-x-[40px]
    lg:-translate-y-[100px]
      md:-translate-x-[23px]
    md:-translate-y-[0px]
    "
  >
    <span className="common-txt-gradient">In</span>
    <span className="common-txt-gradient">Policy</span>
  </p>
</section>
  );
}
