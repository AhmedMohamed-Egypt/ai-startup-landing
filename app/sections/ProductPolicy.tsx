import React from "react";
import ButtonCta from "../components/buttonCta";

export default function ProductPolicy() {
  return (
    <>
      <section
        className="product-policy    relative
    after:content-['']
    after:absolute
    
    after:bottom-0
    after:w-full
    after:bg-[url('/validated_svg.svg')]
    after:bg-no-repeat
    after:bg-position-[0% 50%]
    after:h-347.5
    after:-z-10
    "
      >
        <div className="w-(--container) mx-auto relative z-50">
          <div className="product-policy__rightside ml-auto ">
            <div className="product-policy__rightside--colOne ml-auto flex flex-col items-center">
              <h2 className="headingh2 product-policy__headingh2 mb-5">
                <p className="text-center">
                  <span className="common-txt-gradient inline-block">Two</span>
                  <span className="common-txt-gradient inline-block">
                    Products.
                  </span>
                </p>
                <p>
                  <span className="common-txt-gradient inline-block">
                   
                    One
                  </span>
                  <span className="common-txt-gradient inline-block py-2">
                    Policy
                  </span>
                  <span className="common-txt-gradient inline-block py-2">
                    Layer.
                  </span>
                </p>
              </h2>
              <h4 className="font-mono font-light text-2xl mb-2">
                InPolicy For Humans
              </h4>
              <h5 className="font-manrope font-normal text-lg mb-5 product-policy__rightside--h5 text-center">
                Real-time policy enforcement at the moment of communication,
                before anything is sent.
                <b className="block font-extrabold">
                  Like spell-check but for policies.
                </b>
              </h5>
              <h4 className="font-mono font-light text-2xl mb-2">
                InPolicy for Agents
              </h4>
              <h5 className="font-manrope font-normal text-lg mb-5 product-policy__rightside--h5 text-center">
                The same policy infrastructure your people operate under,{" "}
                <b className="font-extrabold">
                  extended to everyAI agent in your organization.
                </b>
              </h5>
              <ButtonCta
                classBtn={"mx-auto !border-[2.4px] !border-black !px-8 !py-[9px] mt-6"}
              >
                <img src="/arrow-btn.svg" alt="HowItWork" />
                <p className="ml-2 text-base capitalize">How It Works</p>
              </ButtonCta>
            </div>
            <div className="px-15">
                <div className="product-policy__rightside--colTwo ml-auto text-right mt-50">
              <h2 className="headingh2 mb-8">
                <span className="common-txt-gradient">InPolicy </span>
                <span className="common-txt-gradient"> For </span>
                <span className="common-txt-gradient">Humans</span>
              </h2>
              <h6 className="font-inter font-light leading-tight text-heading28 ">
                Nobody wants to feel spied on. InPolicy is designed to be a
                helpful coach, not a snitch. InPolicy for Humans keeps users
                compliant before they press “send. How do we do this?
              </h6>
            </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
     
    </>
  );
}
