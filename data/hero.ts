export interface HeroFeature {
  id: string;
  title: string;
  description: string;
  iconType: "tech" | "comfort" | "expert" | "personalized";
}

export const HERO_DATA = {
  tagline: "FUTURISTIC CARE. BRIGHTER SMILES.",
  titleMain: "Advanced Dentistry",
  titleHighlight: "for a Healthier You",
  description:
    "Experience the perfect blend of advanced technology, comfort, and personalized care.",
  rating: "4.9/5",
  reviewCount: "2,500+ Happy Patients",
  avatars: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  ],
  heroImage:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
  features: [
    {
      id: "1",
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise and painless treatments.",
      iconType: "tech",
    },
    {
      id: "2",
      title: "Comfort First",
      description: "Relax in a calm, modern environment designed for you.",
      iconType: "comfort",
    },
    {
      id: "3",
      title: "Expert Care",
      description: "Highly skilled professionals committed to your oral health.",
      iconType: "expert",
    },
    {
      id: "4",
      title: "Personalized Treatment",
      description: "Customized care plans tailored to your unique needs.",
      iconType: "personalized",
    },
  ] as HeroFeature[],
};