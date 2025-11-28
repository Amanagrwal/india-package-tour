import { Shield, Heart, Bus, Users } from "lucide-react";

const SafetyCommitment = () => {
  const commitments = [
    {
      image: "/covid-safe-1.png",
      title: "Screening & Precautions",
      description: "Temperature checks, sanitization protocols, and health screening for all guests and staff"
    },
    {
      image: "/covid-safe-2.png",
      title: "Protection Paramount",
      description: "High-quality masks, sanitizers, and protective gear provided throughout your journey"
    },
    {
      image: "/covid-safe-3.png",
      title: "Safer Commute & Sites",
      description: "Sanitized vehicles, verified accommodations, and safe tourist sites with limited capacity"
    },
    {
      image: "/covid-safe-4.png",
      title: "Social Distancing",
      description: "Maintaining safe distances, small group sizes, and contactless service where possible"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Commitment to Safe Holidays
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your safety and well-being are our top priorities. We follow strict protocols to ensure worry-free travel experiences.
          </p>
        </div>

        {/* IMAGE GRID */}
      {/* IMAGE GRID - MOBILE SCROLL / DESKTOP GRID */}
<div className="
  flex gap-4 overflow-x-auto pb-2 
  md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
  scroll-smooth
">
  {commitments.map((item, index) => (
    <div
      key={index}
      className="
        min-w-[250px] md:min-w-0
        group bg-card rounded-xl p-4 shadow-card 
        hover:shadow-elegant transition-all duration-300 
        hover:-translate-y-1 animate-slide-up
      "
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* IMAGE */}
      <div className="w-full h-36 overflow-hidden rounded-lg mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default SafetyCommitment;
