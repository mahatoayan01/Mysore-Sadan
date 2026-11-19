// Mysore Sadan Pure Veg Restaurant - Core Restaurant Data
// Sourced from Google Maps listing (Place ID: ChIJlcDoK1DBwjsRFV8r1pZnJOw) & local listings

export const restaurantData = {
  name: "Mysore Sadan Pure Veg Restaurant",
  tagline: "Authentic South Indian Pure Vegetarian Delicacies in the Heart of Sadashiv Peth",
  shortDescription: "Welcome to Mysore Sadan Pure Veg Restaurant, serving authentic crispy dosas, steaming soft idlis, fragrant filter coffee, and traditional South Indian tiffins prepared with pure ghee and genuine coastal spices.",
  story: "Located near the historic Nagnath Par and Perugate in Sadashiv Peth, Pune, Mysore Sadan was founded with a dedicated mission: to bring the authentic, traditional culinary flavors of Mysore and South India to food lovers. We take immense pride in being a 100% Pure Vegetarian restaurant, upholding the highest standards of purity, hygiene, and authentic home-style taste with crisp dosas roasted in pure ghee and filter coffee brewed fresh all day.",
  
  // Contact details
  phone: "+91 86002 02030", // Verified phone number
  phoneDisplay: "+91 86002 02030",
  whatsappNumber: "918600202030", // Standardized for WhatsApp API links
  email: "[ADD EMAIL]", // Placeholder as per rules
  
  // Location details
  address: {
    line1: "Bhopatkar Road, Near Nagnath Par, Perugate",
    area: "Sadashiv Peth",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411030",
    country: "India",
    landmark: "Near Nagnath Par and Perugate, Sadashiv Peth",
    full: "Bhopatkar Rd, Near Nagnath Par, Perugate, Sadashiv Peth, Pune, Maharashtra 411030, India"
  },
  
  // Google Maps Integration
  googleMaps: {
    placeId: "ChIJlcDoK1DBwjsRFV8r1pZnJOw",
    searchQuery: "Mysore Sadan Pure Veg Restaurant Sadashiv Peth Pune",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Mysore%20Sadan%20Pure%20Veg%20Restaurant&query_place_id=ChIJlcDoK1DBwjsRFV8r1pZnJOw",
    embedUrl: "https://maps.google.com/maps?q=Mysore+Sadan+Pure+Veg+Restaurant+Bhopatkar+Road+Sadashiv+Peth+Pune&t=&z=16&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      lat: 18.5132,
      lng: 73.8533
    }
  },

  // Operating Hours (All 7 Days)
  openingHours: [
    { day: "Monday", open: "07:30 AM", close: "11:30 PM", isOpen: true },
    { day: "Tuesday", open: "07:30 AM", close: "11:30 PM", isOpen: true },
    { day: "Wednesday", open: "07:30 AM", close: "11:30 PM", isOpen: true },
    { day: "Thursday", open: "07:30 AM", close: "11:30 PM", isOpen: true },
    { day: "Friday", open: "07:30 AM", close: "11:30 PM", isOpen: true },
    { day: "Saturday", open: "07:30 AM", close: "11:30 PM", isOpen: true },
    { day: "Sunday", open: "07:30 AM", close: "11:30 PM", isOpen: true }
  ],
  hoursSummary: "Daily: 7:30 AM – 11:30 PM",

  // Ratings & Category
  rating: 4.4,
  reviewCount: 128,
  priceTier: "₹",
  priceDescription: "₹100 - ₹250 per person (Affordable & Budget Friendly)",
  cuisine: ["South Indian", "Pure Vegetarian", "Breakfast & Tiffin", "Fast Food"],
  features: [
    "100% Pure Vegetarian",
    "Fresh Pure Ghee Roasts",
    "Filter Coffee Brewed All Day",
    "Dine-in & Quick Takeaway",
    "Hygienic Clean Kitchen",
    "Warm Family Friendly Dining"
  ],

  // Social & Online Links
  website: "[ADD WEBSITE]",
  instagram: {
    handle: "[ADD INSTAGRAM HANDLE]",
    url: "https://instagram.com"
  },
  facebook: {
    handle: "[ADD FACEBOOK LINK]",
    url: "https://facebook.com"
  },

  // Missing info tracked explicitly as required by rules
  MISSING_INFO: [
    { field: "website", placeholder: "[ADD WEBSITE]", note: "No official domain registered on Google Maps listing." },
    { field: "instagram", placeholder: "[ADD INSTAGRAM HANDLE]", note: "Official verified Instagram profile handle not directly linked on Maps." },
    { field: "facebook", placeholder: "[ADD FACEBOOK LINK]", note: "Official Facebook page not linked on Maps." },
    { field: "email", placeholder: "[ADD EMAIL]", note: "Official business email not listed on Maps listing." },
    { field: "exact_menu_printed_prices", placeholder: "[SAMPLE PRICES]", note: "Exact printed prices for all variants are provided as editable sample placeholders (₹50-₹140)." }
  ],

  // Demo Owner Credentials (Client-side session state for demo purposes)
  ownerCredentials: {
    username: "mysoreowner",
    password: "pureveg2026",
    role: "Restaurant Administrator",
    badge: "Demo credentials - change before going live"
  }
};
