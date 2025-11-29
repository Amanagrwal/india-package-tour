import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
function Our_team() {

      const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      description: "20+ years in travel industry"
    },
    {
      name: "Priya Sharma",
      role: "Tour Operations Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      description: "Expert in destination management"
    },
    {
      name: "Amit Patel",
      role: "Customer Relations Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      description: "Ensuring exceptional experiences"
    }
  ];
  return (
    <>
       <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate travel experts dedicated to creating your perfect journey
              </p>
            </div>
           <div className="grid md:grid-cols-3 gap-10 mb-8">
  {team.map((member, index) => (
    <Card
      key={index}
      className="p-6 flex flex-col items-center text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4 border-4 border-white">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover scale-110 transition-all duration-300 hover:scale-125"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
      <p className="text-primary font-medium">{member.role}</p>
      <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
    </Card>
  ))}
</div>

            {/* <div className="text-center">
              <Link to="/team">
                <Button variant="hero" size="lg">
                  View Full Team
                </Button>
              </Link>
            </div> */}
          </div>
        </section>
    
    </>
  )
}

export default Our_team
