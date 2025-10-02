import React, { useState, useEffect } from 'react';
import { Phone, Mail, Instagram, MapPin, ShoppingBag, Sparkles, Package, Gift, Pencil, UtensilsCrossed, Star, Menu, X } from 'lucide-react';
import { 
  trackPageView, 
  trackBusinessEvent, 
  trackContactInteraction, 
  trackProductInterest, 
  trackUserEngagement,
  trackLocationInteraction,
  trackSocialMediaClick,
  trackPromotionView,
  trackMenuInteraction,
  setUserAnalyticsProperties,
  startSession,
  trackSessionDuration
} from './firebase';

// Enhanced SEO Head Component
function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://baghyahomeneeds.site/#business",
        "name": "Baghya Home Needs",
        "description": "Your trusted neighborhood store in Madurai offering quality home essentials, gifts, toys, stationery, cookware, and more at unbeatable prices.",
        "url": "https://baghyahomeneeds.site/",
        "telephone": "+91-9344398253",
        "email": "baghyahomeneeds@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Koodal Flour Mill, Nagamalai",
          "addressLocality": "Madurai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "625019",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "9.9360148",
          "longitude": "78.0382207"
        },
        "openingHours": [
          "Monday 09:00-21:00",
          "Tuesday 09:00-21:00", 
          "Wednesday 09:00-21:00",
          "Thursday 09:00-21:00",
          "Friday 09:00-21:00",
          "Saturday 09:00-21:00",
          "Sunday 09:00-21:00"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "21:00"
          }
        ],
        "priceRange": "₹10-₹5000",
        "paymentAccepted": [
          "Cash",
          "UPI", 
          "GooglePay",
          "PhonePe",
          "Paytm",
          "CreditCard",
          "DebitCard"
        ],
        "currenciesAccepted": "INR",
        "image": [
          "https://baghyahomeneeds.site/logo.png",
          "https://baghyahomeneeds.site/web-app-manifest-512x512.png"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://baghyahomeneeds.site/logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://www.instagram.com/baghyahomeneeds4/",
          "https://wa.me/919344398253",
          "https://goo.gl/maps/baghyahomeneeds"
        ],
        "foundingDate": "2020",
        "numberOfEmployees": "5-10",
        "slogan": "Quality Products, Unbeatable Prices, Exceptional Service",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1200",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Madurai",
            "sameAs": "https://en.wikipedia.org/wiki/Madurai"
          },
          {
            "@type": "State", 
            "name": "Tamil Nadu",
            "sameAs": "https://en.wikipedia.org/wiki/Tamil_Nadu"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "9.9360148",
            "longitude": "78.0382207"
          },
          "geoRadius": "25000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Home Essentials Catalog",
          "itemListElement": [
            {
              "@type": "OfferCatalogItem",
              "category": "Home & Garden"
            },
            {
              "@type": "OfferCatalogItem", 
              "category": "Toys & Games"
            },
            {
              "@type": "OfferCatalogItem",
              "category": "Office Supplies"
            },
            {
              "@type": "OfferCatalogItem",
              "category": "Kitchen & Dining"
            }
          ]
        },
        "event": {
          "@type": "Event",
          "name": "Diwali Special Offers",
          "description": "Special Diwali discounts on all home essentials at Baghya Home Needs",
          "startDate": "2025-10-01",
          "endDate": "2025-11-15",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Baghya Home Needs",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Koodal Flour Mill, Nagamalai Pudukottai",
              "addressLocality": "Madurai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "625019",
              "addressCountry": "IN"
            }
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://baghyahomeneeds.site/#website",
        "url": "https://baghyahomeneeds.site/",
        "name": "Baghya Home Needs",
        "description": "Madurai's trusted store for home essentials, gifts, and more",
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://baghyahomeneeds.site/?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://baghyahomeneeds.site/#organization",
        "name": "Baghya Home Needs",
        "url": "https://baghyahomeneeds.site/",
        "logo": "https://baghyahomeneeds.site/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9344398253",
          "contactType": "customer service",
          "availableLanguage": ["English", "Tamil", "Hindi"],
          "areaServed": "Madurai"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Koodal Flour Mill, Nagamalai",
          "addressLocality": "Madurai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "625019",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href="https://baghyahomeneeds.site/" />
      
      {/* Primary Meta Tags */}
      <title>Baghya Home Needs | #1 Premium Home Essentials Store in Madurai | Diwali Special Offers 2025</title>
      <meta name="title" content="Baghya Home Needs | #1 Premium Home Essentials Store in Madurai | Diwali Special Offers 2025" />
      <meta name="description" content="🏆 Madurai's most trusted home essentials store since 2020! 🎉 Special Diwali offers on premium plastics, educational toys, quality stationery, durable cookware & unique gifts. ⭐ 4.9★ rated by 1200+ families | 📍 Nagamalai Pudukottai | 📞 9344398253 | 🕘 Open All Days 9AM-9PM | 🚚 Best prices guaranteed with home delivery!" />
      <meta name="keywords" content="Baghya Home Needs Madurai, premium home essentials Madurai, Diwali festival offers 2025, plastic containers storage Madurai, educational toys children Madurai, school office stationery Madurai, stainless steel cookware Madurai, unique gifts Madurai, Nagamalai Pudukottai shopping, home needs store Tamil Nadu, quality household products Madurai, affordable home essentials, bulk purchase discounts Madurai, home delivery Madurai, family store Tamil Nadu, kitchenware Madurai, storage solutions Madurai" />
      <meta name="author" content="Baghya Home Needs Team" />
      <meta name="publisher" content="Baghya Home Needs" />
      <meta name="copyright" content="© 2025 Baghya Home Needs. All rights reserved." />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, noimageindex" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Business Information */}
      <meta name="business-type" content="Retail Store" />
      <meta name="business-hours" content="Daily 9:00AM-9:00PM | All 7 Days Open" />
      <meta name="opening-hours" content="Mo-Su 09:00-21:00" />
      <meta name="store-timing" content="Open All Days: Monday to Sunday 9 AM to 9 PM" />
      <meta name="payment-methods" content="Cash, UPI, Digital Payments" />
      <meta name="delivery-area" content="Madurai, Tamil Nadu" />
      <meta name="establishment-year" content="2020" />
      <meta name="customer-rating" content="4.9/5" />
      <meta name="total-customers" content="1200+" />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Baghya Home Needs" />
      
      {/* Language and Location */}
      <meta httpEquiv="Content-Language" content="en-IN" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Madurai" />
      <meta name="geo.position" content="9.9360148;78.0382207" />
      <meta name="ICBM" content="9.9360148, 78.0382207" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://baghyahomeneeds.site/" />
      <meta property="og:title" content="Baghya Home Needs | Premium Home Essentials Store in Madurai | Diwali Offers 2025" />
      <meta property="og:description" content="🎉 Exclusive Diwali 2025 offers on premium home essentials! ⭐ 4.9★ rated by 1200+ families in Madurai. 🏆 Quality plastics, toys, stationery, cookware & gifts. 📍 Nagamalai Pudukottai | � Open All Days 9AM-9PM | �🚚 Home delivery available!" />
      <meta property="og:image" content="https://baghyahomeneeds.site/web-app-manifest-512x512.png" />
      <meta property="og:image:secure_url" content="https://baghyahomeneeds.site/web-app-manifest-512x512.png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Baghya Home Needs - Madurai's Most Trusted Home Essentials Store Since 2020" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="Baghya Home Needs" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="ta_IN" />
      <meta property="og:updated_time" content="2025-10-02T00:00:00+05:30" />
      <meta property="business:contact_data:street_address" content="Near Koodal Flour Mill, Nagamalai" />
      <meta property="business:contact_data:locality" content="Madurai" />
      <meta property="business:contact_data:region" content="Tamil Nadu" />
      <meta property="business:contact_data:postal_code" content="625019" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:phone_number" content="+91-9344398253" />
      <meta property="business:contact_data:email" content="baghyahomeneeds@gmail.com" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://baghyahomeneeds.site/" />
      <meta name="twitter:title" content="Baghya Home Needs | Premium Home Essentials Store Madurai | Diwali 2025 Offers" />
      <meta name="twitter:description" content="🎉 Exclusive Diwali 2025 offers! ⭐ 4.9★ rated by 1200+ families. Premium home essentials, toys, cookware & gifts. 📍 Nagamalai, Madurai � Open All Days 9AM-9PM �🚚 Home delivery!" />
      <meta name="twitter:image" content="https://baghyahomeneeds.site/web-app-manifest-512x512.png" />
      <meta name="twitter:image:alt" content="Baghya Home Needs - Madurai's Most Trusted Home Essentials Store" />
      <meta name="twitter:creator" content="@baghyahomeneeds4" />
      <meta name="twitter:site" content="@baghyahomeneeds4" />
      <meta name="twitter:domain" content="baghyahomeneeds.site" />
      <meta name="twitter:label1" content="Rating" />
      <meta name="twitter:data1" content="4.9/5 ⭐" />
      <meta name="twitter:label2" content="Location" />
      <meta name="twitter:data2" content="Nagamalai, Madurai" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#ec4899" />
      <meta name="msapplication-navbutton-color" content="#ec4899" />
      <meta name="msapplication-TileColor" content="#ec4899" />
      <meta name="application-name" content="Baghya Home Needs" />
      
      {/* Performance & SEO Optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//firebase.googleapis.com" />
      <link rel="dns-prefetch" href="//firebaseapp.com" />
      
      {/* Structured Data Preload */}
      <link rel="preload" as="script" href="/structured-data.json" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Rich Snippets Support */}
      <meta name="article:author" content="Baghya Home Needs Team" />
      <meta name="article:publisher" content="Baghya Home Needs" />
      <meta name="article:modified_time" content="2025-10-02T00:00:00+05:30" />
      
      {/* Local SEO Enhancement */}
      <meta name="locality" content="Nagamalai Pudukottai" />
      <meta name="region" content="Madurai District" />
      <meta name="country" content="India" />
      <meta name="zip-code" content="625019" />
      <meta name="coordinates" content="9.9360148, 78.0382207" />
      
      {/* Canonical and Alternate */}
      <link rel="canonical" href="https://baghyahomeneeds.site/" />
      <link rel="alternate" hrefLang="en-in" href="https://baghyahomeneeds.site/" />
      <link rel="alternate" hrefLang="ta-in" href="https://baghyahomeneeds.site/" />
      
      {/* Favicons and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/favicon.svg" color="#ec4899" />
      
      {/* Microsoft/Windows specific */}
      <meta name="msapplication-TileImage" content="/web-app-manifest-192x192.png" />
      <meta name="msapplication-square70x70logo" content="/favicon-96x96.png" />
      <meta name="msapplication-square150x150logo" content="/web-app-manifest-192x192.png" />
      <meta name="msapplication-square310x310logo" content="/web-app-manifest-512x512.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Safari specific */}
      <link rel="apple-touch-startup-image" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Baghya Home Needs" />
      
      {/* Android Chrome specific */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-title" content="Baghya Home Needs" />
      
      {/* Opera Coast specific */}
      <link rel="icon" type="image/png" sizes="228x228" href="/web-app-manifest-192x192.png" />
      
      {/* UC Browser specific */}
      <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Yandex Browser specific */}
      <meta name="yandex-tableau-widget" content="/favicon-96x96.png" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://wa.me" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.instagram.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional Business Info for Search Engines */}
      <meta name="business-hours" content="Monday-Sunday: 9:00 AM - 9:00 PM" />
      <meta name="price-range" content="₹10-₹5000" />
      <meta name="payment-methods" content="Cash, UPI, Credit Card, Debit Card" />
      <meta name="categories" content="Home & Garden Store, Gift Shop, Toy Store, Stationery Store" />
      
      {/* Local Business Signals */}
      <meta name="locality" content="Nagamalai Pudukottai, Madurai, Tamil Nadu 625019" />
      <meta name="region" content="South India" />
      <meta name="country" content="India" />
    </>
  );
}

export default function BaghyaHomeNeeds() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize Firebase Analytics on component mount
  useEffect(() => {
    // Start session tracking
    startSession();
    
    // Set user properties for analytics
    setUserAnalyticsProperties();
    
    // Track initial page view
    trackPageView('Baghya Home Needs - Home');
    
    // Track business event for website visit
    trackBusinessEvent('website_visit', {
      source: 'direct',
      landing_page: 'home'
    });

    // Track promotion view for Diwali offers
    trackPromotionView('Diwali Special Offers 2025');
    
    // Track session duration on page unload
    const handleBeforeUnload = () => {
      trackSessionDuration();
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      trackSessionDuration(); // Also track on component unmount
    };
  }, []);

  // Track contact conversion when CTA buttons are clicked
  const trackContactConversion = (contactMethod = 'unknown', contactValue = '') => {
    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-328295651/5Q-OCK7kgqUbEOPJxZwB',
        'value': 1.0,
        'currency': 'INR'
      });
    }
    
    // Firebase Analytics tracking
    trackContactInteraction(contactMethod, contactValue);
    trackBusinessEvent('contact_attempt', {
      contact_method: contactMethod,
      contact_value: contactValue
    });
  };

  useEffect(() => {
    let scrollTrackingTimeout;
    const scrollMilestones = { 25: false, 50: false, 75: false, 90: false };
    
    const handleScroll = () => {
      // Track scroll depth for engagement analytics
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      // Clear previous timeout
      clearTimeout(scrollTrackingTimeout);
      
      // Set new timeout to avoid too many events
      scrollTrackingTimeout = setTimeout(() => {
        // Track scroll milestones
        Object.keys(scrollMilestones).forEach(milestone => {
          if (scrollPercent >= parseInt(milestone) && !scrollMilestones[milestone]) {
            scrollMilestones[milestone] = true;
            trackUserEngagement('scroll_depth', `${milestone}%`);
          }
        });
      }, 1000);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Section view tracking with Intersection Observer
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            trackBusinessEvent('section_view', {
              section: sectionName,
              timestamp: new Date().toISOString()
            });
            trackUserEngagement('section_engagement', sectionName);
          }
        }
      });
    }, { threshold: 0.5 });
    
    // Observe sections
    setTimeout(() => {
      document.querySelectorAll('[data-section]').forEach(section => {
        sectionObserver.observe(section);
      });
    }, 1000);
    
    // SEO Performance Optimizations
    // Preload critical resources
    const preloadResources = [
      { href: '/logo.png', as: 'image' },
      { href: '/favicon-96x96.png', as: 'image' },
      { href: '/apple-touch-icon.png', as: 'image' },
      { href: '/web-app-manifest-192x192.png', as: 'image' },
      { href: '/web-app-manifest-512x512.png', as: 'image' }
    ];
    
    const preloadLinks = preloadResources.map(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
      return link;
    });
    
    // Add structured data for breadcrumbs
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://baghyahomeneeds.site/"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Madurai Stores",
          "item": "https://baghyahomeneeds.site/#madurai"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Home Essentials",
          "item": "https://baghyahomeneeds.site/#products"
        }
      ]
    };
    
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);
    
    // Add FAQ structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What products do you sell at Baghya Home Needs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer a wide range of home essentials including plastic containers, toys, stationery, cookware, gifts, fancy items like chains and bangles, and much more. Everything you need for your home at the best prices in Madurai."
          }
        },
        {
          "@type": "Question", 
          "name": "Where is Baghya Home Needs located in Madurai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are located at Near Koodal Flour Mill, Nagamalai Pudukottai, Madurai, Tamil Nadu 625019. You can easily find us using Google Maps or call us at 9344398253 for directions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Diwali special discounts?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Yes! We have special Diwali offers running on all our products. Visit our store or contact us on WhatsApp at 9344398253 to know about current discounts and deals."
          }
        },
        {
          "@type": "Question",
          "name": "What are your store timings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open Monday to Sunday from 9:00 AM to 9:00 PM. You can visit us anytime during these hours or call us at 9344398253."
          }
        }
      ]
    };
    
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Product Catalog Schema
    const productCatalogSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Baghya Home Needs Product Catalog",
      "description": "Complete range of home essentials, toys, stationery, cookware and gifts",
      "url": "https://baghyahomeneeds.site/#products",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "ProductGroup",
            "name": "Premium Plastic Products",
            "description": "High-quality storage containers, buckets, mugs and kitchen organizers",
            "category": "Home & Garden > Kitchen & Dining > Food Storage",
            "brand": "Baghya Home Needs",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "250",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "10",
              "highPrice": "500",
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "item": {
            "@type": "ProductGroup",
            "name": "Educational Toys",
            "description": "Fun and educational toys for children of all ages",
            "category": "Toys & Games > Educational Toys",
            "brand": "Baghya Home Needs",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "180",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR", 
              "lowPrice": "50",
              "highPrice": "2000",
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "ProductGroup",
            "name": "Stationery Supplies",
            "description": "Complete range of school and office stationery supplies",
            "category": "Office Products > Office & School Supplies",
            "brand": "Baghya Home Needs",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "320",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "5",
              "highPrice": "500", 
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "ProductGroup", 
            "name": "Premium Cookware",
            "description": "Stainless steel, iron and high-quality kitchen utensils",
            "category": "Home & Garden > Kitchen & Dining > Cookware",
            "brand": "Baghya Home Needs",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "100",
              "highPrice": "5000",
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "ProductGroup",
            "name": "Unique Gifts",
            "description": "Perfect gift items for every occasion and celebration", 
            "category": "Home & Garden > Decor > Decorative Objects",
            "brand": "Baghya Home Needs",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "200",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "25",
              "highPrice": "1000",
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "ProductGroup",
            "name": "Fancy Accessories",
            "description": "Chains, bangles, earrings and fashion accessories",
            "category": "Clothing, Shoes & Jewelry > Jewelry > Fashion",
            "brand": "Baghya Home Needs",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "95",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "15",
              "highPrice": "800",
              "availability": "https://schema.org/InStock"
            }
          }
        }
      ]
    };

    const productScript = document.createElement('script');
    productScript.type = 'application/ld+json';
    productScript.text = JSON.stringify(productCatalogSchema);
    document.head.appendChild(productScript);

    // Review Schema for Enhanced SEO
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review", 
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Baghya Home Needs",
        "image": "https://baghyahomeneeds.site/web-app-manifest-512x512.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Koodal Flour Mill, Nagamalai Pudukottai",
          "addressLocality": "Madurai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "625019",
          "addressCountry": "IN"
        },
        "telephone": "+91-9344398253"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Satisfied Customer"
      },
      "reviewBody": "Excellent quality products at unbeatable prices. Great service and wide variety of home essentials. Highly recommended for all household needs in Madurai.",
      "publisher": {
        "@type": "Organization",
        "name": "Baghya Home Needs"
      }
    };

    const reviewScript = document.createElement('script');
    reviewScript.type = 'application/ld+json';
    reviewScript.text = JSON.stringify(reviewSchema);
    document.head.appendChild(reviewScript);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
      clearTimeout(scrollTrackingTimeout);
      // Cleanup scripts and preload links
      preloadLinks.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
      if (document.head.contains(breadcrumbScript)) {
        document.head.removeChild(breadcrumbScript);
      }
      if (document.head.contains(faqScript)) {
        document.head.removeChild(faqScript);
      }
      if (document.head.contains(productScript)) {
        document.head.removeChild(productScript);
      }
      if (document.head.contains(reviewScript)) {
        document.head.removeChild(reviewScript);
      }
    };
  }, []);

  const categories = [
    {
      icon: Package,
      title: "Plastics",
      items: "Buckets, Mugs, Storage Containers, Organizers, Kitchen & Home Essentials",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Gift,
      title: "Toys",
      items: "Fun & Educational Toys for All Ages",
      gradient: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: Pencil,
      title: "Stationery",
      items: "Complete Range of School & Office Supplies",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Gift,
      title: "Gifts",
      items: "Perfect Gift Items for Every Occasion",
      gradient: "from-pink-600 to-rose-600"
    },
    {
      icon: Sparkles,
      title: "Fancy Items",
      items: "Chains, Bangles, Earrings & More",
      gradient: "from-pink-500 to-fuchsia-500"
    },
    {
      icon: UtensilsCrossed,
      title: "Cookware",
      items: "Stainless Steel, Iron, Kitchen Utensils",
      gradient: "from-rose-600 to-pink-600"
    }
  ];

  const features = [
    { icon: Star, text: "Quality Products" },
    { icon: ShoppingBag, text: "Wide Selection" },
    { icon: Sparkles, text: "Great Prices" }
  ];

  // Using custom logo from public folder
  const logoUrl = `${process.env.PUBLIC_URL}/logo.png`; // Your custom logo

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Head for improved Google discoverability */}
      <SEOHead />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919344398253"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackContactConversion('whatsapp', '9344398253');
          trackSocialMediaClick('whatsapp');
          trackUserEngagement('floating_button_click', 'whatsapp');
        }}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group animate-float"
        aria-label="Chat on WhatsApp - We're here to help!"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      </a>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg py-4 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Your Custom Logo */}
              <img 
                src={logoUrl} 
                alt="Baghya Home Needs Logo"
                className="h-12 md:h-16 hover:scale-105 transition-transform duration-300 cursor-pointer"
                loading="eager"
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9IiNlYzQ4OTkiLz48dGV4dCB4PSIxMDAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CYWdoeWEgSG9tZSBOZWVkczwvdGV4dD48L3N2Zz4=';
                }}
              />
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a 
                href="tel:9344398253" 
                onClick={() => {
                  trackContactConversion('phone', '9344398253');
                  trackMenuInteraction('call_button', false);
                }}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-medium hover:scale-105 transform"
                aria-label="Call us at 9344398253"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call Us
              </a>
              <a 
                href="https://www.instagram.com/baghyahomeneeds4/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  trackSocialMediaClick('instagram');
                  trackMenuInteraction('instagram_button', false);
                }}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-medium hover:scale-105 transform"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 inline mr-2" />
                Follow
              </a>
              <a 
                href="mailto:baghyahomeneeds@gmail.com"
                onClick={() => {
                  trackContactConversion('email', 'baghyahomeneeds@gmail.com');
                  trackMenuInteraction('email_button', false);
                }}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-medium hover:scale-105 transform"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Email
              </a>
              <a
                href="https://www.google.com/maps/dir//Near+koodal+flour+mill,nagamalai,+madurai-19,+Madurai,+Tamil+Nadu+625019/@9.9360047,77.9558188,12z/data=!4m8!4m7!1m0!1m5!1s0x3b00cfb83fa32d4b:0xae8ede0ed194e73c!2m2!1d78.0382207!2d9.9360148?authuser=2&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackLocationInteraction();
                  trackMenuInteraction('directions_button', false);
                  trackBusinessEvent('directions_request');
                }}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-medium hover:scale-105 transform"
                aria-label="Get directions to our store"
              >
                <MapPin className="w-5 h-5 inline mr-2" />
                Directions
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                trackMenuInteraction('hamburger_menu', true);
                trackUserEngagement('mobile_menu_toggle', mobileMenuOpen ? 'close' : 'open');
              }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-2">
              <a 
                href="tel:9344398253" 
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 rounded-lg mx-2"
                onClick={() => {
                  setMobileMenuOpen(false); 
                  trackContactConversion('phone', '9344398253');
                  trackMenuInteraction('call_button', true);
                }}
                aria-label="Call us at 9344398253"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a 
                href="https://www.instagram.com/baghyahomeneeds4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 rounded-lg mx-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackSocialMediaClick('instagram');
                  trackMenuInteraction('instagram_button', true);
                }}
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </a>
              <a 
                href="mailto:baghyahomeneeds@gmail.com"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 rounded-lg mx-2"
                onClick={() => {
                  setMobileMenuOpen(false); 
                  trackContactConversion('email', 'baghyahomeneeds@gmail.com');
                  trackMenuInteraction('email_button', true);
                }}
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <a
                href="https://www.google.com/maps/dir//Near+koodal+flour+mill,nagamalai,+madurai-19,+Madurai,+Tamil+Nadu+625019/@9.9360047,77.9558188,12z/data=!4m8!4m7!1m0!1m5!1s0x3b00cfb83fa32d4b:0xae8ede0ed194e73c!2m2!1d78.0382207!2d9.9360148?authuser=2&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASALQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 rounded-lg mx-2"
                onClick={() => {setMobileMenuOpen(false); trackContactConversion();}}
                aria-label="Get directions to our store"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main>
      <section data-section="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50" itemScope itemType="https://schema.org/Store">
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg animate-bounce hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-4 h-4 animate-spin" />
                SPECIAL DIWALI OFFERS
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" itemProp="name">
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Celebrate Diwali
                </span>
                <br />
                <span className="text-gray-800">with Style &amp; Savings</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed" itemProp="description">
                Your trusted neighborhood store in Madurai offering quality products for every home need. Serving families since years with unbeatable prices and exceptional service.
              </p>
              
              {/* Store Hours Highlight */}
              <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-800 px-6 py-3 rounded-full text-lg font-semibold mb-12 shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Open All Days: 9 AM - 9 PM</span>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                  href="https://wa.me/919344398253"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackContactConversion('whatsapp', '9344398253');
                    trackSocialMediaClick('whatsapp');
                    trackUserEngagement('hero_cta_click', 'whatsapp');
                  }}
                  className="group bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl btn-hover"
                  aria-label="WhatsApp Us - Quick Response Guaranteed"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="tel:9344398253"
                  onClick={() => {
                    trackContactConversion('phone', '9344398253');
                    trackUserEngagement('hero_cta_click', 'phone');
                  }}
                  className="bg-white hover:bg-gray-50 text-pink-600 border-2 border-pink-500 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg btn-hover"
                  aria-label="Call Now - Immediate Assistance"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </a>
                {/* Google Map Directions Button */}
                <a
                  href="https://www.google.com/maps/dir//Near+koodal+flour+mill,nagamalai,+madurai-19,+Madurai,+Tamil+Nadu+625019/@9.9360047,77.9558188,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00cfb83fa32d4b:0xae8ede0ed194e73c!2m2!1d78.0382207!2d9.9360148?authuser=2&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackLocationInteraction();
                    trackUserEngagement('hero_cta_click', 'directions');
                    trackBusinessEvent('directions_request', { source: 'hero' });
                  }}
                  className="bg-white hover:bg-gray-50 text-pink-600 border-2 border-pink-500 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
                  aria-label="Google Map Directions"
                >
                  <MapPin className="w-6 h-6" />
                  <span>Get Directions</span>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-gray-600">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-pink-500" />
                      <span className="font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/AboutPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Welcome to
                  </span>
                  <br />
                  <span className="text-gray-800" itemProp="name">Baghya Home Needs</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Your trusted neighborhood destination in Nagamalai Pudukottai, Madurai. We pride ourselves on offering a comprehensive selection of quality home essentials, from kitchen basics to festive decorations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Experience personalized service and discover unbeatable Diwali discounts across all our product categories. Visit our store today and bring home quality at the best prices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-pink-50 border-l-4 border-pink-500 px-6 py-4 rounded-r-lg">
                    <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Visit Our Store</p>
                      <p className="text-gray-600">Nagamalai Pudukottai, Madurai</p>
                      {/* Google Map Directions */}
                      <a
                        href="https://www.google.com/maps/dir//Near+koodal+flour+mill,nagamalai,+madurai-19,+Madurai,+Tamil+Nadu+625019/@9.9360047,77.9558188,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00cfb83fa32d4b:0xae8ede0ed194e73c!2m2!1d78.0382207!2d9.9360148?authuser=2&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 underline font-medium hover:text-pink-800"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                  
                  {/* Store Hours */}
                  <div className="flex items-center gap-3 bg-green-50 border-l-4 border-green-500 px-6 py-4 rounded-r-lg">
                    <div className="w-6 h-6 text-green-600 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Store Hours</p>
                      <p className="text-gray-600">Open All Days: 9:00 AM - 9:00 PM</p>
                      <p className="text-sm text-green-600 font-medium">📅 Monday to Sunday | 🕘 12 Hours Daily</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Wide Selection</h3>
                        <p className="text-gray-600 text-sm">Everything you need under one roof</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Quality Products</h3>
                        <p className="text-gray-600 text-sm">Trusted brands and premium quality</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Best Prices</h3>
                        <p className="text-gray-600 text-sm">Competitive prices with great offers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section data-section="products" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50" itemScope itemType="https://schema.org/ItemList">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" itemProp="name">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Our Product Range
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our diverse collection of quality products for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  onClick={() => {
                    trackProductInterest(category.title);
                    trackUserEngagement('product_category_click', category.title);
                    trackBusinessEvent('product_category_view', {
                      category: category.title,
                      items: category.items
                    });
                  }}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 hover:scale-102 cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${category.gradient} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-8 -translate-y-8">
                      <Icon className="w-48 h-48" />
                    </div>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <Icon className="w-16 h-16 text-white mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-3xl font-bold text-white relative z-10">{category.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{category.items}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-section="cta" className="py-20 bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-xl">
              🪔 LIMITED TIME DIWALI SALE 🪔
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Visit Us Today &amp;<br/>Grab Amazing Deals!
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-pink-100 leading-relaxed">
              Light up your home this Diwali with our exclusive collection and unbeatable discounts on all products
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://wa.me/919344398253"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackContactConversion('whatsapp', '9344398253');
                  trackSocialMediaClick('whatsapp');
                  trackUserEngagement('cta_section_click', 'whatsapp');
                }}
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              
              <a
                href="tel:9344398253"
                onClick={() => {
                  trackContactConversion('phone', '9344398253');
                  trackUserEngagement('cta_section_click', 'phone');
                }}
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                aria-label="Call"
              >
                <Phone className="w-6 h-6" />
                Call
              </a>
              
              <a
                href="mailto:baghyahomeneeds@gmail.com"
                onClick={() => {
                  trackContactConversion('email', 'baghyahomeneeds@gmail.com');
                  trackUserEngagement('cta_section_click', 'email');
                }}
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
                Email
              </a>
              
              <a
                href="https://www.instagram.com/baghyahomeneeds4/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </a>
              {/* CTA Map Directions */}
              <a
                href="https://www.google.com/maps/dir//Near+koodal+flour+mill,nagamalai,+madurai-19,+Madurai,+Tamil+Nadu+625019/@9.9360047,77.9558188,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00cfb83fa32d4b:0xae8ede0ed194e73c!2m2!1d78.0382207!2d9.9360148?authuser=2&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackContactConversion}
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                aria-label="Directions"
              >
                <MapPin className="w-6 h-6" />
                Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed Section */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/Map">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Find Us On Google Maps</h2>
            <p className="mb-8 text-gray-600">Get directions to our store easily using Google Maps!</p>
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-pink-100">
              <iframe
                title="Baghya Home Needs Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62119.22840539767!2d77.9558188!3d9.9360047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfb83fa32d4b%3A0xae8ede0ed194e73c!2sNear%20koodal%20flour%20mill%2C%20nagamalai%2C%20madurai-19%2C%20Madurai%2C%20Tamil%20Nadu%20625019!5e0!3m2!1sen!2sin!4v1701372492682!5m2!1sen!2sin"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="mt-6">
              <a
                href="https://www.google.com/maps/dir//Near+koodal+flour+mill,nagamalai,+madurai-19,+Madurai,+Tamil+Nadu+625019/@9.9360047,77.9558188,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00cfb83fa32d4b:0xae8ede0ed194e73c!2m2!1d78.0382207!2d9.9360148?authuser=2&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl text-lg mx-auto w-fit"
                aria-label="Google Map Directions"
              >
                <MapPin className="w-6 h-6" />
                Get Google Map Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-section="footer" className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
            <div>
              {/* Store Name */}
              <h3 className="text-2xl font-bold text-white mb-6">Baghya Home Needs</h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for all home essentials in Madurai. Quality products, great prices, exceptional service.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-pink-500 flex-shrink-0" />
                  <span>Nagamalai Pudukottai, Madurai</span>
                  <a
                    href="https://www.google.com/maps/dir//Near+koodal+flour+mill,nagamalai,+madurai-19,+Madurai,+Tamil+Nadu+625019/@9.9360047,77.9558188,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00cfb83fa32d4b:0xae8ede0ed194e73c!2m2!1d78.0382207!2d9.9360148?authuser=2&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 underline font-medium hover:text-pink-400 ml-2"
                  >
                    Directions
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <a href="tel:9344398253" className="hover:text-pink-400 transition-colors">
                    9344398253
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <a href="mailto:baghyahomeneeds@gmail.com" className="hover:text-pink-400 transition-colors break-all">
                    baghyahomeneeds@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Store Hours</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Open All Days</span>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 font-semibold text-lg">9:00 AM - 9:00 PM</p>
                  <p className="text-gray-400 text-sm">Monday to Sunday</p>
                  <p className="text-gray-400 text-sm">📅 365 Days a Year</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>
              <a
                href="https://www.instagram.com/baghyahomeneeds4/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-semibold">@baghyahomeneeds4</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">&copy; 2025 Baghya Home Needs. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}