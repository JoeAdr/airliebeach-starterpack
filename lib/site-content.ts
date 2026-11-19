import {
  BriefcaseBusiness,
  Compass,
  Home,
  MapPin,
  Palmtree,
  PiggyBank,
  Plane,
} from "lucide-react";

/**
 * All editable site copy and settings live here so the site can be updated
 * without touching layout components.
 */
export const site = {
  price: "$14.90 AUD",
  checkoutUrl: "#offer",
  instagramUrl: "https://www.instagram.com/laurinetraveltips",
  instagramHandle: "@LaurineTravelTips",
  supportEmail: "mailto:hello@laurinetraveltips.com",
  edition: "2026 Edition",
  brandName: "Laurine Travel Tips",
  brandMark: "L",
  nav: [
    { href: "#inside", label: "What’s inside" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ],
  microFacts: ["Instant PDF download", "Read anywhere"],
  offerIncludes: [
    "Complete Airlie Beach guide",
    "Practical local tips",
    "Instant PDF download",
    "Read on any device",
  ],
} as const;

export const storyQuestions = [
  "Where do I stay?",
  "How do I find a job?",
  "How much do I need?",
  "Where should I go?",
];

export const topics = [
  {
    icon: Home,
    title: "Where to stay",
    text: "Hostels, shared houses, useful apps and finding accommodation.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Find a job",
    text: "Where to apply and practical tips to help you get hired.",
  },
  {
    icon: Plane,
    title: "Getting to Airlie",
    text: "Airport transfers, transport options and arrival tips.",
  },
  {
    icon: MapPin,
    title: "Best spots",
    text: "Favourite cafés, restaurants, bars and places to chill.",
  },
  {
    icon: Palmtree,
    title: "Free things to do",
    text: "Lagoon days, walks and sunsets without the big spend.",
  },
  {
    icon: Compass,
    title: "Must-do experiences",
    text: "Whitsundays, boat trips and useful local tips.",
  },
  {
    icon: PiggyBank,
    title: "Save money",
    text: "Simple backpacker advice for making your budget last.",
  },
];

export const chapters = [
  {
    number: "01",
    title: "Welcome to Airlie Beach",
    text: "Why come to Airlie, what to expect and the overall vibe.",
  },
  {
    number: "02",
    title: "Getting to Airlie",
    text: "Airport transfers, transport options and arrival tips.",
  },
  {
    number: "03",
    title: "Where to stay",
    text: "Hostels, shared houses, apps and the best ways to find a place.",
  },
  {
    number: "04",
    title: "Finding a job",
    text: "Where to apply, how it works and practical tips to get hired.",
  },
  {
    number: "05",
    title: "Best spots in town",
    text: "Favourite cafés, restaurants, bars and places to chill.",
  },
  {
    number: "06",
    title: "Free things to do",
    text: "Walks, the lagoon, sunsets and low-budget days.",
  },
  {
    number: "07",
    title: "Must-do experiences",
    text: "Whitsundays, boat trips and tips for local discounts.",
  },
];

export const previewPages = [
  { src: "/images/ebook-cover.jpg", alt: "Guide cover" },
  { src: "/images/ebook-summary.jpg", alt: "Guide summary" },
  { src: "/images/ebook-welcome.jpg", alt: "Welcome chapter" },
  { src: "/images/ebook-about.jpg", alt: "Airlie Beach introduction" },
];

export const faqs = [
  {
    question: "Is this guide only for backpackers?",
    answer:
      "It is written with backpackers and Working Holiday travellers in mind, but anyone planning a practical, budget-conscious stay in Airlie Beach can use it.",
  },
  {
    question: "When should I buy the guide?",
    answer:
      "Before you arrive is best. It helps you plan accommodation, transport, work and your first days in town.",
  },
  {
    question: "Can I read it on my phone?",
    answer:
      "Yes. The guide is delivered as a PDF and can be read on your phone, tablet or laptop.",
  },
  {
    question: "How do I receive the guide?",
    answer: "You will receive instant download access after secure payment.",
  },
  {
    question: "Is the information up to date?",
    answer:
      "This is the 2026 edition. Because prices, opening hours and local services can change, always confirm time-sensitive details directly.",
  },
  {
    question: "Can I share it with someone else?",
    answer:
      "Each copy is licensed for personal use by the original purchaser and should not be redistributed.",
  },
  {
    question: "What if I have trouble downloading it?",
    answer:
      "Contact Laurine using the support link in the footer and she will help you access your purchase.",
  },
];
