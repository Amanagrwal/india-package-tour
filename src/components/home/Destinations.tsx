import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Destinations = ({ showButton = false }) => {
  const destinations = [
    {
      name: "Jaipur",
      state: "Rajasthan",
      attractions: "Hawa Mahal, Amber Fort, City Palace",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80"
    },
    {
      name: "Delhi",
      state: "National Capital",
      attractions: "Red Fort, Qutub Minar, India Gate",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80"
    },
    {
      name: "Agra",
      state: "Uttar Pradesh",
      attractions: "Taj Mahal, Agra Fort, Fatehpur Sikri",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80"
    },
    {
      name: "Udaipur",
      state: "Rajasthan",
      attractions: "City Palace, Lake Pichola, Jag Mandir",
      image: "https://images.unsplash.com/photo-1587330979470-3595ac045ab3?w=600&q=80"
    },
    {
      name: "Kerala",
      state: "God's Own Country",
      attractions: "Backwaters, Munnar, Alleppey",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80"
    },
    {
      name: "Goa",
      state: "Beach Paradise",
      attractions: "Beaches, Churches, Fort Aguada",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80"
    },
    {
      name: "Varanasi",
      state: "Uttar Pradesh",
      attractions: "Ganges Ghats, Temples, Sarnath",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80"
    },
    {
      name: "Manali",
      state: "Himachal Pradesh",
      attractions: "Rohtang Pass, Solang Valley, Hadimba Temple",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perfect Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore India's most iconic cities and hidden gems. Each destination offers unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {destinations.map((dest, index) => (
            <>
            
           <Link to="/City/jaipur">
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-2 mb-2 text-sm text-white/80">
                  <MapPin className="h-4 w-4" />
                  <span>{dest.state}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                <p className="text-sm text-white/90 mb-3">{dest.attractions}</p>
                <Button variant="outline" size="sm" className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground backdrop-blur-sm">
                  Explore
                </Button>
              </div>
            </div>
             </Link>
             </>
          ))}
        </div>

         {showButton && (
        <div className="text-center mt-8">
          <Link to="/cities">
            <Button variant="cta" size="lg">
              View All Destinations
            </Button>
          </Link>
        </div>
      )}
      </div>
    </section>
  );
};

export default Destinations;
