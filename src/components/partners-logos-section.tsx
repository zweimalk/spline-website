import { InfiniteLogoScroll } from "@/components/infinite-logo-scroll";

const logos = [
  {
    src: "/logos/bertrandt.png",
    alt: "Bertrandt",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/contech.png",
    alt: "Contech",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/H&M.png",
    alt: "H&M",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/jaguar.png",
    alt: "Jaguar",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/mercedes.png",
    alt: "Mercedes",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/next.svg",
    alt: "Next",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/porsche.png",
    alt: "Porsche",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/qiagen.png",
    alt: "Qiagen",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/spotify.png",
    alt: "Spotify",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/TATA.svg",
    alt: "TATA",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/togethertech.png",
    alt: "Togethertech",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/toyota.png",
    alt: "Toyota",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/Vector.png",
    alt: "Vector",
    width: 100,
    height: 100,
  },
  {
    src: "/logos/vw.png",
    alt: "Volkswagen",
    width: 100,
    height: 100,
  },
];

export default function PartnersLogosSection() {
  return (
    <section className="my-30">
      <InfiniteLogoScroll logos={logos} />
    </section>
  );
}
