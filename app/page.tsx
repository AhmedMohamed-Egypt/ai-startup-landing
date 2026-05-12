import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HumanSection from "./sections/HumanSection";
import PolicyAgents from "./sections/PolicyAgents";
import PolicySection from "./sections/PolicySection";
import PrivateCorrections from "./sections/PrivateCorrections";
import ProductPolicy from "./sections/ProductPolicy";

export default function Home() {
  return (
    <main>
      <Hero />
       <HumanSection />
       <PolicySection />
         <ProductPolicy/>
         <PrivateCorrections/>
          <PolicyAgents/>
           <Footer/>
      
    
    </main>
  );
}
