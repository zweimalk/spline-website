import { InfiniteLogoScroll } from '@/components/infinite-logo-scroll';

const logos = [
  {
    src: '/logos/autoliv.svg',
    alt: 'Autoliv',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/bertrandt.svg',
    alt: 'Bertrandt',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/ford.svg',
    alt: 'Ford',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/jlr.svg',
    alt: 'JLR',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/lotus.svg',
    alt: 'Lotus',
    width: 100,
    height: 100,
  },
  { src: '/logos/mercedes.svg', alt: 'Mercedes', width: 100, height: 100 },
  {
    src: '/logos/ncr.svg',
    alt: 'NCR',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/porsche.svg',
    alt: 'Porsche',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/qiagen.svg',
    alt: 'Qiagen',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/qt.svg',
    alt: 'QT',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/skoda.svg',
    alt: 'Skoda',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/volkswagen.svg',
    alt: 'Volkswagen',
    width: 100,
    height: 100,
  },
  {
    src: '/logos/zaiks.svg',
    alt: 'Zaiks',
    width: 100,
    height: 100,
  },
];

export default function PartnersLogosSection() {
  return (
    <section className='my-30'>
      <InfiniteLogoScroll logos={logos} />
    </section>
  );
}
