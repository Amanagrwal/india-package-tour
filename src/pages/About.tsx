import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import InquiryModal from "@/components/InquiryModal";
import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Globe, Heart, CheckCircle2 } from "lucide-react";
import CTA_Section_internal from "@/components/Subcomponenet/CTA_Section_internal";
import Our_team from "@/components/Subcomponenet/Our_team";
import Why_choose_us from "@/components/Subcomponenet/Why_choose_us";
import CTA_Section from "@/components/Subcomponenet/CTA_Section";

const About = () => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety and security are our top priorities in every journey we plan."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in service quality and customer satisfaction."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every tour we craft."
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Deep knowledge of India's diverse destinations and hidden gems."
    }
  ];





  return (
    <>
      <Helmet>
        <title>About Us | India Package Tours - Leading Tour Operator Since 2008</title>
        <meta name="description" content="Learn about India Package Tours - your trusted partner for exploring India. With 15+ years of experience, we create unforgettable travel experiences across India." />
        <meta name="keywords" content="about India Package Tours, India tour operator, travel company India, about us" />
        <link rel="canonical" href="https://indiapackagetours.com/about" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-glow to-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                About India Package Tours
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                We are passionate travel enthusiasts dedicated to showcasing the incredible beauty, 
                rich heritage, and diverse culture of India to travelers from around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2008, India Package Tours began with a simple vision: to make exploring 
                    India accessible, safe, and unforgettable for every traveler. What started as a 
                    small team of passionate travel enthusiasts has grown into one of India's most 
                    trusted tour operators.
                  </p>
                  <p>
                    Over the years, we've helped thousands of travelers discover the magic of India - 
                    from the majestic Himalayas to the serene backwaters of Kerala, from the royal 
                    palaces of Rajasthan to the spiritual ghats of Varanasi.
                  </p>
                  <p>
                    Our commitment to excellence, personalized service, and deep local knowledge has 
                    earned us a reputation as a reliable partner for both first-time visitors and 
                    seasoned India explorers.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80"
                  alt="India tourism"
                  className="rounded-xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide authentic, memorable, and hassle-free travel experiences that showcase 
                  the true essence of India. We aim to connect travelers with local cultures, 
                  traditions, and hidden gems while ensuring their comfort and safety at every step.
                </p>
              </Card>
              <Card className="p-8">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred travel partner for exploring India. We envision 
                  a future where every traveler experiences India not just as tourists, but as 
                  welcomed guests who leave with lifelong memories and friendships.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
       <Why_choose_us/>

        {/* Team Preview */}
         <Our_team/>

        {/* CTA Section */}

        <CTA_Section/>
      </main>

      <Footer />
      <StickyContact onInquiryClick={() => setInquiryModalOpen(true)} />
      <InquiryModal open={inquiryModalOpen} onOpenChange={setInquiryModalOpen} />
    </>
  );
};

export default About;
