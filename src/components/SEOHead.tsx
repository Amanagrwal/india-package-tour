import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "India Tour Packages | Best Travel Packages for India Tours 2024",
  description = "Explore India with customized tour packages. Best prices for Golden Triangle, Rajasthan, Kerala, Goa tours. Book your dream India vacation today!",
  keywords = "India tour packages, India travel, Rajasthan tours, Kerala tours, Golden Triangle tour, India vacation packages",
  canonical = "https://indiapackagetours.com",
  ogImage = "https://indiapackagetours.com/og-image.jpg"
}: SEOHeadProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "India Package Tours",
    "description": "Leading tour operator for India travel packages",
    "url": "https://indiapackagetours.com",
    "logo": "https://indiapackagetours.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Travel Street",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "info@indiapackagetours.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://facebook.com/indiapackagetours",
      "https://instagram.com/indiapackagetours",
      "https://twitter.com/indiapackagetours"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://indiapackagetours.com"
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
