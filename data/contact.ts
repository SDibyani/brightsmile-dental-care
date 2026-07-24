export interface ContactInfo {
  id: string;
  type: "phone" | "email" | "location";
  title: string;
  value: string;
  href: string;
}

export const CONTACT_DATA = {
  title: "Contact Us",
  mapImage:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
  infoItems: [
    {
      id: "1",
      type: "phone",
      title: "Call",
      value: "084524145547",
      href: "tel:084524145547",
    },
    {
      id: "2",
      type: "email",
      title: "Email",
      value: "arshakir132@gmail.com",
      href: "mailto:arshakir132@gmail.com",
    },
    {
      id: "3",
      type: "location",
      title: "Location",
      value: "Texas, USA",
      href: "https://maps.google.com",
    },
  ] as ContactInfo[],
};