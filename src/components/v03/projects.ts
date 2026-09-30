import livingDiningWide from "@/assets/v03/projects/imperial-avenue-living-dining-wide.webp";
import artworks from "@/assets/v03/projects/imperial-avenue-artworks.webp";
import bedroomWide from "@/assets/v03/projects/imperial-avenue-bedroom-wide.webp";
import lounge from "@/assets/v03/projects/imperial-avenue-lounge.webp";

export type Photo = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  number: string;
  headline: [string, string];
  intro: string;
  hero: Photo;
  approach: { title: string; lead: string; body: string; photos: [Photo, Photo] };
  highlight: { title: string; subtitle: string; photo: Photo };
  rooms: (Photo & { caption: string; wide?: boolean })[];
};

const IMPERIAL_LIVING_DINING: Photo = {
  src: livingDiningWide,
  alt: "Living and dining room at Imperial Avenue by Barcode Living, with an orange feature wall, framed artworks and the city at night",
};
const IMPERIAL_BEDROOM: Photo = {
  src: bedroomWide,
  alt: "Bedroom at Imperial Avenue by Barcode Living, with a grey upholstered bed, rust throw and abstract painting",
};
const IMPERIAL_LOUNGE: Photo = {
  src: lounge,
  alt: "Lounge at Imperial Avenue by Barcode Living, with a rust velvet armchair, fiddle-leaf fig and green sofa by the balcony doors",
};

export const PROJECTS: Record<string, Project> = {
  "imperial-avenue": {
    slug: "imperial-avenue",
    name: "Imperial Avenue",
    number: "01",
    headline: ["Elevated, but never staged ·", "Imperial Avenue"],
    intro:
      "We design apartments, holiday homes and short-stay properties with a fashion eye and a designer's discipline.",
    hero: IMPERIAL_LIVING_DINING,
    approach: {
      title: "Our approach for Imperial Avenue",
      lead: "Imperial Avenue",
      body: "Most spaces don't need more. They need the one thing that's missing. Finding it is where the fun starts.",
      photos: [
        { src: artworks, alt: "Two framed abstract artworks on an orange panelled wall at Imperial Avenue by Barcode Living" },
        IMPERIAL_BEDROOM,
      ],
    },
    highlight: { title: "Lounge corner", subtitle: "Considered, but never precious", photo: IMPERIAL_LOUNGE },
    rooms: [
      { ...IMPERIAL_LIVING_DINING, caption: "Living & dining", wide: true },
      { ...IMPERIAL_LOUNGE, caption: "Lounge" },
      { ...IMPERIAL_BEDROOM, caption: "Bedroom" },
    ],
  },
};
