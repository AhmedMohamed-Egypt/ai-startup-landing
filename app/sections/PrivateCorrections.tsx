import React from "react";
import ButtonCta from "../components/buttonCta";

export default function PrivateCorrections() {
  return (
    <section className="private-correction overflow-visible md:overflow-x-hidden pb-[100px]">
      <div className="w-(--container) mx-auto px-5 lg:px-15 max-w-full">
        <div className="">
          <div className="flex items-center">
            <div className="private-correction--leftside  mt-[50px] md:mt-0 md:max-w-[40%] lg:max-w-[375px] mt-0 md:lg-50 ">
              <div className="mb-6">
                <h3 className="font-mono font-light text-2xl mb-3">
                  Private Corrections
                </h3>
                <p className="font-manrope text-lg font-normal">
                  Alerts happen locally on the user's screen with a friendly
                  interface that looks and feels like a spell-check. If they fix
                  the issue, no one needs to know.
                </p>
              </div>
              <div>
                <h3 className="font-mono font-light text-2xl mb-3">
                  Aggregate Analytics
                </h3>
                <p className="font-manrope text-lg font-normal">
                  You get a dashboard showing which policies are being triggered
                  and fixed, so you can identify confusion, without singling out
                  specific employees.
                </p>
              </div>
              <div>
                <ButtonCta
                  classBtn={
                    "mt-[40px] mx-auto md:mx-0  relative !border-[2.4px] !border-black !px-7 !py-[9px] lg:mt-6 after:content-[''] after:absolute after:left-[15% after:bottom-0 after:w-full after:h-full"
                  }
                >
                  <p className=" text-base capitalize">Try It Yourself</p>
                </ButtonCta>
              </div>
            </div>
            <div className="hidden md:flex private-correction--right flex-1 justify-end md:max-w-[40%] md:ml-auto ml-0 md:translate-x-[150px]">
              <img src="/PolicyReview-1.svg" alt="" />
              <img
                src="/Send-email-modal-privacy.svg"
                className="w-126.25"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
