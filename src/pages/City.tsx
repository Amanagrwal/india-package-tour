import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Destinations from '@/components/home/Destinations'
import StickyContact from '@/components/StickyContact'
import React from 'react'
import { Helmet } from 'react-helmet'

function City() {
    return (
        <>
            <Helmet>
                <title>About Us | India Package Tours - Leading Tour Operator Since 2008</title>
                <meta name="description" content="Learn about India Package Tours - your trusted partner for exploring India. With 15+ years of experience, we create unforgettable travel experiences across India." />
                <meta name="keywords" content="about India Package Tours, India tour operator, travel company India, about us" />
                <link rel="canonical" href="https://indiapackagetours.com/about" />
            </Helmet>

            <Header />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-primary via-primary-glow to-secondary text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                                cities India Package Tours
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                Explore India’s most iconic cities with our thoughtfully crafted tour packages.
                                From royal palaces to sacred temples, bustling markets to serene coastlines — every city tells a story.
                                Discover the culture, flavors, architecture, and vibrant spirit that makes India truly incredible.
                            </p>
                        </div>
                    </div>
                </section>

                 <Destinations showButton={false} />

            </main>
             <Footer />
      <StickyContact />
        </>
    )
}

export default City
