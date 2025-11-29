import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, MapPin, Users, Send } from "lucide-react";
import heroImage from "@/assets/hero-taj-mahal.jpg";
import jaipurImage from "@/assets/jaipur-city.jpg";
import keralaImage from "@/assets/kerala-backwaters.jpg";
import { Link } from "react-router-dom";
import InquiryModal from "../InquiryModal";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  
  const slides = [
    {
      image: heroImage,
      title: "Experience the Timeless Beauty of India",
      subtitle: "Discover iconic monuments and rich cultural heritage",
    },
    {
      image: jaipurImage,
      title: "Explore Royal Rajasthan",
      subtitle: "Majestic forts, palaces, and vibrant culture",
    },
    {
      image: keralaImage,
      title: "Relax in Serene Kerala",
      subtitle: "Tranquil backwaters and tropical paradise",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
    <section className="relative min-h-screen md:h-[85vh] overflow-hidden">

      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />

            {/* LIGHT Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 w-full items-center">

          {/* HERO TEXT */}
          <div className="text-white space-y-3 max-w-lg animate-fade-in">

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>

            <p className="text-sm md:text-lg text-white/90 drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex gap-3 mt-3 flex-wrap">
              <Link to="/packages">
              <Button variant="hero" size="sm" className="px-5 py-2 md:px-6 md:py-3">
                  Explore Packages
              </Button>
              
              </Link>

              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-tertiary px-5 py-2 md:px-6 md:py-3"
                onClick={() => setInquiryModalOpen(true)}
              >
              <Send/>  Book your Tour
              </Button>
            </div>
          </div>

          {/* BOOKING FORM - SMALLER + COMPACT */}
          <div className="bg-white/85 backdrop-blur-md rounded-xl shadow-lg
p-4 sm:p-5 w-full max-w-[90%] sm:max-w-sm md:max-w-sm mx-auto
scale-95 sm:scale-100 transition-transform">


            <div className="mb-4 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-bold text-foreground">
                Book Your Trip
              </h2>
              <p className="text-xs text-muted-foreground">
                Get a free quote in 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">

              {/* NAME & PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-1">
                  <Label className="text-xs" htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Doe" required className="h-9" />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs" htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="h-9" />
                </div>
              </div>

              {/* EMAIL */}
              <div className="space-y-1">
                <Label className="text-xs" htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="h-9" />
              </div>

              {/* DATE & TRAVELERS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-1">
                  <Label className="text-xs" htmlFor="date">Travel Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <Input id="date" type="date" className="pl-9 h-9" />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs" htmlFor="travelers">Travelers</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-9 h-9 text-sm">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3-5">3-5 People</SelectItem>
                        <SelectItem value="6+">6+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

              </div>
                <div className="space-y-1">
            <Label htmlFor="message" className="text-xs" >Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any special requests or questions?"
              rows={3}
            />
          </div>

              {/* DESTINATION */}
              {/* <div className="space-y-1">
                <Label className="text-xs" htmlFor="destination">Destination</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <Select>
                    <SelectTrigger className="pl-9 h-9 text-sm">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="goa">Goa</SelectItem>
                      <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                      <SelectItem value="golden-triangle">Golden Triangle</SelectItem>
                      <SelectItem value="kashmir">Kashmir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div> */}
              
   
              {/* BUTTON */}
              <Button
                type="submit"
                variant="hero"
                size="sm"
                className="w-full py-3 text-sm"
              >
                <Send className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? "bg-primary w-6" : "bg-white/60"
              }`}
          />
        ))}
      </div>
    </section>
    
     <InquiryModal
            open={inquiryModalOpen}
            onOpenChange={setInquiryModalOpen}
          />
    </>
  );

};

export default HeroSection;
