import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import SafetyCommitment from "@/components/home/SafetyCommitment";
import Destinations from "@/components/home/Destinations";
import TourPackages from "@/components/home/TourPackages";
import Testimonials from "@/components/home/Testimonials";
import StickyContact from "@/components/StickyContact";
import CTA_Section from "@/components/Subcomponenet/CTA_Section";
import Star from "@/components/Subcomponenet/Star";
import Our_team from "@/components/Subcomponenet/Our_team";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TourPackages />
        <SafetyCommitment />
        <Destinations showButton={true} />
        <Testimonials />
        <Our_team/>
        <Star/>
        <CTA_Section/>
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Index;
