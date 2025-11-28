import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import CTA_Section from "@/components/Subcomponenet/CTA_Section";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Prepare WhatsApp message
    const whatsappMessage = `*Contact Form Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Destination:* ${formData.destination || "Not specified"}%0A*Message:* ${formData.message || "None"}`;
    
    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, "_blank");
    
    toast.success("Message sent! We'll contact you soon.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Travel Street", "New Delhi, India 110001"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 11 1234 5678"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@indiapackagetours.com", "support@indiapackagetours.com"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 9 AM - 7 PM", "Sunday: 10 AM - 5 PM"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch - India Package Tours</title>
        <meta name="description" content="Contact India Package Tours for customized tour packages, booking inquiries, or any questions about traveling in India. We're here to help plan your perfect trip!" />
        <meta name="keywords" content="contact India Package Tours, tour booking inquiry, India travel contact, get in touch" />
        <link rel="canonical" href="https://indiapackagetours.com/contact" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-glow to-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Have questions? We're here to help you plan your perfect Indian adventure!
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destination">Interested Destination</Label>
                    <Input
                      id="destination"
                      placeholder="e.g., Rajasthan, Kerala, Golden Triangle"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your travel plans, questions, or requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" variant="hero" size="lg" className="flex-1">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of these channels. We're always happy to help!
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Find Us Here</h3>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-card">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129767866!2d77.04417225000001!3d28.527554450000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="India Package Tours Office Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
      <CTA_Section/>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
