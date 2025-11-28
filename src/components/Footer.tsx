import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tour Packages", href: "/packages" },
    { name: "Cities", href: "/cities" },
    { name: "Travel Guide", href: "/guide" },
    { name: "Contact Us", href: "/contact" },
  ];

  const popularDestinations = [
    { name: "Rajasthan Tours", href: "/packages?category=rajasthan" },
    { name: "Kerala Tours", href: "/packages?category=kerala" },
    { name: "Goa Tours", href: "/packages?category=goa" },
    { name: "Himachal Tours", href: "/packages?category=himachal" },
    { name: "Golden Triangle", href: "/packages?category=golden-triangle" },
    { name: "South India Tours", href: "/packages?category=south-india" },
  ];

  return (
    <footer className="bg-gradient-to-br from-tertiary via-tertiary-light to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="India Package Tours Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-white/90 leading-tight">India Package Tours</div>
              <div className="text-xs text-white/90 leading-tight">Explore Incredible India</div>
            </div>
          </Link>
            <p className="text-sm text-white/90 leading-relaxed">
              Your trusted partner for exploring the incredible beauty and rich heritage of India. We create memorable travel experiences with personalized service.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Popular Tours</h3>
            <ul className="space-y-2">
              {popularDestinations.map((dest) => (
                <li key={dest.name}>
                  <Link
                    to={dest.href}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/90">
                  123 Travel Street, New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-white/90 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@indiapackagetours.com" className="text-sm text-white/90 hover:text-white transition-colors">
                  info@indiapackagetours.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>© 2024 India Package Tours. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
