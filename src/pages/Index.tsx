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
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="India Tour Packages | Best Travel Packages for India Tours 2024"
        description="Explore India with customized tour packages. Best prices for Golden Triangle, Rajasthan, Kerala, Goa tours. Book your dream India vacation today!"
      />
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
