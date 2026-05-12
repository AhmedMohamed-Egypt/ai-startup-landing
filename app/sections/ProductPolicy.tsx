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
    xl:after:w-full
    after:md:w-[55%]
    after:lg:w-[60%]
    after:bg-[url('/validated_svg.svg')]
    after:bg-no-repeat
    after:bg-position-[0% 50%]
    after:h-347.5
    after:-z-10
    after:bg-contain
    after:translate-y-[100px]
    lg:after:translate-y-[0px]
    after:hidden
    after:md:block
    "
      >
        <div className="xl:w-(--container) max-w-full w-[90%] md:w-full mx-auto relative z-50">
          <div className="product-policy__rightside ml-auto ">
            <div className="product-policy__rightside--colOne1 max-w-full md:max-w-[550px] xl:max-w-[650px] ml-auto flex flex-col items-center md:items-end pr-[0] md:pr-[50px] lg:pr-[0] lg:items-center">
              <h2 className="headingh2 product-policy__headingh2 mb-5">
                <p className="text-center">
                  <span className="common-txt-gradient inline-block mr-2">Two</span>
                  <span className="common-txt-gradient inline-block">
                    Products.
                  </span>
                </p>
                <p>
                  <span className="common-txt-gradient inline-block mr-2">
                   
                    One
                  </span>
                  <span className="common-txt-gradient inline-block py-2 mr-2">
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
              <h5 className="font-manrope font-normal text-lg mb-5 product-policy__rightside--h5 text-center md:text-right lg:text-center">
                Real-time policy enforcement at the moment of communication,
                before anything is sent.
                <b className="block font-extrabold">
                  Like spell-check but for policies.
                </b>
              </h5>
              <h4 className="font-mono font-light text-2xl mb-2">
                InPolicy for Agents
              </h4>
              <h5 className="font-manrope font-normal text-lg mb-5 product-policy__rightside--h5 text-center md:text-right lg:text-center">
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
            <div className="md:px-15 px-0">
                <div className="product-policy__rightside--colTwo ml-auto text-center md:text-right mt-[50px] lg:mt-50 md:mt-[150px]">
              <h2 className="headingh2 mb-8">
                <span className="common-txt-gradient">InPolicy </span>
                <span className="common-txt-gradient"> For </span>
                <span className="common-txt-gradient">Humans</span>
              </h2>
              <h6 className="font-inter font-light leading-tight md:text-[24px] sm:text-[22px] lg:text-heading28 text-lg leading-[1.6] md:leading-normal">
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
