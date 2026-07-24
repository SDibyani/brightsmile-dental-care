export interface Stat {
  value: string;
  label: string;
}

export const WHY_CHOOSE_US_DATA = {
  subtitle: "WHY CHOOSE US",
  titleMain: "Benefits of Our Dental Services:",
  titleHighlight: "Your Path to a Healthier Smile",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  image:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
  stats: [
    { value: "10+", label: "Skilled Doctors" },
    { value: "99%", label: "Patient Satisfaction" },
    { value: "20K+", label: "Appointment Booked" },
  ] as Stat[],
  features: [
    "Easy Online Appointment Booking",
    "Experienced and Caring Dentists",
    "Advanced Dental Equipment",
  ],
  buttonText: "Book an Appointment",
  buttonHref: "/booking",
};