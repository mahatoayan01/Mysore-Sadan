// Mysore Sadan Pure Veg Restaurant - Menu Data
// Sourced from customer reviews, local food vlogs, and traditional pure-veg South Indian tiffins
// All items are 100% Pure Vegetarian.

export const menuCategories = [
  { id: "all", name: "All Items", icon: "Utensils" },
  { id: "dosas", name: "Crispy Dosas & Roasts", icon: "Flame" },
  { id: "tiffins", name: "Idli & Vada Tiffins", icon: "Sparkles" },
  { id: "uttappa-snacks", name: "Uttappa & Upma", icon: "Layers" },
  { id: "sweets", name: "Traditional Sweets", icon: "Heart" },
  { id: "beverages", name: "Hot & Cold Brews", icon: "Coffee" },
];

export const menuItems = [
  // --- DOSAS & ROASTS ---
  {
    id: "ghee-garlic-roast-dosa",
    name: "Ghee Garlic Roast Dosa",
    category: "dosas",
    price: 130,
    priceNote: "sample price",
    description: "Signature paper-thin conical dosa roasted in pure desi ghee with our house-special aromatic roasted garlic chili chutney. Served with freshly grated coconut chutney and piping hot sambar.",
    isPopular: true,
    isSpicy: true,
    isVegetarian: true,
    isSample: true, // sample item / sample price as per guidelines
    isVerifiedDish: true, // Mentioned directly in local reviews & vlogs
    image: "/images/food/ghee-garlic-roast-dosa.webp",
    imageSource: "ai-sample",
    alt: "Crispy conical Ghee Garlic Roast Dosa served with coconut chutney and hot sambar on banana leaf",
    prepTime: "10-12 mins",
    calories: "320 kcal"
  },
  {
    id: "mysore-masala-dosa",
    name: "Special Mysore Masala Dosa",
    category: "dosas",
    price: 120,
    priceNote: "sample price",
    description: "Authentic Mysore-style golden crispy dosa lined with a zesty spiced red garlic-lentil paste, folded over a warm seasoned potato onion masala. Accompanied by fresh coconut and tomato chutneys.",
    isPopular: true,
    isSpicy: false,
    isVegetarian: true,
    isSample: true,
    isVerifiedDish: true,
    image: "/images/food/mysore-masala-dosa.webp",
    imageSource: "ai-sample",
    alt: "Golden Mysore Masala Dosa folded with potato filling and red chutney smear",
    prepTime: "8-10 mins",
    calories: "340 kcal"
  },
  {
    id: "ghee-paper-plain-dosa",
    name: "Ghee Paper Plain Dosa",
    category: "dosas",
    price: 90,
    priceNote: "sample price",
    description: "Extra-large wafer-thin dosa roasted to a delicate golden crispness with pure desi cow ghee. Light, aromatic, and perfectly paired with traditional drumstick sambar.",
    isPopular: false,
    isSpicy: false,
    isVegetarian: true,
    isSample: true, // sample item
    isVerifiedDish: false,
    image: "/images/food/ghee-garlic-roast-dosa.webp",
    imageSource: "ai-sample",
    alt: "Crispy golden paper-thin ghee plain dosa",
    prepTime: "8 mins",
    calories: "280 kcal"
  },
  {
    id: "cheese-mysore-masala-dosa",
    name: "Cheese Mysore Masala Dosa",
    category: "dosas",
    price: 150,
    priceNote: "sample price",
    description: "Our signature Mysore Masala Dosa generously topped with finely grated pure dairy Amul cheese, melting over warm spiced potato filling.",
    isPopular: true,
    isSpicy: false,
    isVegetarian: true,
    isSample: true, // sample item
    isVerifiedDish: false,
    image: "/images/food/mysore-masala-dosa.webp",
    imageSource: "ai-sample",
    alt: "Rich cheese loaded Mysore masala dosa with melted dairy cheese",
    prepTime: "12 mins",
    calories: "410 kcal"
  },

  // --- IDLI & VADA TIFFINS ---
  {
    id: "steamed-idli-sambar",
    name: "Steamed Idli Sambar (2 Pcs)",
    category: "tiffins",
    price: 60,
    priceNote: "sample price",
    description: "Two melt-in-your-mouth, cloud-soft steamed fermented rice & urad dal cakes, served submerged in aromatic Mysore-style lentil vegetable sambar with fresh coconut chutney.",
    isPopular: true,
    isSpicy: false,
    isVegetarian: true,
    isSample: true,
    isVerifiedDish: true,
    image: "/images/food/steamed-idli-sambar.webp",
    imageSource: "ai-sample",
    alt: "Pillowy white steamed idlis in hot sambar with fresh coconut chutney",
    prepTime: "5 mins",
    calories: "190 kcal"
  },
  {
    id: "crispy-medu-vada",
    name: "Crispy Medu Vada (2 Pcs)",
    category: "tiffins",
    price: 70,
    priceNote: "sample price",
    description: "Two freshly fried golden-brown lentil donut fritters with a crunchy outer crust and a light, airy center flavored with crushed black pepper, ginger, and fresh curry leaves.",
    isPopular: true,
    isSpicy: false,
    isVegetarian: true,
    isSample: true,
    isVerifiedDish: true,
    image: "/images/food/medu-vada.webp",
    imageSource: "ai-sample",
    alt: "Crispy golden Medu Vada with white coconut chutney and sambar",
    prepTime: "6 mins",
    calories: "270 kcal"
  },
  {
    id: "idli-vada-combo",
    name: "Special Idli Vada Combo",
    category: "tiffins",
    price: 75,
    priceNote: "sample price",
    description: "The ultimate breakfast pairing: one steaming soft idli and one crispy golden medu vada, served with endless bowls of flavorful sambar and fresh chutney duo.",
    isPopular: true,
    isSpicy: false,
    isVegetarian: true,
    isSample: true,
    isVerifiedDish: true,
    image: "/images/food/steamed-idli-sambar.webp",
    imageSource: "ai-sample",
    alt: "Classic South Indian breakfast combo of idli and medu vada",
    prepTime: "5 mins",
    calories: "230 kcal"
  },

  // --- UTTAPPA & SNACKS ---
  {
    id: "onion-uttappa",
    name: "Special Onion Uttappa",
    category: "uttappa-snacks",
    price: 100,
    priceNote: "sample price",
    description: "Thick, pillowy fermented rice pancake griddled to perfection, studded generously with sweet sautéed pink onions, chopped green chilies, and fresh coriander leaves.",
    isPopular: true,
    isSpicy: false,
    isVegetarian: true,
    isSample: true,
    isVerifiedDish: true,
    image: "/images/food/onion-uttappa.webp",
    imageSource: "ai-sample",
    alt: "Thick savory onion uttapam pancake garnished with cilantro and onions",
    prepTime: "10 mins",
    calories: "310 kcal"
  },
  {
    id: "traditional-rava-upma",
    name: "Traditional Rava Upma",
    category: "uttappa-snacks",
    price: 55,
    priceNote: "sample price",
    description: "Hearty roasted semolina cooked with pure desi ghee, crunchy roasted cashews, mustard seeds, curry leaves, and green chilies. Served warm with a slice of fresh lemon.",
    isPopular: false,
    isSpicy: false,
    isVegetarian: true,
    isSample: true,
    isVerifiedDish: true,
    image: "/images/food/upma.webp",
    imageSource: "ai-sample",
    alt: "Warm traditional semolina Upma garnished with roasted cashew nuts and curry leaves",
    prepTime: "6 mins",
    calories: "220 kcal"
  },
  {
    id: "tomato-onion-uttappa",
    name: "Tomato Onion Uttappa",
    category: "uttappa-snacks",
    price: 110,
    priceNote: "sample price",
    description: "Fluffy uttapam laden with juicy diced ripe tomatoes, caramelized onions, curry leaves, and a sprinkle of roasted podi spice mix.",
    isPopular: false,
    isSpicy: false,
    isVegetarian: true,
    isSample: true, // sample item
    isVerifiedDish: false,
    image: "/images/food/onion-uttappa.webp",
    imageSource: "ai-sample",
    alt: "Colorful tomato and onion uttapam pancake",
    prepTime: "10 mins",
    calories: "325 kcal"
  },

  // --- SWEETS ---
  {
    id: "pineapple-shira",
    name: "Ghee Pineapple Shira",
    category: "sweets",
    price: 65,
    priceNote: "sample price",
    description: "A beloved temple-style specialty: semolina slow-roasted in pure cow ghee, infused with juicy natural pineapple pieces, saffron strands, golden raisins, and toasted whole cashews.",
    isPopular: true,
    isSpicy: false,
    isVegetarian: true,
    isSample: true,
    isVerifiedDish: true,
    image: "/images/food/pineapple-shira.webp",
    imageSource: "ai-sample",
    alt: "Golden glowing sweet Pineapple Shira kesari bath with cashews and raisins",
    prepTime: "5 mins",
    calories: "290 kcal"
  },

  // --- BEVERAGES ---
  {
    id: "filter-coffee",
    name: "Authentic South Indian Filter Coffee",
    category: "beverages",
    price: 35,
    priceNote: "sample price",
    description: "Freshly brewed decoction of dark roasted plantation beans and chicory blended with frothy, thick boiled whole milk, served piping hot in an authentic brass Davarah & tumbler set.",
    isPopular: true,
    isSpicy: false,
    isVegetarian: true,
    isSample: true,
    isVerifiedDish: true,
    image: "/images/food/filter-coffee.webp",
    imageSource: "ai-sample",
    alt: "Frothy traditional South Indian filter coffee in brass dabara and tumbler",
    prepTime: "3 mins",
    calories: "90 kcal"
  },
  {
    id: "masala-chaas",
    name: "Chilled Masala Buttermilk (Chaas)",
    category: "beverages",
    price: 30,
    priceNote: "sample price",
    description: "Refreshing churned fresh curd buttermilk infused with roasted cumin, rock salt, crushed ginger, and mint. The perfect digestive cooler after a hot dosa.",
    isPopular: false,
    isSpicy: false,
    isVegetarian: true,
    isSample: true, // sample item
    isVerifiedDish: false,
    image: "/images/food/filter-coffee.webp",
    imageSource: "ai-sample",
    alt: "Chilled masala buttermilk cooler in clay glass",
    prepTime: "3 mins",
    calories: "50 kcal"
  }
];
