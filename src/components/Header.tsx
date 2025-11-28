import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import InquiryModal from "./InquiryModal";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tour Packages", href: "/packages" },
    { name: "Cities", href: "/cities" },
    // { name: "Travel Guide", href: "/guide" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
    
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-india text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+916367303200" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">+91 6367303200</span>
            </a>
            <a href="mailto:Indiapackagetours45@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline">Indiapackagetours45@gmail.com</span>
            </a>
          </div>
          <div className="text-xs md:text-sm font-medium">
            India's #1 Tour Package Provider
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="India Package Tours Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-foreground leading-tight">India Package Tours</div>
              <div className="text-xs text-muted-foreground">Explore Incredible India</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">

            <Button variant="hero" size="lg"
             onClick={() => setInquiryModalOpen(true)}
            >
              Book Now
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" size="lg" className="mt-2" onClick={() => setInquiryModalOpen(true)}>
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
    
     <InquiryModal
        open={inquiryModalOpen}
        onOpenChange={setInquiryModalOpen}
      />
    </>

  );
};

export default Header;
