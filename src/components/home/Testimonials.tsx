import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh & Priya Sharma",
      location: "Mumbai, Maharashtra",
      tour: "Golden Triangle Tour",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80",
      review: "Absolutely wonderful experience! The team handled everything perfectly from booking to the last day. The hotels were excellent and our guide was very knowledgeable. Highly recommended for first-time visitors to India!"
    },
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      tour: "Kerala Backwaters",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
      review: "Kerala was a dream! The houseboat experience was magical and the Ayurvedic treatments were so relaxing. India Package Tours made everything seamless. Can't wait to come back!"
    },
    {
      name: "David & Emma Wilson",
      location: "London, UK",
      tour: "Royal Rajasthan",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
      review: "The palaces, forts, and desert safari exceeded all expectations. Our itinerary was perfectly planned and we loved every moment. The cultural performances were a highlight. Truly royal treatment!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-ocean text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <Quote className="h-32 w-32" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Real experiences from real travelers who explored India with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-elegant">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/30 shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-lg md:text-xl text-white/95 mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].review}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="font-bold text-xl text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-white/80 text-sm mb-1">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonials[currentIndex].tour}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white w-8" : "bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
       

      </div>
    </section>
  );
};

export default Testimonials;
