import ButtonCta from "../components/buttonCta";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Hero-section-bg.png')" }}
    >
      <div className="relative overflow-hidden bg-black text-white">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center height-content-hero">
        <div className="w-(--container) mx-auto">
          <div className="shrink-container mx-auto">
            <h1 className="mb-5">
              <span className="block text-white">The policy layer for</span>
              <span className="block text-gradient-span">humans and AI</span>
            </h1>
            <div className="font-manrope text-white font-medium text-xl max-w-(--content-hero-width)">
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
