import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import InquiryModal from "@/components/InquiryModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, MapPin, Star, Heart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Packages = () => {
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      title: "Golden Triangle Tour",
      slug: "golden-triangle-tour",
      category: "family",
      city: "delhi",
      duration: "6 Days",
      durationDays: 6,
      location: "Delhi - Agra - Jaipur",
      price: 24999,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
      rating: 4.8,
      reviews: 234,
      highlights: ["Taj Mahal Visit", "Amber Fort", "City Palace"]
    },
    {
      id: 2,
      title: "Kerala Backwaters Escape",
      slug: "kerala-backwaters-escape",
      category: "honeymoon",
      city: "kerala",
      duration: "5 Days",
      durationDays: 5,
      location: "Cochin - Munnar - Alleppey",
      price: 32999,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
      rating: 4.9,
      reviews: 187,
      highlights: ["Houseboat Stay", "Tea Plantations", "Ayurvedic Spa"]
    },
    {
      id: 3,
      title: "Royal Rajasthan Heritage",
      slug: "royal-rajasthan-heritage",
      category: "luxury",
      city: "jaipur",
      duration: "8 Days",
      durationDays: 8,
      location: "Jaipur - Udaipur - Jodhpur",
      price: 45999,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
      rating: 4.7,
      reviews: 312,
      highlights: ["Palace Hotels", "Desert Safari", "Folk Performances"]
    },
    {
      id: 4,
      title: "Himalayan Adventure",
      slug: "himalayan-adventure",
      category: "adventure",
      city: "manali",
      duration: "7 Days",
      durationDays: 7,
      location: "Manali - Dharamshala",
      price: 28999,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
      rating: 4.6,
      reviews: 156,
      highlights: ["Trekking", "Rafting", "Paragliding"]
    },
    {
      id: 5,
      title: "South India Temple Tour",
      slug: "south-india-temple-tour",
      category: "family",
      city: "bangalore",
      duration: "9 Days",
      durationDays: 9,
      location: "Chennai - Madurai - Rameshwaram",
      price: 35999,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
      rating: 4.5,
      reviews: 98,
      highlights: ["Ancient Temples", "Cultural Experience", "Traditional Cuisine"]
    },
    {
      id: 6,
      title: "Goa Beach Paradise",
      slug: "goa-beach-paradise",
      category: "honeymoon",
      city: "goa",
      duration: "4 Days",
      durationDays: 4,
      location: "North Goa - South Goa",
      price: 18999,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
      rating: 4.8,
      reviews: 276,
      highlights: ["Beach Activities", "Water Sports", "Sunset Cruises"]
    },
    {
      id: 7,
      title: "Varanasi Spiritual Journey",
      slug: "varanasi-spiritual-journey",
      category: "family",
      city: "varanasi",
      duration: "3 Days",
      durationDays: 3,
      location: "Varanasi - Sarnath",
      price: 15999,
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80",
      rating: 4.7,
      reviews: 145,
      highlights: ["Ganga Aarti", "Temple Visits", "Boat Ride"]
    },
    {
      id: 8,
      title: "Mumbai City Highlights",
      slug: "mumbai-city-highlights",
      category: "weekend",
      city: "mumbai",
      duration: "3 Days",
      durationDays: 3,
      location: "Mumbai - Elephanta Caves",
      price: 19999,
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80",
      rating: 4.5,
      reviews: 189,
      highlights: ["Gateway of India", "Marine Drive", "Bollywood Tour"]
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesCity = selectedCity === "all" || pkg.city === selectedCity;
    const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory;
    const matchesDuration = selectedDuration === "all" || 
      (selectedDuration === "short" && pkg.durationDays <= 4) ||
      (selectedDuration === "medium" && pkg.durationDays >= 5 && pkg.durationDays <= 7) ||
      (selectedDuration === "long" && pkg.durationDays >= 8);
    const matchesPrice = priceRange === "all" ||
      (priceRange === "budget" && pkg.price < 20000) ||
      (priceRange === "mid" && pkg.price >= 20000 && pkg.price < 35000) ||
      (priceRange === "luxury" && pkg.price >= 35000);
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCity && matchesCategory && matchesDuration && matchesPrice && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>India Tour Packages | Best Travel Packages 2024 - India Package Tours</title>
        <meta name="description" content="Browse our complete collection of India tour packages. From Golden Triangle to Kerala backwaters, find the perfect tour package for your Indian adventure." />
        <meta name="keywords" content="India tour packages, India travel packages, tour packages India, India holiday packages" />
        <link rel="canonical" href="https://indiapackagetours.com/packages" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-glow to-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              India Tour Packages
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Discover handpicked tour packages for every traveler. Your perfect Indian adventure awaits!
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-muted/30 py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search packages..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* City Filter */}
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="jaipur">Jaipur</SelectItem>
                  <SelectItem value="agra">Agra</SelectItem>
                  <SelectItem value="kerala">Kerala</SelectItem>
                  <SelectItem value="goa">Goa</SelectItem>
                  <SelectItem value="manali">Manali</SelectItem>
                  <SelectItem value="varanasi">Varanasi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                </SelectContent>
              </Select>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="honeymoon">Honeymoon</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="weekend">Weekend</SelectItem>
                </SelectContent>
              </Select>

              {/* Duration Filter */}
              {/* <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="short">Short (1-4 days)</SelectItem>
                  <SelectItem value="medium">Medium (5-7 days)</SelectItem>
                  <SelectItem value="long">Long (8+ days)</SelectItem>
                </SelectContent>
              </Select> */}

              {/* Price Range Filter */}
              {/* <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="budget">Budget (Under ₹20k)</SelectItem>
                  <SelectItem value="mid">Mid-Range (₹20k-35k)</SelectItem>
                  <SelectItem value="luxury">Luxury (₹35k+)</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-muted-foreground">
                Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <p className="text-2xl font-bold text-primary">₹{pkg.price.toLocaleString()}</p>
                      </div>
                      <Link to={`/package/${pkg.slug}`}>
                        <Button variant="cta">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPackages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">No packages found matching your criteria.</p>
                <Button
                  variant="hero"
                  onClick={() => {
                    setSelectedCity("all");
                    setSelectedCategory("all");
                    setSelectedDuration("all");
                    setPriceRange("all");
                    setSearchQuery("");
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <StickyContact onInquiryClick={() => setInquiryModalOpen(true)} />
      <InquiryModal open={inquiryModalOpen} onOpenChange={setInquiryModalOpen} />
    </>
  );
};

export default Packages;
