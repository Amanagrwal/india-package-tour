import React,{useState} from 'react'
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import InquiryModal from '../InquiryModal';

function CTA_Section() {
          const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    
  return (
    <>
     <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our travel experts are available to answer your questions and help you plan your trip.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
               
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Chat
                  </a>
                </Button>

                 <Button variant="hero" size="lg" 
                onClick={() => setInquiryModalOpen(true)}

                 >
                
                    <Phone className="mr-2 h-4 w-4" />
                    Book Your Trip 
                </Button>
              </div>
            </Card>
          </div>
        </section>
    
            <InquiryModal open={inquiryModalOpen} onOpenChange={setInquiryModalOpen} />

    </>
  )
}

export default CTA_Section
