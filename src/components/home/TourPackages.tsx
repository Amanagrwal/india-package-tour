import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const TourPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Packages" },
    { id: "family", label: "Family" },
    { id: "honeymoon", label: "Honeymoon" },
    { id: "adventure", label: "Adventure" },
    { id: "rajasthan", label: "Rajasthan" },
    { id: "kerala", label: "Kerala" },
  ];

  const packages = [
    {
      id: 1,
      title: "Golden Triangle Tour",
      category: "family",
      duration: "6 Days / 5 Nights",
      location: "Delhi - Agra - Jaipur",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
      rating: 4.8,
      reviews: 234,
      highlights: ["Taj Mahal Visit", "Amber Fort", "City Palace"]
    },
    {
      id: 2,
      title: "Kerala Backwaters Escape",
      category: "honeymoon",
      duration: "5 Days / 4 Nights",
      location: "Cochin - Munnar - Alleppey",
      price: "₹32,999",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
      rating: 4.9,
      reviews: 187,
      highlights: ["Houseboat Stay", "Tea Plantations", "Ayurvedic Spa"]
    },
    {
      id: 3,
      title: "Royal Rajasthan Heritage",
      category: "rajasthan",
      duration: "8 Days / 7 Nights",
      location: "Jaipur - Udaipur - Jodhpur",
      price: "₹45,999",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
      rating: 4.7,
      reviews: 312,
      highlights: ["Palace Hotels", "Desert Safari", "Folk Performances"]
    },
    {
      id: 4,
      title: "Himalayan Adventure",
      category: "adventure",
      duration: "7 Days / 6 Nights",
      location: "Manali - Dharamshala",
      price: "₹28,999",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
      rating: 4.6,
      reviews: 156,
      highlights: ["Trekking", "Rafting", "Paragliding"]
    },
    {
      id: 5,
      title: "South India Temple Tour",
      category: "family",
      duration: "9 Days / 8 Nights",
      location: "Chennai - Madurai - Rameshwaram",
      price: "₹35,999",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
      rating: 4.5,
      reviews: 98,
      highlights: ["Ancient Temples", "Cultural Experience", "Traditional Cuisine"]
    },
    {
      id: 6,
      title: "Goa Beach Paradise",
      category: "honeymoon",
      duration: "4 Days / 3 Nights",
      location: "North Goa - South Goa",
      price: "₹18,999",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
      rating: 4.8,
      reviews: 276,
      highlights: ["Beach Activities", "Water Sports", "Sunset Cruises"]
    }
  ];

  const filteredPackages = selectedCategory === "all" 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            India Tour Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked tour packages designed for every type of traveler. Find your perfect Indian adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-destructive" />
                </button>
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  Best Seller
                </Badge>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{pkg.location}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-4 mb-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span className="text-muted-foreground">({pkg.reviews})</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.highlights.slice(0, 3).map((highlight, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                    <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                  </div>
                  <Link to="package/mumbai-city-highlights">
                  <Button variant="cta">
                    View Details
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          
          <Button variant="hero" size="lg" >
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
