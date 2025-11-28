import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  MapPin, Clock, Star, Users, Calendar, CheckCircle2, XCircle, 
  Hotel, Car, UtensilsCrossed, Camera, Phone, MessageCircle, Send
} from "lucide-react";
import { toast } from "sonner";

const PackageDetail = () => {
  const { slug } = useParams();
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState("3star");
  const [selectedCar, setSelectedCar] = useState("sedan");

  // Mock package data - in real app, fetch based on slug
  const packageData = {
    title: "Golden Triangle Tour",
    slug: "golden-triangle-tour",
    location: "Delhi - Agra - Jaipur",
    duration: "6 Days / 5 Nights",
    price: 24999,
    rating: 4.8,
    reviews: 234,
    bestTime: "October to March",
    idealFor: "Family, Couples, Solo Travelers",
    description: "Experience the magic of India's Golden Triangle with visits to Delhi's historic monuments, Agra's iconic Taj Mahal, and Jaipur's royal palaces.",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    ],
    highlights: [
      "Visit UNESCO World Heritage Sites",
      "Professional Tour Guide",
      "Comfortable Accommodation",
      "All Transfers Included",
      "Taj Mahal Sunrise Visit",
      "Amber Fort Elephant Ride",
      "Cultural Folk Performances",
      "Traditional Indian Meals"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        activities: [
          "Arrival at Delhi International Airport",
          "Transfer to hotel and check-in",
          "Evening visit to India Gate and Connaught Place",
          "Welcome dinner at hotel"
        ],
        meals: "Dinner",
        accommodation: "Hotel in Delhi"
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        activities: [
          "Visit Red Fort and Jama Masjid",
          "Explore Chandni Chowk by rickshaw",
          "Visit Qutub Minar and Humayun's Tomb",
          "Drive past Parliament House and President's House",
          "Evening at leisure"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Delhi"
      },
      {
        day: 3,
        title: "Delhi to Agra",
        activities: [
          "Drive to Agra (4 hours)",
          "Visit Agra Fort",
          "Sunset view of Taj Mahal from Mehtab Bagh",
          "Shopping at local marble workshops"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Agra"
      },
      {
        day: 4,
        title: "Agra to Jaipur via Fatehpur Sikri",
        activities: [
          "Early morning Taj Mahal sunrise visit",
          "Return to hotel for breakfast",
          "Drive to Jaipur with stop at Fatehpur Sikri",
          "Evening arrival in Jaipur",
          "Check-in to hotel"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Jaipur"
      },
      {
        day: 5,
        title: "Jaipur Sightseeing",
        activities: [
          "Visit Amber Fort with elephant ride",
          "Photo stop at Jal Mahal",
          "Visit City Palace and Jantar Mantar",
          "Explore Hawa Mahal",
          "Evening cultural show with traditional dinner"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Jaipur"
      },
      {
        day: 6,
        title: "Jaipur to Delhi - Departure",
        activities: [
          "Breakfast at hotel",
          "Drive back to Delhi (5 hours)",
          "Drop at airport for onward journey"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    hotelOptions: {
      "3star": [
        { name: "Hotel Sunstar Grand", location: "Delhi", rating: 3 },
        { name: "Hotel Atulyaa Taj", location: "Agra", rating: 3 },
        { name: "Hotel Kalyan", location: "Jaipur", rating: 3 }
      ],
      "4star": [
        { name: "The LaLiT New Delhi", location: "Delhi", rating: 4 },
        { name: "Four Points by Sheraton", location: "Agra", rating: 4 },
        { name: "Hilton Jaipur", location: "Jaipur", rating: 4 }
      ],
      "5star": [
        { name: "The Leela Palace", location: "Delhi", rating: 5 },
        { name: "ITC Mughal", location: "Agra", rating: 5 },
        { name: "Rambagh Palace", location: "Jaipur", rating: 5 }
      ]
    },
    carOptions: [
      {
        id: "sedan",
        name: "Sedan (Dzire / Etios)",
        seats: "4 Passengers",
        luggage: "2 Large Bags",
        features: ["AC", "Music System", "Comfortable Seats"]
      },
      {
        id: "suv",
        name: "SUV (Ertiga / Innova)",
        seats: "6-7 Passengers",
        luggage: "4 Large Bags",
        features: ["AC", "Music System", "Extra Space", "USB Charging"]
      },
      {
        id: "traveller",
        name: "Tempo Traveller",
        seats: "12 Passengers",
        luggage: "8 Large Bags",
        features: ["AC", "Pushback Seats", "Extra Luggage Space", "Group Travel"]
      }
    ],
    inclusions: [
      "Accommodation in mentioned hotels",
      "Daily breakfast at hotels",
      "All transfers and sightseeing by private AC vehicle",
      "Professional English-speaking guide",
      "Monument entrance fees",
      "Driver allowances and fuel",
      "Toll tax and parking charges",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare / Train tickets",
      "Lunch and dinner (unless specified)",
      "Personal expenses (laundry, telephone, tips)",
      "Camera fees at monuments",
      "Travel insurance",
      "Any activities not mentioned in inclusions",
      "GST 5% extra"
    ],
    faqs: [
      {
        question: "What is the best time to visit the Golden Triangle?",
        answer: "The best time to visit is from October to March when the weather is pleasant. Avoid summer months (April-June) as temperatures can be very high."
      },
      {
        question: "Is this tour suitable for senior citizens?",
        answer: "Yes, the tour is designed to be comfortable for all age groups. We provide ample rest time and can customize the pace based on your needs."
      },
      {
        question: "Can I customize this itinerary?",
        answer: "Absolutely! We can customize the itinerary, hotel category, and add extra days or destinations as per your preferences."
      },
      {
        question: "What type of vehicle will be provided?",
        answer: "We provide air-conditioned vehicles based on group size - Sedan for up to 4 people, SUV for 6-7 people, or Tempo Traveller for larger groups."
      },
      {
        question: "Are meals included in the package?",
        answer: "Daily breakfast is included. Other meals can be added based on your preference at additional cost."
      },
      {
        question: "What should I pack for this tour?",
        answer: "Comfortable walking shoes, light cotton clothes, sunscreen, sunglasses, hat, and a camera. In winter months (Nov-Feb), carry light woolens."
      }
    ]
  };

  const relatedPackages = [
    {
      id: 2,
      title: "Rajasthan Heritage Tour",
      slug: "rajasthan-heritage-tour",
      duration: "8 Days",
      price: 45999,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80",
      rating: 4.7
    },
    {
      id: 3,
      title: "Delhi Agra Tour",
      slug: "delhi-agra-tour",
      duration: "3 Days",
      price: 12999,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80",
      rating: 4.6
    },
    {
      id: 4,
      title: "Jaipur Weekend Getaway",
      slug: "jaipur-weekend-getaway",
      duration: "2 Days",
      price: 8999,
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=400&q=80",
      rating: 4.5
    }
  ];

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in the ${packageData.title} package. Please send me more details.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCallInquiry = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <>
      <Helmet>
        <title>{packageData.title} | {packageData.duration} - India Package Tours</title>
        <meta name="description" content={packageData.description} />
        <meta name="keywords" content={`${packageData.title}, ${packageData.location}, India tour package`} />
        <link rel="canonical" href={`https://indiapackagetours.com/package/${packageData.slug}`} />
      </Helmet>

      <Header />

      <main className="min-h-screen pb-20">
        {/* Hero Image Carousel */}
        <section className="relative h-[60vh] bg-muted">
          <Carousel className="h-full">
            <CarouselContent>
              {packageData.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[60vh]">
                    <img
                      src={image}
                      alt={`${packageData.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          {/* Package Overview Card */}
          <Card className="p-6 md:p-8 shadow-elegant bg-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {packageData.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{packageData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{packageData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{packageData.rating}</span>
                    <span>({packageData.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <p className="text-4xl font-bold text-primary">₹{packageData.price.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">per person</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Best Time</p>
                  <p className="font-medium">{packageData.bestTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Ideal For</p>
                  <p className="font-medium">{packageData.idealFor}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Camera className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Tour Type</p>
                  <p className="font-medium">Private Guided</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Package Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{packageData.description}</p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {packageData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Itinerary */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Day-by-Day Itinerary</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {packageData.itinerary.map((day, index) => (
                    <AccordionItem key={index} value={`day-${day.day}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="text-left">
                          <span className="text-primary font-semibold">Day {day.day}</span>
                          <span className="ml-2">- {day.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 space-y-4">
                        <ul className="space-y-2">
                          {day.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-4 pt-3 border-t">
                          <div className="flex items-center gap-2 text-sm">
                            <UtensilsCrossed className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">Meals: {day.meals}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Hotel className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{day.accommodation}</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Hotel Options */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Accommodation Options</h2>
                <div className="flex gap-2 mb-4">
                  <Button
                    variant={selectedHotel === "3star" ? "default" : "outline"}
                    onClick={() => setSelectedHotel("3star")}
                  >
                    3 Star
                  </Button>
                  <Button
                    variant={selectedHotel === "4star" ? "default" : "outline"}
                    onClick={() => setSelectedHotel("4star")}
                  >
                    4 Star
                  </Button>
                  <Button
                    variant={selectedHotel === "5star" ? "default" : "outline"}
                    onClick={() => setSelectedHotel("5star")}
                  >
                    5 Star
                  </Button>
                </div>
                <div className="space-y-3">
                  {packageData.hotelOptions[selectedHotel as keyof typeof packageData.hotelOptions].map((hotel, index) => (
                    <Card key={index} className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Hotel className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{hotel.name}</p>
                          <p className="text-sm text-muted-foreground">{hotel.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(hotel.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Car Options */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Transportation Options</h2>
                <div className="space-y-3">
                  {packageData.carOptions.map((car) => (
                    <Card
                      key={car.id}
                      className={`p-4 cursor-pointer transition-all ${
                        selectedCar === car.id ? "border-primary shadow-card" : ""
                      }`}
                      onClick={() => setSelectedCar(car.id)}
                    >
                      <div className="flex items-start gap-4">
                        <Car className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <p className="font-semibold mb-1">{car.name}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                            <span>{car.seats}</span>
                            <span>{car.luggage}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {car.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Inclusions & Exclusions */}
              <section className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Inclusions
                  </h2>
                  <ul className="space-y-2">
                    {packageData.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    Exclusions
                  </h2>
                  <ul className="space-y-2">
                    {packageData.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Optional Add-ons */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Optional Add-ons</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-elegant transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Elephant Ride at Amber Fort</h3>
                      <Badge variant="outline">₹1,200</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Traditional elephant ride to the fort entrance</p>
                  </Card>
                  <Card className="p-4 hover:shadow-elegant transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Professional Photographer</h3>
                      <Badge variant="outline">₹2,500/day</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Capture your memories with professional photos</p>
                  </Card>
                  <Card className="p-4 hover:shadow-elegant transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Food Walking Tour</h3>
                      <Badge variant="outline">₹1,800</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Explore local street food and cuisine</p>
                  </Card>
                  <Card className="p-4 hover:shadow-elegant transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Hot Air Balloon Ride</h3>
                      <Badge variant="outline">₹12,000</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Aerial views of palaces and forts at sunrise</p>
                  </Card>
                  <Card className="p-4 hover:shadow-elegant transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Private Tour Guide</h3>
                      <Badge variant="outline">₹1,500/day</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Dedicated guide throughout your journey</p>
                  </Card>
                  <Card className="p-4 hover:shadow-elegant transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Cultural Evening Show</h3>
                      <Badge variant="outline">₹800</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Traditional folk dance and music performance</p>
                  </Card>
                </div>
              </section>

              {/* Route Map */}
              {/* <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Tour Route Map</h2>
                <div className="aspect-video rounded-lg overflow-hidden shadow-elegant mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3671061.674531373!2d75.34503447167283!3d27.83479644847612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!3m2!1d28.6139391!2d77.2090212!4m5!1s0x3973ab49e5d84507%3A0x30c60f0f2a2db08!2sJaipur%2C%20Rajasthan!3m2!1d26.9124336!2d75.7872709!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Golden Triangle Route Map"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  The tour covers the iconic Golden Triangle route: Delhi → Agra (via Yamuna Expressway) → Jaipur (via NH-21)
                </p>
              </section> */}

              {/* Previous Trip Gallery */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Previous Trip Gallery</h2>
                <p className="text-muted-foreground mb-4">Memories from our travelers' journeys</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {packageData.images.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                      <img
                        src={image}
                        alt={`Trip memory ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {packageData.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Related Packages */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Related Packages You May Like</h2>
                <Carousel className="w-full">
                  <CarouselContent className="-ml-4">
                    {relatedPackages.map((pkg) => (
                      <CarouselItem key={pkg.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <Link to={`/package/${pkg.slug}`}>
                          <Card className="overflow-hidden group hover:shadow-elegant transition-all">
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img
                                src={pkg.image}
                                alt={pkg.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute top-3 right-3">
                                <Badge className="bg-secondary text-secondary-foreground">
                                  <Star className="h-3 w-3 mr-1 fill-current" />
                                  {pkg.rating}
                                </Badge>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                {pkg.title}
                              </h3>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {pkg.duration}
                                </span>
                                <span className="font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                              </div>
                            </div>
                          </Card>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4" />
                  <CarouselNext className="-right-4" />
                </Carousel>
              </section>

              {/* CTA Banner */}
              <section className="rounded-lg overflow-hidden">
                <div className="bg-gradient-india p-8 text-center text-white">
                  <h2 className="text-3xl font-bold mb-3">Planning This Trip?</h2>
                  <p className="text-white/90 mb-6">Get the best price quote with customized itinerary</p>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 border-white"
                    onClick={() => setInquiryModalOpen(true)}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Get Free Quote Now
                  </Button>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card className="p-6 sticky top-20">
                <h3 className="text-xl font-bold text-foreground mb-4">Book This Tour</h3>
                <div className="space-y-4">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={() => setInquiryModalOpen(true)}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Get Free Quote
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={handleWhatsAppInquiry}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Inquiry
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={handleCallInquiry}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
                <div className="mt-6 pt-6 border-t space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Instant Confirmation
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Free Cancellation up to 48 hours
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    24/7 Customer Support
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border shadow-elegant z-50 lg:hidden">
        <div className="container mx-auto px-4 py-3 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={handleCallInquiry}>
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="flex-1" onClick={handleWhatsAppInquiry}>
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button variant="hero" size="sm" className="flex-1" onClick={() => setInquiryModalOpen(true)}>
            Get Free Quote
          </Button>
        </div>
      </div>

      <Footer />
      <InquiryModal
        open={inquiryModalOpen}
        onOpenChange={setInquiryModalOpen}
        defaultDestination={packageData.title}
      />
    </>
  );
};

export default PackageDetail;
