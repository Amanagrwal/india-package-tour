import React,{useState} from 'react'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import InquiryModal from '../InquiryModal';

function CTA_Section_internal() {
      const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    
  return (
   <>
    <section className="py-16 bg-gradient-to-br from-primary via-primary-glow to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore India?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you create an unforgettable journey through the incredible landscapes 
              and rich culture of India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setInquiryModalOpen(true)}
              >
                 Book your tour package
              </Button>
              <Link to="/packages">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  View Tour Packages
                </Button>
              </Link>
            </div>
          </div>
        </section>
         <InquiryModal open={inquiryModalOpen} onOpenChange={setInquiryModalOpen} />

   </>
  )
}

export default CTA_Section_internal
