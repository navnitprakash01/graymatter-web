import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProblemPositioning from "@/components/problem-positioning";
import IntelligencePipeline from "@/components/intelligence-pipeline";
import GraymatterBrain from "@/components/graymatter-brain";
import Capabilities from "@/components/capabilities";
import ArchitectureSection from "@/components/architecture";
import AgentSystem from "@/components/agent-system";
import YouTubeSection from "@/components/youtube-section";
import LearningLoop from "@/components/learning-loop";
import EpistemicRigor from "@/components/epistemic-rigor";
import ProductPrinciples from "@/components/product-principles";
import CurrentState from "@/components/current-state";
import CtaFinal from "@/components/cta-final";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Navbar />
      <Hero />
      <ProblemPositioning />
      <IntelligencePipeline />
      <GraymatterBrain />
      <Capabilities />
      <ArchitectureSection />
      <AgentSystem />
      <YouTubeSection />
      <LearningLoop />
      <EpistemicRigor />
      <ProductPrinciples />
      <CurrentState />
      <CtaFinal />
      <Footer />
    </main>
  );
}
