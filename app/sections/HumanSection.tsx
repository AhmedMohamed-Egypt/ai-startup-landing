import React from "react";

export default function HumanSection() {
  return (
    <section className="humanSection py-14">
      <div className="w-(--container) mx-auto">
        <div className="shrink-container-2 mx-auto">
          <div className="flex ">
            <div>
              <img src="/Send-email-modal.svg" alt="can send email" />
              <img src="/Support-Chat.svg" alt="can send email" />
            </div>
            <div>
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
              <div className="font-manrope font-medium text-lg">
                <p>“Move fast and break things” is the AI ethos <span className="font-extrabold">–but not yours.</span> Any frontier AI model can write a client email, summarize a regulatory filing, answer a customer question.  The technology works</p>
                <p>The issue is none of them know your policies or the facts required to enforce your policies. You could swap in the best model in the world tomorrow and the problem wouldn't move.</p>
              </div>
              <h3 className="text-[40px]" >
                This isn’t a model problem. It’s a context problem.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
