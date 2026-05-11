import React from "react";
import ButtonCta from "../components/buttonCta";

export default function PolicyAgents() {
  return (
    <section className="policyAgents pt-62.5 relative   after:content-['']   after:absolute after:top-0      after:bottom-0   after:w-full   after:bg-[url('/Mask-group-tiny.png')]   after:bg-no-repeat        after:-z-10">
      <span></span>
      <div className="w-(--container) mx-auto">
        <h2 className="headingh2 text-center policyAgents--headingh2 ">
          <span className="common-txt-gradient">InPolicy </span>
          <span className="common-txt-gradient">For </span>
          <span className="common-txt-gradient">Agents</span>
        </h2>
        <p className="font-inter text-heading28 font-light leading-tight w-[90%] mx-auto mt-8 text-center">
          AI agents are being deployed to write client communications, respond
          to regulatory inquiries, negotiate terms, and execute workflows at a
          scale no human team could match. Most enterprises are discovering that
          the models are ready — but there's no infrastructure to tell them what
          they're allowed to say. InPolicy for Agents closes that gap.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 font-manrope shrink-container-3 mx-auto pb-62.5">
          <div className=" p-6 pl-0  border-b-[1.5px] border-black pb-6">
            <div className="mb-4">
              <img src="/pen-icon.svg" alt="Icon" className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-medium mb-3 font-manrope">
              Inference-time policy injection
            </h3>

            <p className="text-lg leading-relaxed  font-medium">
              Your policies arrive at the model as a structured context object,
              not raw documents. Relevant, binding, and grounded in your
              real-world business context. Reasoning quality is preserved.
            </p>
          </div>

          <div className=" p-6 pl-0 border-b-[1.5px] border-black pb-6">
            <div className="mb-4">
              <img src="/code-icon.svg" alt="Icon" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium mb-3 font-manrope">
              Any model, any framework
            </h3>
            <p className="text-lg leading-relaxed  font-medium">
              Compatible with OpenAI, Anthropic, and open-source models. Works
              with any agent orchestration layer via REST API or MCP server.
              Drop it into what you're already building.
            </p>
          </div>
          <div className=" p-6 pt-4 pl-0 ">
            <div className="mb-4">
              <img src="/checkmark-icon.svg" alt="Icon" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium mb-3 font-manrope">
              Session-aware enforcement
            </h3>
            <p className="text-lg leading-relaxed  font-medium">
              What's binding depends on what's been said. InPolicy tracks policy
              activation state across conversation turns, so enforcement
              reflects the full session, not just the last message.
            </p>
          </div>
          <div className="p-6 pt-4 pl-0">
            <div className="mb-4">
              <img src="/circle-mark.svg" alt="Icon" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium mb-3 font-manrope">
              Pre- and post-inference checks
            </h3>
            <p className="text-lg leading-relaxed  font-medium">
              Context is injected before inference. Output is validated after.
              Both stages operate at low latency, so policy enforcement doesn't
              become a bottleneck in production agent workflows.
            </p>
          </div>
        </div>
        <div className="pb-25 policyAgents--writePolicies after:z-[100]  relative   after:content-['']   after:absolute after:top-[40px]      after:bottom-0   after:w-[600px]   after:bg-[url('/svgviewer-output.svg')]   after:bg-no-repeat after:right-0   after:bg-position-[0% 50%]   after:h-[500px]   after:-z-10 ">
          <div className="shrink-container mx-auto">
            <div className="w-162">
              <h2 className="font-serif font-normal text-heading68 flex flex-col mb-4">
                <span>Don't just write policies,</span>
                <span>enforce them.</span>
              </h2>
              <h6 className="font-inter font-light text-heading28 mb-6 leading-tight">
                InPolicy is for the lawyers, the marketing team, compliance
                leaders, anyone on the hook for making sure people and agents
                say
                <b className="font-extrabold block">
                  the right thing, at the right time, the right way.
                </b>
              </h6>
              <h5 className="font-manrope font-medium text-xl">
                We’re building the infrastructure that gives AI agents the
                context to act responsibly inside a real business. Your
                policies, your regulatory environment, your risk posture,
                available at inference time, enforced in real time.
              </h5>
              <ButtonCta classBtn="!border-2 !border-black !px-9 !py-[9px] mt-10 ">
                <img src="/arrow-btn.svg" alt="Deploy" />
                <p className="ml-2  capitalize   first-letter:capitalize text-base">
                  Get started on InPolicy
                </p>
              </ButtonCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
