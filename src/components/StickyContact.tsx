import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InquiryModal from "./InquiryModal";
import { FaWhatsapp } from "react-icons/fa";

interface StickyContactProps {
  onInquiryClick?: () => void;
}

const StickyContact = ({ onInquiryClick }: StickyContactProps) => {
            const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  
  return (
    <>
      {/* Sticky Bottom Bar - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-gradient-india text-white shadow-elegant">
        <div className="flex">
          <a
            href="tel:+919876543210"
            className="flex-1 flex items-center justify-center gap-2 py-3 hover:bg-black/10 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">Call</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 hover:bg-black/10 transition-colors border-x border-white/20"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
          <button 
                onClick={() => setInquiryModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 hover:bg-black/10 transition-colors"
          >
            <Send className="h-5 w-5" />
            <span className="font-medium">Enquiry</span>
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button - Desktop */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center justify-center w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-elegant hover:shadow-glow hover:scale-110 transition-all duration-300 animate-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>

      {/* Floating Call Button - Desktop */}
      <a
        href="tel:+916367303200"
        className="hidden md:flex fixed bottom-24 right-6 z-40 items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-elegant hover:shadow-glow hover:scale-110 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>

           <InquiryModal open={inquiryModalOpen} onOpenChange={setInquiryModalOpen} />

    </>
  );
};

export default StickyContact;
