import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkflowCapability from "@/components/WorkflowCapability";
import WorkflowShowroom from "@/components/WorkflowShowroom";
import WebDesignProject from "@/components/WebDesignProject";
import TestimonialSection from "@/components/TestimonialSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <WorkflowCapability />
    <WorkflowShowroom />
    <WebDesignProject />
    <TestimonialSection />
    <AboutSection />
    <ContactSection />
    <footer className="border-t border-border py-8">
      <div className="container text-center text-sm text-muted-foreground">
        © 2023 Cary Kenner. Built with precision.
      </div>
    </footer>
  </div>
);

export default Index;
