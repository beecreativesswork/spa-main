export interface GoogleSentimentTheme {
  title: string;
  description: string;
  tag: string;
}

export const GOOGLE_RATING_INFO = {
  rating: "5.0",
  reviewCount: 12,
  platform: "Google Maps",
  highlights: [
    "Cleanliness & peaceful environment",
    "Good room quality & comfort",
    "Professional & attentive staff",
    "Relaxing massage experience",
  ],
};

export const REVIEWS_SENTIMENT_THEMES: GoogleSentimentTheme[] = [
  {
    title: "Cleanliness & Peaceful Environment",
    description:
      "Guests consistently highlight the quiet, spotless atmosphere and immaculate therapy rooms designed for complete peace of mind.",
    tag: "Atmosphere",
  },
  {
    title: "Professional Staff & Attentive Care",
    description:
      "Visitors appreciate the respectful, experienced therapists who tailor touch and pressure to individual guest preferences.",
    tag: "Service Quality",
  },
  {
    title: "Good Room Quality & Comfort",
    description:
      "Feedback underscores the private, warm, and tastefully prepared therapy spaces that allow guests to unwind effortlessly.",
    tag: "Space & Comfort",
  },
  {
    title: "Positive & Rejuvenating Massage Experience",
    description:
      "Verified reviews reflect 5-star overall satisfaction for muscle relief, stress reduction, and mindful relaxation.",
    tag: "Satisfaction",
  },
];
