export interface Testimonial {
  id: number;
  rating: number;
  title: string;
  review: string;
  name: string;
  role: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5.0,
    title: "Professional and Friendly!",
    review:
      "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Leslie Alexander",
    role: "Satisfied Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    rating: 5.0,
    title: "Highly Recommended!",
    review:
      "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Bessie Lane",
    role: "Satisfied Patient",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    rating: 5.0,
    title: "Gentle & Caring Experience",
    review:
      "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Courtney Henry",
    role: "Satisfied Patient",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    rating: 5.0,
    title: "Best Dental Care Ever!",
    review:
      "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Darlene Robertson",
    role: "Satisfied Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 5,
    rating: 5.0,
    title: "Outstanding Service!",
    review:
      "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Floyd Miles",
    role: "Satisfied Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];