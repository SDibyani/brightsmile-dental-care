export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  iconType: "tooth" | "implant" | "sparkles" | "braces" | "shield";
  slug: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: "1",
    title: "General Dentistry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
    iconType: "tooth",
    slug: "/services/general-dentistry",
  },
  {
    id: "2",
    title: "Dental Implant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
    iconType: "implant",
    slug: "/services/dental-implants",
  },
  {
    id: "3",
    title: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
    iconType: "sparkles",
    slug: "/services/teeth-whitening",
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  iconType:
    | "tooth"
    | "implant"
    | "sparkles"
    | "braces"
    | "extraction"
    | "wisdom"
    | "makeover"
    | "surgery"
    | "repair";
}

export const SERVICES_PAGE_HEADER = {
  title: "A Wide Range of Services",
  subtitle: "for Your Best Smile",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    category: "Preventative",
    iconType: "tooth",
  },
  {
    id: "dental-implant",
    title: "Dental Implant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    category: "Restorative",
    iconType: "implant",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?auto=format&fit=crop&q=80&w=800",
    category: "Cosmetic",
    iconType: "sparkles",
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    category: "Orthodontics",
    iconType: "braces",
  },
  {
    id: "tooth-extractions",
    title: "Tooth Extractions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    category: "Surgical",
    iconType: "extraction",
  },
  {
    id: "wisdom-teeth-removal",
    title: "Wisdom Teeth Removal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    category: "Surgical",
    iconType: "wisdom",
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    description:
      "Comprehensive aesthetic transformations tailored to give you a flawless, radiant smile you feel confident in.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    category: "Cosmetic",
    iconType: "makeover",
  },
  {
    id: "oral-surgery",
    title: "Oral Surgery",
    description:
      "Advanced surgical procedures for complex dental conditions performed by experienced specialists.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    category: "Surgical",
    iconType: "surgery",
  },
  {
    id: "broken-tooth-repair",
    title: "Broken Tooth Repair",
    description:
      "Fast, effective restorative solutions including bonding, crowns, and veneers to repair chipped or broken teeth.",
    image:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800",
    category: "Emergency",
    iconType: "repair",
  },
];