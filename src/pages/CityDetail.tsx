import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import InquiryModal from "@/components/InquiryModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Thermometer, Clock, Star, CheckCircle2, Users } from "lucide-react";

const CityDetail = () => {
  const { citySlug } = useParams();
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  // Mock city data - in real app, fetch based on citySlug
  const cityData: any = {
    jaipur: {
      name: "Jaipur",
      state: "Rajasthan",
      tagline: "The Pink City of India",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=1200&q=80",
      description: "Jaipur, the capital of Rajasthan, is known as the Pink City due to the distinctive color of its buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, this vibrant city is a perfect blend of ancient heritage and modern development. The city is part of the famous Golden Triangle tourist circuit along with Delhi and Agra.",
      history: "Jaipur was built by Maharaja Sawai Jai Singh II in 1727, who was a patron of architecture and science. The city was painted pink in 1876 to welcome the Prince of Wales, and the color has been maintained ever since. The city's architecture follows the principles of Vastu Shastra and was designed by the chief architect Vidyadhar Bhattacharya.",
      bestTime: "October to March",
      climate: "Jaipur experiences extreme climate with hot summers (up to 45°C in May-June) and cool winters (as low as 5°C in January). Monsoon season is from July to September with moderate rainfall.",
      topAttractions: [
        {
          name: "Amber Fort",
          description: "Magnificent fort with stunning architecture and elephant rides",
          image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=600&q=80"
        },
        {
          name: "City Palace",
          description: "Royal residence with museums and beautiful courtyards",
          image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80"
        },
        {
          name: "Hawa Mahal",
          description: "Iconic five-story palace with 953 small windows",
          image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80"
        },
        {
          name: "Jantar Mantar",
          description: "UNESCO World Heritage astronomical observatory",
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
        },
        {
          name: "Jal Mahal",
          description: "Beautiful water palace in the middle of Man Sagar Lake",
          image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80"
        },
        {
          name: "Nahargarh Fort",
          description: "Hill fort offering panoramic views of the city",
          image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80"
        }
      ],
      packages: [
        {
          id: 1,
          title: "Jaipur Weekend Getaway",
          slug: "jaipur-weekend-getaway",
          duration: "2 Days / 1 Night",
          price: 8999,
          image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=400&q=80",
          rating: 4.5,
          reviews: 89
        },
        {
          id: 2,
          title: "Royal Rajasthan Heritage",
          slug: "royal-rajasthan-heritage",
          duration: "8 Days / 7 Nights",
          price: 45999,
          image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80",
          rating: 4.7,
          reviews: 312
        },
        {
          id: 3,
          title: "Golden Triangle Tour",
          slug: "golden-triangle-tour",
          duration: "6 Days / 5 Nights",
          price: 24999,
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80",
          rating: 4.8,
          reviews: 234
        }
      ]
    }
  };

  const city = cityData[citySlug || "jaipur"] || cityData.jaipur;

  return (
    <>
      <Helmet>
        <title>{city.name} Tour Packages | Best {city.name} Travel Guide - India Package Tours</title>
        <meta name="description" content={`Explore ${city.name}, ${city.state}. ${city.description.substring(0, 150)}... Book the best ${city.name} tour packages with India Package Tours.`} />
        <meta name="keywords" content={`${city.name} tour packages, ${city.name} travel guide, ${city.name} tourism, visit ${city.name}, ${city.name} attractions`} />
        <link rel="canonical" href={`https://indiapackagetours.com/city/${citySlug}`} />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh]">
          <img
            src={city.image}
            alt={`${city.name} - ${city.tagline}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-teal/40 via-transparent to-black/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12 text-white">
              <Badge className="mb-3 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {city.state}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-3 animate-fade-in">
                {city.name} – {city.tagline}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-2">
                Tour Guide & Travel Packages
              </p>
              <div className="h-1 w-24 bg-gradient-india rounded-full mb-6"></div>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" onClick={() => setInquiryModalOpen(true)}>
                  Plan Your Trip
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  View {city.name} Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Quick Facts Block */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 hover:shadow-elegant transition-shadow bg-gradient-to-br from-card to-muted/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-india rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">{city.state}, North India</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-elegant transition-shadow bg-gradient-to-br from-card to-muted/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-full">
                  <Thermometer className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Climate</h3>
                  <p className="text-sm text-muted-foreground">Hot summers, mild winters</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-elegant transition-shadow bg-gradient-to-br from-card to-muted/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-india-green rounded-full">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Best Time</h3>
                  <p className="text-sm text-muted-foreground">{city.bestTime}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-elegant transition-shadow bg-gradient-to-br from-card to-muted/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-teal to-primary rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Famous For</h3>
                  <p className="text-sm text-muted-foreground">Palaces, Forts, Culture</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">About {city.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{city.description}</p>
              </section>

              {/* History */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">History</h2>
                <p className="text-muted-foreground leading-relaxed">{city.history}</p>
              </section>

              {/* Climate */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Climate & Weather</h2>
                <p className="text-muted-foreground leading-relaxed">{city.climate}</p>
              </section>

              {/* Top Attractions */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Top Attractions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {city.topAttractions.map((attraction: any, index: number) => (
                    <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={attraction.image}
                          alt={attraction.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {attraction.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{attraction.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Tour Routes */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">{city.name} Tour Routes</h2>
                <div className="space-y-6 mb-8">
                  <Card className="p-6 hover:shadow-elegant transition-all">
                    <h3 className="text-xl font-bold text-foreground mb-3">Royal Heritage Route</h3>
                    <p className="text-muted-foreground mb-3">City Palace → Amber Fort → Jaigarh Fort</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Distance: ~25 km</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Duration: 6-7 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Best: Morning start</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:shadow-elegant transition-all">
                    <h3 className="text-xl font-bold text-foreground mb-3">Pink City Walk</h3>
                    <p className="text-muted-foreground mb-3">Hawa Mahal → Johri Bazaar → Govind Dev Ji Temple</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Distance: ~8 km</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Duration: 4-5 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Best: Evening</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:shadow-elegant transition-all">
                    <h3 className="text-xl font-bold text-foreground mb-3">Golden Triangle Route</h3>
                    <p className="text-muted-foreground mb-3">Delhi → Agra → Jaipur (Complete Circuit)</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Distance: ~570 km</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Duration: 5-7 days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Best: Oct-Mar</span>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* <h3 className="text-2xl font-bold text-foreground mb-4">Location Map</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-elegant">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973582812!2d75.65046815295144!3d26.885142827869494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${city.name} Map`}
                  />
                </div> */}
              </section>

              {/* Why Choose Us */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Book {city.name} Tour With Us?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 hover:shadow-elegant transition-shadow bg-gradient-to-br from-card to-muted/20">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-india rounded-full flex-shrink-0">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Verified Tours</h3>
                        <p className="text-sm text-muted-foreground">All our tours are verified with genuine reviews from real travelers</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:shadow-elegant transition-shadow bg-gradient-to-br from-card to-muted/20">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-india-green rounded-full flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Transparent Pricing</h3>
                        <p className="text-sm text-muted-foreground">No hidden charges, what you see is what you pay</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:shadow-elegant transition-shadow bg-gradient-to-br from-card to-muted/20">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-teal to-primary rounded-full flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">24×7 Support</h3>
                        <p className="text-sm text-muted-foreground">Round-the-clock assistance for any queries or emergencies</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:shadow-elegant transition-shadow bg-gradient-to-br from-card to-muted/20">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-full flex-shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Expert Local Guides</h3>
                        <p className="text-sm text-muted-foreground">Experienced guides who know every corner of {city.name}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="p-6 sticky top-20">
                <h3 className="text-xl font-bold text-foreground mb-4">Plan Your {city.name} Trip</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a customized itinerary with best hotels, transportation, and sightseeing options.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mb-3"
                  onClick={() => setInquiryModalOpen(true)}
                >
                  Get Free Quote
                </Button>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    ✓ Instant Response
                  </p>
                  <p className="flex items-center gap-2">
                    ✓ Best Price Guarantee
                  </p>
                  <p className="flex items-center gap-2">
                    ✓ 24/7 Support
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Tour Packages */}
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">{city.name} Tour Packages</h2>
                <p className="text-muted-foreground">Handpicked packages for exploring {city.name}</p>
              </div>
              <Link to="/packages">
                <Button variant="outline">View All Packages</Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {city.packages.map((pkg: any) => (
                <Link key={pkg.id} to={`/package/${pkg.slug}`}>
                  <Card className="overflow-hidden group hover:shadow-elegant transition-all hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                        Best Seller
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{pkg.rating}</span>
                        <span className="text-sm text-muted-foreground">({pkg.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                          <p className="text-2xl font-bold text-primary">₹{pkg.price.toLocaleString()}</p>
                        </div>
                        <Button variant="cta" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <StickyContact onInquiryClick={() => setInquiryModalOpen(true)} />
      <InquiryModal open={inquiryModalOpen} onOpenChange={setInquiryModalOpen} defaultDestination={city.name} />
    </>
  );
};

export default CityDetail;
