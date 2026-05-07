import React from "react";
import ButtonCta from "../components/buttonCta";

export default function HumanSection() {
  return (
    <section className="humanSection py-32  pb-0 relative
    after:content-['']
    after:absolute
    after:w-full
    after:h-px
    after:bg-yellow
    after:bottom-25
    after:left-0">
      <div className="w-(--container) mx-auto">
        <div className="shrink-container-2 mx-auto">
          <div className="flex humanSection__parent">
            <div className="w-full humanSection__parent--first flex items-end flex-col">
              <img src="/Send-email-modal.svg" alt="can send email" />
              <img src="/Support-Chat.svg" alt="can send email" />
            </div>
            <div className="flex flex-col items-end humanSection__parent--second mt-20">
              <h2 className="font-serif text-6xl py-2 inline-block  ">
                <span className="block  py-1 text-gradient-span">
                  
                  Humans Say the Wrong Thing.
                </span>
                <span className="block  py-2 text-right text-gradient-span-2">
                  <span className="py-1 inline-block">Agents </span>
                  <span>Will </span>
                  <span>Say </span>
                  <span>It </span>
                  <span>at </span>
                  <span>Scale</span>
                </span>
              </h2>
              <div className="font-manrope font-medium text-lg text-right ml-auto humanSection__parent--second--text">
                <p>“Move fast and break things” is the AI ethos <span className="font-extrabold">–but not yours.</span> Any frontier AI model can write a client email, summarize a regulatory filing, answer a customer question.  The technology works</p>
                <p className="my-5">The issue is none of them know your policies or the facts required to enforce your policies. You could swap in the best model in the world tomorrow and the problem wouldn't move.</p>
              </div>
              <h3 className="text-heading3 font-inter leading-tight font-thin flex flex-col items-end mb-5" >
                <span> This isn’t a model problem.</span>
               <span>It’s a context problem.</span>
              </h3>
              <ButtonCta classBtn={"border-2 !border-black !px-9 !py-[9px]"}>
  <img src="/arrow-btn.svg" alt="Deploy" />
          <p className="ml-2  capitalize text-base">
            What We Do
          </p>
              </ButtonCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
