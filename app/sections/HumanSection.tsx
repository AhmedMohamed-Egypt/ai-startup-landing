import React from "react";
import ButtonCta from "../components/buttonCta";

export default function HumanSection() {
  return (
    <section
      className="humanSection py-32  lg:pb-0 relative sm:pb-10 pb-0
    after:content-['']
    after:absolute
    after:w-full
    after:h-px
    after:bg-yellow
    lg:after:bottom-25
    after:bottom-[50px]
    after:left-0"
    >
      <div className="w-(--container) mx-auto">
        <div className="lg:w-[80%] w-[90%] mx-auto">
          <div className="flex humanSection__parent">
            <div className="w-full humanSection__parent--first flex items-end flex-col">
              <img src="/Send-email-modal.svg" alt="can send email" />
              <img src="/Support-Chat.svg" alt="can send email" />
            </div>
            <div className="flex flex-col items-end humanSection__parent--second mt-3 xl:mt-20">
              <h2 className="font-serif py-2 inline-block text-3xl sm:leading-[45px] leading-[32px] xl:leading-normal  sm:text-[36px] md:text-[48px] lg:text-5xl xl:text-6xl">
                <span className="block  py-1 text-gradient-span">
                  Humans Say the Wrong Thing.
                </span>
                <span className="block  py-2 text-right text-gradient-span-2">
                  <span className="py-1 inline-block mr-2">Agents </span>
                  <span>Will </span>
                  <span>Say </span>
                  <span>It </span>
                  <span>at </span>
                  <span>Scale</span>
                </span>
              </h2>
              <div className="text-left sm:text-center humanSection__parent--second--contentTxt font-manrope font-medium text-lg lg:text-right ml-auto lg:w-[70%] w-[80%]">
                <p>
                  “Move fast and break things” is the AI ethos{" "}
                  <span className="font-extrabold">–but not yours.</span> Any
                  frontier AI model can write a client email, summarize a
                  regulatory filing, answer a customer question. The technology
                  works
                </p>
                <p className="my-5">
                  The issue is none of them know your policies or the facts
                  required to enforce your policies. You could swap in the best
                  model in the world tomorrow and the problem wouldn't move.
                </p>
              </div>
              <h3 className="text-heading3 font-inter leading-tight font-thin flex flex-col items-end mb-5">
                <span> This isn’t a model problem.</span>
                <span>It’s a context problem.</span>
              </h3>
              <ButtonCta classBtn={"border-2 !border-black !px-9 !py-[9px]"}>
                <img src="/arrow-btn.svg" alt="Deploy" />
                <p className="ml-2  capitalize text-base">What We Do</p>
              </ButtonCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
