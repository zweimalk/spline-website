import { InfiniteLogoScroll } from '@/components/infinite-logo-scroll';

const logos = [
  {
    srcDark: '/logos/autoliv.svg',
    src: '/logos/autoliv-1.svg',
    alt: 'Autoliv',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/bertrandt.svg',
    src: '/logos/bertrandt-1.svg',
    alt: 'Bertrandt',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/ford.svg',
    src: '/logos/ford-1.svg',
    alt: 'Ford',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/jlr.svg',
    src: '/logos/jlr-1.svg',
    alt: 'JLR',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/lotus.svg',
    src: '/logos/lotus-1.svg',
    alt: 'Lotus',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/mercedes.svg',
    src: '/logos/mercedes-1.svg',
    alt: 'Mercedes',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/ncr.svg',
    src: '/logos/ncr-1.svg',
    alt: 'NCR',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/porsche.svg',
    src: '/logos/porsche-1.svg',
    alt: 'Porsche',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/qiagen.svg',
    src: '/logos/qiagen-1.svg',
    alt: 'Qiagen',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/qt.svg',
    src: '/logos/qt-1.svg',
    alt: 'QT',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/skoda.svg',
    src: '/logos/skoda-1.svg',
    alt: 'Skoda',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/volkswagen.svg',
    src: '/logos/volkswagen-1.svg',
    alt: 'Volkswagen',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/zaiks.svg',
    src: '/logos/zaiks-1.svg',
    alt: 'Zaiks',
    width: 100,
    height: 100,
  },
];

// TODO: fix svgs for dark mode
export default function PartnersLogosSection() {
  return (
    <section className='my-20'>
      <InfiniteLogoScroll logos={logos} />
    </section>
  );
}
