export interface CaseStory {
  id: string;
  title: string;
  patientName: string;
  year: string;
  tags: string[];
  image: string;
  slug: string;
}

export const CASE_STORIES_DATA = {
  subtitle: "OUR CASE STORIES",
  titleMain: "Patient Journeys to",
  titleHighlight: "Healthier, Happier Smiles",
  buttonText: "Explore All Case Stories",
  buttonHref: "/case-stories",
  stories: [
    {
      id: "1",
      title: "A Brighter Tomorrow: Sarah's Whitening Journey",
      patientName: "Sarah",
      year: "2024",
      tags: ["Teeth Whitening", "Dental Care"],
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      slug: "/case-stories/sarah-whitening-journey",
    },
    {
      id: "2",
      title: "A Beautiful Transformation: Olivia's Braces Journey",
      patientName: "Olivia",
      year: "2024",
      tags: ["Braces Treatment", "Dental Care"],
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      slug: "/case-stories/olivia-braces-journey",
    },
  ] as CaseStory[],
};