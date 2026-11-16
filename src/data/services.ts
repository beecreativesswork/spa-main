export interface Service {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  category: string;
  image: string;
  highlights?: string[];
  duration?: string;
  price?: string;
  imagePlaceholderStyle?: {
    gradient: string;
    accent: string;
  };
}

export const SERVICES_DATA: Service[] = [
  {
    id: "swedish-massage",
    number: "01",
    name: "Swedish Massage",
    shortDescription:
      "A classic full-body treatment designed to ease muscle tension, improve circulation, and promote overall calm.",
    detailedDescription:
      "Using long, gentle gliding strokes, light kneading, and rhythmic tapping, this therapy focuses on releasing gentle tension across the entire body while supporting deep mental relaxation in a quiet space.",
    category: "Relaxation & Harmony",
    image: "/images/services/swedish-massage.webp",
    highlights: ["Smooth rhythmic glides", "Eases daily muscular stress", "Deep tranquility"],
    imagePlaceholderStyle: {
      gradient: "from-[#E8DEC9] to-[#D4C3A3]",
      accent: "#52634F",
    },
  },
  {
    id: "deep-tissue-massage",
    number: "02",
    name: "Deep Tissue Massage",
    shortDescription:
      "Targeted pressure addressing deeper muscle layers and connective tissue to relieve persistent tightness.",
    detailedDescription:
      "Focuses on realigning deeper layers of muscles and connective tissues through slow strokes and deliberate finger pressure. Tailored to comfort for guests seeking physical relief from postural strain.",
    category: "Therapeutic Care",
    image: "/images/services/deep-tissue-massage.webp",
    highlights: ["Focus on tight tension points", "Deliberate targeted pressure", "Postural comfort"],
    imagePlaceholderStyle: {
      gradient: "from-[#DFCDB4] to-[#C9B393]",
      accent: "#B6583B",
    },
  },
  {
    id: "aromatherapy-massage",
    number: "03",
    name: "Aromatherapy Massage",
    shortDescription:
      "Restorative touch paired with subtle organic essential oils to soothe the senses and encourage peace.",
    detailedDescription:
      "Combines gentle massage techniques with carefully selected herbal and botanical scents. Designed to engage both touch and aroma to create a serene environment for mind and body.",
    category: "Sensory Mindful",
    image: "/images/services/aromatherapy-massage.webp",
    highlights: ["Pure botanical scents", "Subtle relaxation", "Serene ambient touch"],
    imagePlaceholderStyle: {
      gradient: "from-[#DCE3D6] to-[#BAC7B3]",
      accent: "#52634F",
    },
  },
  {
    id: "ayurvedic-massage",
    number: "04",
    name: "Ayurvedic Massage",
    shortDescription:
      "Traditional Indian-inspired oil massage focusing on rhythmic balance, warmth, and body vitality.",
    detailedDescription:
      "Rooted in Indian wellness traditions, this signature experience uses warm herbal oils applied in harmonic strokes across energy lines to foster balance, inner warmth, and complete rejuvenation.",
    category: "Heritage Tradition",
    image: "/images/services/ayurvedic-massage.webp",
    highlights: ["Warm herbal oil practice", "Harmonic long strokes", "Heritage-inspired balance"],
    imagePlaceholderStyle: {
      gradient: "from-[#EAD5C3] to-[#D6B59B]",
      accent: "#C29B53",
    },
  },
  {
    id: "head-shoulder-massage",
    number: "05",
    name: "Head & Shoulder Massage",
    shortDescription:
      "Focused release of accumulated stress around the scalp, neck, upper back, and shoulders.",
    detailedDescription:
      "A concentrated treatment targeting key areas of daily tension. Perfect for individuals seeking quick yet effective relief from desk strain, headache tension, and mental fatigue.",
    category: "Focused Relief",
    image: "/images/services/head-shoulder-massage.webp",
    highlights: ["Scalp and neck release", "Relieves desk strain", "Refreshed clarity"],
    imagePlaceholderStyle: {
      gradient: "from-[#E6DDD1] to-[#CFBFAB]",
      accent: "#8C7B70",
    },
  },
  {
    id: "foot-massage",
    number: "06",
    name: "Foot Massage",
    shortDescription:
      "Revitalizing pressure point care for tired feet, restoring lightness and energy to the body.",
    detailedDescription:
      "Focuses on pressure points across the soles, arches, and ankles. Eases foot fatigue after long hours of movement or standing, nurturing a feeling of being grounded and refreshed.",
    category: "Reflex Renewal",
    image: "/images/services/foot-massage.webp",
    highlights: ["Soles & arch focus", "Restores leg lightness", "Grounding pressure points"],
    imagePlaceholderStyle: {
      gradient: "from-[#DFD6C8] to-[#C7B7A2]",
      accent: "#52634F",
    },
  },
];
