import React from "react";

export default function Footer() {
  return (
    <section className="inpolicy_footer bg-black pt-20 overflow-hidden">
      <div className="w-(--container) mx-auto px-10 relative z-50">
        <div className="flex justify-between pb-10">
          <div className="inpolicy_footer--leftside w-[440px]">
            <img width="125" height="42" src="/Logo.svg" alt="logo" />
            <p className="font-inter text-grey mt-6">
              InPolicy turns your policies into active, real-time guardrails. It
              uses AI to check what employees write in email and chat, instantly
              flags violations, explains the issue, and provides a one-click
              fix. Browser extension + Google docs agent.
            </p>
          </div>
          <div className="flex inpolicy_footer--rightside ">
            <div>
              <h3 className="">Legal</h3>
              <ul>
                <li>
                  <a href="#" className="">
                    [Link]
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    [Link]
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    [Link]
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    [Link]
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    [Link]
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    [Link]
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-20">
              <h3 className="">Pages</h3>
              <ul>
                <li>
                  <a href="#" className="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="">Useful</h3>
              <ul>
                <li>
                  <a href="#" className="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Terms of Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between inpolicy_footer--bottomside border border-drkgreen border-r-0 border-l-0 py-6">
            <div>
                <ul className="flex items-center">
                    <li><a href="#" className="mb-0">Terms</a></li>
                    <li className="ml-6 "><a className="mb-0" href="#">Privacy</a></li>
                </ul>
            </div>
            <p className="font-inter text-[14px] text-grey">© InPolicy LLC 2026 All rights reserved.</p>
        </div>
      </div>
      <p className="font-inter font-medium text-[470px] inpolicy_footer--bigText text-center">
        <span className="common-txt-gradient">In</span>
        <span className="common-txt-gradient">Policy</span>
      </p>
    </section>
  );
}
