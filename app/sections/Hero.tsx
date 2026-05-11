"use client";
import ButtonCta from "../components/buttonCta";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className="h-screen bg-cover   herosection   relative

    after:content-['']
    after:absolute
    after:bottom-0
    after:left-0
    after:z-[-1]
    after:w-full
    after:h-[100px]

    

    after:rounded-bl-[15px]
    after:rounded-br-[15px]"
      style={{ backgroundImage: "url('/Hero-section-bg-cropped.png')" }}
    >
      <div
        className={` overflow-hidden bg-black text-white  fixed top-0 left-0 w-full z-50 transition-all duration-300

        ${scrolled ? "bg-black backdrop-blur-md z-[999] shadow-lg" : ""}`}
      >
        <Navbar />
      </div>
      <div className="flex flex-col justify-center  lg:h-[91%] h-full">
        <div className="w-(--container) mx-auto ">
          <div className="lg:pl-20 w-[90%] mx-auto lg:w-auto lg:mx-0">
            <h1 className="mb-5">
              <span className="block text-white">The policy layer for</span>
              <span className="block text-gradient-span common-txt-gradient">
                humans and AI
              </span>
            </h1>
            <div className="font-manrope text-white font-normal lg:font-medium md:text-lg text-lg lg:text-xl max-w-(--content-hero-width) ">
              <p className="mb-7">
                It’s not enough to have policies– you have to be able to enforce
                them. InPolicy sits between your employees, their AI agents, and
                the world — enforcing your policies in real time across human
                and agentic communications.{" "}
              </p>
              <p className="mb-6">
                We're solving the hardest problems in context engineering that
                currently block widespread adoption of agentic AI for
                enterprise.
              </p>
              <div className="pesdu-element relative inline-block">
                <ButtonCta classBtn="px-8 !border-none bg-black relative z-10">
                  <img src="/thinsmooth.svg" alt="Deploy" />
                  <p className="ml-2 lowercase text-base font-mono font-normal first-letter:uppercase">
                    Let's dive into it
                  </p>
                </ButtonCta>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
