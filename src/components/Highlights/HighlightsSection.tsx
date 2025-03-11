import { Highlight } from "@/types/highlight";
import { HighlightsSlider } from "./HighlightsSlider";

/**
 * Sample testimonial data with avatars from Unsplash
 * Using high-quality, free-to-use portrait images
 */
const highlights: Highlight[] = [
  {
    id: "1",
    year: 2024,
    title: "Highlight 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "2",
    year: 2023,
    title: "Highlight 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "3",
    year: 2022,
    title: "Highlight 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "4",
    year: 2021,
    title: "Highlight 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "5",
    year: 2020,
    title: "Highlight 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "6",
    year: 2019,
    title: "Highlight 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "7",
    year: 2018,
    title: "Highlight 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "8",
    year: 2017,
    title: "Highlight 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "9",
    year: 2016,
    title: "Highlight 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "10",
    year: 2015,
    title: "Highlight 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "11",
    year: 2014,
    title: "Highlight 11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "12",
    year: 2013,
    title: "Highlight 12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "13",
    year: 2012,
    title: "Highlight 13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "14",
    year: 2011,
    title: "Highlight 14",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "15",
    year: 2010,
    title: "Highlight 15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "16",
    year: 2009,
    title: "Highlight 16",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "17",
    year: 2008,
    title: "Highlight 17",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "18",
    year: 2007,
    title: "Highlight 18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "19",
    year: 2006,
    title: "Highlight 19",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "20",
    year: 2005,
    title: "Highlight 20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "21",
    year: 2004,
    title: "Highlight 21",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "22",
    year: 2003,
    title: "Highlight 22",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "23",
    year: 2002,
    title: "Highlight 23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "24",
    year: 2001,
    title: "Highlight 24",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
  {
    id: "25",
    year: 2000,
    title: "Highlight 25",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur",
    imageUrl: "/images/highlight_car.png",
  },
];

/**
 * Displays the testimonials section with heading and slider
 */
export function HighlightsSection() {
  return <HighlightsSlider highlights={highlights} />;
}
