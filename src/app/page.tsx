import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ValuePillars from "@/components/ValuePillars";
import EligibilityStrip from "@/components/EligibilityStrip";
import ToolsHub from "@/components/ToolsHub";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <ValuePillars />
      <EligibilityStrip />
      <ToolsHub />
      <Footer />
    </main>
  );
}
