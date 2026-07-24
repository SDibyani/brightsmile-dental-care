export interface BulletPoint {
  id: string;
  text: string;
}

export interface ServiceTicker {
  id: string;
  title: string;
}

export interface VisionMissionCard {
  id: string;
  type: "vision" | "mission";
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  iconType: "calendar" | "users" | "clipboard" | "firstaid";
}

export const ABOUT_HERO_DATA = {
  subtitle: "ABOUT US",
  title: "15 Years of Expertise in Dental Care",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  bullets: [
    "Premium Dental Services You Can Trust",
    "Award-Winning Experts in Dental Care",
    "Dedicated Experts Behind Every Smile",
  ],
  buttonText: "Learn More",
  images: {
    mainDoctor:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    patientCare:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400",
  },
};

export const SERVICES_TICKER_DATA: ServiceTicker[] = [
  { id: "1", title: "General Dentistry" },
  { id: "2", title: "Teeth Whitening" },
  { id: "3", title: "Dental Implant" },
  { id: "4", title: "Dental Sealants" },
];

export const VISION_MISSION_DATA: VisionMissionCard[] = [
  {
    id: "vision",
    type: "vision",
    title: "Our Vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    id: "mission",
    type: "mission",
    title: "Our Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];

export const ABOUT_VIDEO_DATA = {
  thumbnail:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
  stats: [
    { id: "1", value: "10+", label: "Skilled Doctors" },
    { id: "2", value: "15+", label: "Years of Experience" },
    { id: "3", value: "20K+", label: "Appointment Booked" },
    { id: "4", value: "99%", label: "Patient Satisfaction" },
  ] as StatItem[],
};

export const HOW_IT_WORKS_DATA = {
  subtitle: "HOW IT WORKS",
  titlePrefix: "The Path to ",
  titleHighlight: "Your Perfect Smile",
  steps: [
    {
      stepNumber: "01",
      title: "Book Your Appointment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      iconType: "calendar",
    },
    {
      stepNumber: "02",
      title: "Consultation & Examination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      iconType: "users",
    },
    {
      stepNumber: "03",
      title: "Personalized Treatment Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      iconType: "clipboard",
    },
    {
      stepNumber: "04",
      title: "Ongoing Care & Follow-Up",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      iconType: "firstaid",
    },
  ] as HowItWorksStep[],
};