import React from 'react'
import ButtonCta from "../components/buttonCta";
export default function PolicySection() {
  return (
    <section className='poilcysection pb-[300px]'>
        <div className='w-(--container) mx-auto'>
            <h2 className="headingh2 text-center mb-6">Policy Infrastructure for Enterprise</h2>
            <div className='shrink-container-2 mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-manrope">
  
  <div className=" p-6 pl-0  border-b-[1.5px] border-black pb-8">
    <div className="mb-4">
      <img src="/icon-title-mangement.svg" alt="Icon" className="w-8 h-8" />
    </div>

    <h3 className="text-2xl font-medium mb-3 font-manrope">
     Agentic Policy Management
    </h3>

    <p className="text-[18px] leading-relaxed  font-medium">
      Get the policies, structure them for AI, add metadata, follow-up to resolve ambiguity, issues, conflicts, suggest new policies. Respond in real time to changes.
    </p>
  </div>

  <div className=" p-6 pl-0 border-b-[1.5px] border-black pb-16">
    <div className="mb-4">
      <img src="/agentic-icon.svg" alt="Icon" className="w-8 h-8" />
    </div>

    <h3 className="text-2xl font-medium mb-3 font-manrope">
     Agentic Tenant Context
    </h3>

    <p className="text-[18px] leading-relaxed  font-medium">
     Identify what gaps exist where we can't enforce the policies until we have some information, then go out and get that context from the web or from the right people.
    </p>
  </div>

  <div className=" p-6 pl-0 ">
    <div className="mb-4">
      <img src="/conversioanl-icon.svg" alt="Icon" className="w-8 h-8" />
    </div>

    <h3 className="text-2xl font-medium mb-3 font-manrope">
      Conversational Context Management
    </h3>

    <p className="text-[18px] leading-relaxed  font-medium">
     What policies apply often depends on what’s been said before– we track what policies are relevant and/or binding through the turns the conversation.
    </p>
  </div>

  <div className=" p-6 pl-0">
    <div className="mb-4">
      <img src="/real-time-icon.svg" alt="Icon" className="w-8 h-8" />
    </div>

    <h3 className="text-2xl font-medium mb-3 font-manrope">
     Real-Time Policy Enforcement
    </h3>

    <p className="text-[18px] leading-relaxed  font-medium">
       All of this needs to be structured and presented back to a human or agent with very low latency, while maintaining the highest privacy and security standards.
    </p>
  </div>

</div>
     <ButtonCta classBtn={"!border-2 !border-black !px-9 !py-[9px] mt-10 mx-auto"}>
  <img src="/arrow-btn.svg" alt="Deploy" />
          <p className="ml-2  lowercase first-letter:capitalize text-base">
            How we’re solving this.
          </p>
              </ButtonCta>
            </div>
        </div>
        
    </section>
  )
}
