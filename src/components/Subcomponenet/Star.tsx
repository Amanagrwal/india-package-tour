import React from 'react'

function Star() {
  return (
     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "10,000+", label: "Happy Travelers" },
            { number: "500+", label: "Tour Packages" },
            { number: "50+", label: "Destinations" },
            { number: "4.8/5", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
  )
}

export default Star
