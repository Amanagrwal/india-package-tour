import React from 'react'
import { CheckCircle2 } from "lucide-react";

function Why_choose_us() {

      const whyChooseUs = [
    "15+ years of experience in India tourism",
    "500+ successful tours conducted",
    "24/7 customer support during your trip",
    "Customized itineraries for every traveler",
    "Best price guarantee on all packages",
    "Certified and experienced tour guides",
    "Complete transparency - no hidden costs",
    "Flexible booking and cancellation policies"
  ];

  return (
    <>
     <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose India Package Tours?
                </h2>
                <p className="text-lg text-muted-foreground">
                  What makes us different from other tour operators
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Why_choose_us
