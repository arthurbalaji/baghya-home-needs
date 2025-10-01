// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, setUserProperties } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqtOA59V_IZs98CSGGU1vu_BW2mr_A_no",
  authDomain: "baghya-home-needs.firebaseapp.com",
  projectId: "baghya-home-needs",
  storageBucket: "baghya-home-needs.firebasestorage.app",
  messagingSenderId: "812709205623",
  appId: "1:812709205623:web:9e9be9121b705418621872",
  measurementId: "G-8G3VC9QLNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Custom analytics functions for detailed tracking
export const trackPageView = (pageName) => {
  logEvent(analytics, 'page_view', {
    page_title: pageName,
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export const trackBusinessEvent = (eventName, parameters = {}) => {
  logEvent(analytics, eventName, {
    ...parameters,
    business_name: 'Baghya Home Needs',
    location: 'Madurai, Tamil Nadu',
    timestamp: new Date().toISOString()
  });
};

export const trackContactInteraction = (contactMethod, contactValue) => {
  logEvent(analytics, 'contact_interaction', {
    contact_method: contactMethod,
    contact_value: contactValue,
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export const trackProductInterest = (productCategory) => {
  logEvent(analytics, 'product_interest', {
    product_category: productCategory,
    business_section: 'product_showcase',
    timestamp: new Date().toISOString()
  });
};

export const trackUserEngagement = (engagementType, engagementValue) => {
  logEvent(analytics, 'user_engagement', {
    engagement_type: engagementType,
    engagement_value: engagementValue,
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export const trackBusinessInfo = (infoType, infoValue) => {
  logEvent(analytics, 'business_info_view', {
    info_type: infoType,
    info_value: infoValue,
    timestamp: new Date().toISOString()
  });
};

export const trackLocationInteraction = () => {
  logEvent(analytics, 'location_interaction', {
    business_location: 'Near Koodal Flour Mill, Nagamalai Pudukottai, Madurai',
    timestamp: new Date().toISOString()
  });
};

export const trackSocialMediaClick = (platform) => {
  logEvent(analytics, 'social_media_click', {
    platform: platform,
    business_account: platform === 'instagram' ? '@baghyahomeneeds4' : 'unknown',
    timestamp: new Date().toISOString()
  });
};

export const trackPromotionView = (promotionName) => {
  logEvent(analytics, 'promotion_view', {
    promotion_name: promotionName,
    promotion_period: 'Diwali 2025',
    timestamp: new Date().toISOString()
  });
};

export const trackMenuInteraction = (menuItem, isMobile = false) => {
  logEvent(analytics, 'menu_interaction', {
    menu_item: menuItem,
    device_type: isMobile ? 'mobile' : 'desktop',
    timestamp: new Date().toISOString()
  });
};

// Session tracking
export const startSession = () => {
  const sessionStart = Date.now();
  sessionStorage.setItem('session_start', sessionStart.toString());
  
  logEvent(analytics, 'session_start', {
    timestamp: new Date().toISOString(),
    session_id: sessionStart.toString()
  });
};

export const trackSessionDuration = () => {
  const sessionStart = sessionStorage.getItem('session_start');
  if (sessionStart) {
    const duration = Math.round((Date.now() - parseInt(sessionStart)) / 1000); // in seconds
    logEvent(analytics, 'session_duration', {
      duration_seconds: duration,
      duration_minutes: Math.round(duration / 60),
      timestamp: new Date().toISOString()
    });
  }
};

// Set user properties for better analytics
export const setUserAnalyticsProperties = () => {
  setUserProperties(analytics, {
    business_visitor: true,
    visited_business: 'Baghya Home Needs',
    business_location: 'Madurai',
    visit_date: new Date().toISOString().split('T')[0],
    user_agent: navigator.userAgent,
    screen_resolution: `${window.screen.width}x${window.screen.height}`
  });
};

export { analytics };
export default app;