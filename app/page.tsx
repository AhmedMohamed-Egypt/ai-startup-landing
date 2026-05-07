import Hero from "./sections/Hero";
import HumanSection from "./sections/HumanSection";
import PolicySection from "./sections/PolicySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto"></div>
      <HumanSection />
      <PolicySection />
    </main>
  );
}
