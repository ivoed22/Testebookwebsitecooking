// Centralized placeholder content for The Food Vybes landing page.
// Premium food photography placeholders served from Unsplash.

const img = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const ebooks = [
  {
    title: "High Protein Meals",
    subtitle: "40+ muscle-fueling recipes",
    price: 24,
    oldPrice: 39,
    rating: 4.9,
    reviews: 1284,
    bestseller: true,
    image: img("1546069901-ba9599a7e63c"),
    accent: "from-forest-700 to-forest-500",
  },
  {
    title: "Clean & Lean",
    subtitle: "Whole-food weight loss plan",
    price: 22,
    oldPrice: 34,
    rating: 4.8,
    reviews: 942,
    bestseller: false,
    image: img("1490645935967-10de6ba17061"),
    accent: "from-emerald-700 to-emerald-500",
  },
  {
    title: "Quick & Healthy",
    subtitle: "30-minute weeknight dinners",
    price: 19,
    oldPrice: 29,
    rating: 4.9,
    reviews: 1567,
    bestseller: true,
    image: img("1512621776951-a57141f2eefd"),
    accent: "from-lime-700 to-lime-500",
  },
  {
    title: "Weight Loss Guide",
    subtitle: "Sustainable fat-loss system",
    price: 27,
    oldPrice: 45,
    rating: 5.0,
    reviews: 2103,
    bestseller: true,
    image: img("1467003909585-2f8a72700288"),
    accent: "from-teal-700 to-teal-500",
  },
  {
    title: "Meal Prep Mastery",
    subtitle: "A week of meals in 2 hours",
    price: 25,
    oldPrice: 39,
    rating: 4.8,
    reviews: 876,
    bestseller: false,
    image: img("1543339308-43e59d6b73a6"),
    accent: "from-green-700 to-green-500",
  },
  {
    title: "Healthy Comfort Food",
    subtitle: "Guilt-free favorites, reinvented",
    price: 21,
    oldPrice: 32,
    rating: 4.9,
    reviews: 1011,
    bestseller: false,
    image: img("1504674900247-0877df9cc836"),
    accent: "from-amber-700 to-amber-500",
  },
];

export const stats = [
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Recipe Collections" },
  { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
  { value: 100000, suffix: "+", label: "Recipes Downloaded" },
];

export const features = [
  {
    title: "Nutrition Focused",
    desc: "Every recipe is built around macros that actually move the needle — protein, fiber and real whole foods.",
    icon: "Apple",
  },
  {
    title: "Easy Recipes",
    desc: "No culinary degree required. Clear steps, simple ingredients and foolproof results every single time.",
    icon: "ChefHat",
  },
  {
    title: "Fast Preparation",
    desc: "Most meals are ready in 30 minutes or less, designed for people with full, busy lives.",
    icon: "Timer",
  },
  {
    title: "Weight Loss Support",
    desc: "Calorie-smart portions and satisfying meals that keep you full while the results show up.",
    icon: "TrendingDown",
  },
  {
    title: "High Protein Meals",
    desc: "Hit your protein goals effortlessly with meals engineered for energy, recovery and lean muscle.",
    icon: "Dumbbell",
  },
  {
    title: "Shopping Lists Included",
    desc: "Auto-generated grocery lists for every plan, so you walk in, grab and go. Zero guesswork.",
    icon: "ShoppingBasket",
  },
];

export const testimonials = [
  {
    name: "Sofia Martins",
    role: "Lost 12 kg in 4 months",
    metric: "-12 kg",
    quote:
      "I finally found recipes I actually look forward to. The meal prep guide changed my entire week — I eat better and have so much more energy.",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=47",
  },
  {
    name: "James Carter",
    role: "Gained 6 kg lean muscle",
    metric: "+6 kg muscle",
    quote:
      "The High Protein Meals book made hitting 180g of protein effortless. Genuinely the best money I've spent on my health this year.",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=12",
  },
  {
    name: "Amara Okafor",
    role: "Down 3 dress sizes",
    metric: "-3 sizes",
    quote:
      "Clean & Lean fits my crazy schedule. Quick, delicious and I never feel like I'm on a diet. My whole family eats these meals now.",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=32",
  },
  {
    name: "Lucas Almeida",
    role: "Reversed pre-diabetes",
    metric: "Healthy A1C",
    quote:
      "My doctor noticed the difference at my last check-up. These recipes made eating healthy feel like a treat instead of a chore.",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=68",
  },
  {
    name: "Nina Hoffmann",
    role: "More energy, less stress",
    metric: "+ Energy",
    quote:
      "The shopping lists alone are worth it. I save hours every week and my fridge has never looked so good. Absolutely premium quality.",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=24",
  },
];

export const recipes = [
  {
    name: "Honey Garlic Salmon Bowl",
    image: img("1467003909585-2f8a72700288", 700, 500),
    calories: 480,
    protein: 42,
    time: 25,
    difficulty: "Easy",
    tag: "High Protein",
  },
  {
    name: "Mediterranean Chicken",
    image: img("1604908176997-125f25cc6f3d", 700, 500),
    calories: 410,
    protein: 38,
    time: 30,
    difficulty: "Easy",
    tag: "Weight Loss",
  },
  {
    name: "Green Power Buddha Bowl",
    image: img("1512621776951-a57141f2eefd", 700, 500),
    calories: 390,
    protein: 24,
    time: 20,
    difficulty: "Easy",
    tag: "Vegetarian",
  },
  {
    name: "Lean Beef Stir Fry",
    image: img("1603133872878-684f208fb84b", 700, 500),
    calories: 520,
    protein: 45,
    time: 25,
    difficulty: "Medium",
    tag: "High Protein",
  },
];

export const community = [
  img("1490645935967-10de6ba17061", 600, 600),
  img("1546069901-ba9599a7e63c", 600, 800),
  img("1512621776951-a57141f2eefd", 600, 600),
  img("1504674900247-0877df9cc836", 600, 800),
  img("1467003909585-2f8a72700288", 600, 600),
  img("1543339308-43e59d6b73a6", 600, 600),
  img("1490474418585-ba9bad8fd0ea", 600, 800),
  img("1455619452474-d2be8b1e70cd", 600, 600),
];

export const faqs = [
  {
    q: "How do I download my e-books after purchase?",
    a: "Instantly. The moment your payment is confirmed, you'll receive an email with secure download links plus access to your personal library. Read them on any device — phone, tablet, laptop or print them out.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a 30-day, no-questions-asked money-back guarantee. If a collection isn't right for you, just email our team and we'll refund you in full. Your trust matters more than a sale.",
  },
  {
    q: "Do the recipes include full nutrition information?",
    a: "Absolutely. Every single recipe includes calories, protein, carbs, fats and serving sizes, so you always know exactly what's on your plate and can hit your goals with confidence.",
  },
  {
    q: "Are the recipes good for meal prep?",
    a: "Yes — many recipes are batch-friendly and our Meal Prep Mastery guide is built entirely around prepping a full week of meals in about two hours, including storage and reheating tips.",
  },
  {
    q: "Do I get free updates to my e-books?",
    a: "Forever. When we improve a collection or add new recipes, you get the updated edition for free, automatically delivered to your library. Buy once, benefit always.",
  },
];

export const footerLinks = {
  Explore: ["Shop", "Free Recipes", "Newsletter"],
  Company: ["About", "Contact"],
  Legal: ["Terms", "Privacy"],
};
