import Hero from "./sections/Hero";
import HumanSection from "./sections/HumanSection";
import PolicySection from "./sections/PolicySection";
import PrivateCorrections from "./sections/PrivateCorrections";
import ProductPolicy from "./sections/ProductPolicy";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto"></div>
      <HumanSection />
      <PolicySection />
      <ProductPolicy/>
      <PrivateCorrections/>
    </main>
  );
}
