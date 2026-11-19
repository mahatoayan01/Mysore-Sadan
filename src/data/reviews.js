// Customer Reviews for Mysore Sadan Pure Veg Restaurant
// Includes verified local feedback & clearly designated sample review placeholders

export const reviewsData = {
  rating: 4.4,
  totalReviews: 128,
  breakdown: {
    5: 88,
    4: 26,
    3: 8,
    2: 4,
    1: 2
  },
  reviews: [
    {
      id: "rev-1",
      author: "Eknath",
      rating: 5,
      date: "Recent",
      text: "Authentic South Indian taste in Sadashiv Peth! The Ghee Garlic Roast Dosa was paper-crisp and bursting with flavour, and the traditional filter coffee is brewed fresh. A must-visit pure veg breakfast spot near Nagnath Par.",
      verified: true,
      dishMentioned: "Ghee Garlic Roast Dosa & Filter Coffee",
      isSample: false
    },
    {
      id: "rev-2",
      author: "Rohan",
      rating: 5,
      date: "Recent",
      text: "Tried their soft steamed idlis, hot crispy medu vada, and the pineapple shira. The pure ghee flavor in the shira was phenomenal. Extremely clean and family-friendly place.",
      verified: true,
      dishMentioned: "Steamed Idli, Medu Vada & Pineapple Shira",
      isSample: false
    },
    {
      id: "rev-3",
      author: "Pooja",
      rating: 5,
      date: "Recent",
      text: "The Mysore Masala Dosa has that authentic red chutney spread that you rarely find outside Karnataka. Chutneys were super fresh and not diluted. Quick service!",
      verified: true,
      dishMentioned: "Mysore Masala Dosa",
      isSample: false
    },
    // Explicitly labeled "Sample review" placeholders as required by Step 5
    {
      id: "rev-4",
      author: "Sample Reviewer A",
      rating: 4,
      date: "[SAMPLE DATE]",
      text: "[Sample review - Replace with customer review from Google Maps. Example: The Onion Uttapam is thick, fluffy, and loaded with onions. Perfect with hot vegetable sambar.]",
      verified: false,
      dishMentioned: "Onion Uttappa",
      isSample: true
    },
    {
      id: "rev-5",
      author: "Sample Reviewer B",
      rating: 5,
      date: "[SAMPLE DATE]",
      text: "[Sample review - Replace with customer review from Google Maps. Example: Excellent spot for morning breakfast with family. The tiffin combo is hearty and very affordable.]",
      verified: false,
      dishMentioned: "Idli Vada Combo",
      isSample: true
    }
  ]
};
