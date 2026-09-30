import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export default function SEO({ 
  title = "India Tour Packages | Best Travel Packages for India Tours 2024", 
  description = "Explore India with customized tour packages. Best prices for Golden Triangle, Rajasthan, Kerala, Goa tours. Book your dream India vacation today!", 
  keywords = "India tour packages, India travel, Rajasthan tours, Kerala tours, Golden Triangle tour, India vacation packages",
  url = "https://indiapackagetours.com",
  image = "https://indiapackagetours.com/og-image.jpg"
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
