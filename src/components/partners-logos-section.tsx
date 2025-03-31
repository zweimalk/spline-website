import { InfiniteLogoScroll } from '@/components/infinite-logo-scroll';
import { Suspense } from 'react';

const logos = [
  {
    srcDark: '/logos/autoliv.svg',
    src: '/logos/light/autoliv.svg',
    alt: 'Autoliv',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/bertrandt.svg',
    src: '/logos/light/bertrandt.svg',
    alt: 'Bertrandt',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/ford.svg',
    src: '/logos/light/ford.svg',
    alt: 'Ford',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/jlr.svg',
    src: '/logos/light/jlr.svg',
    alt: 'JLR',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/lotus.svg',
    src: '/logos/light/lotus.svg',
    alt: 'Lotus',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/mercedes.svg',
    src: '/logos/light/mercedes.svg',
    alt: 'Mercedes',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/ncr.svg',
    src: '/logos/light/ncr.svg',
    alt: 'NCR',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/porsche.svg',
    src: '/logos/light/porsche.svg',
    alt: 'Porsche',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/qiagen.svg',
    src: '/logos/light/qiagen.svg',
    alt: 'Qiagen',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/qt_dark.svg',
    src: '/logos/light/qt.svg',
    alt: 'QT',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/skoda.svg',
    src: '/logos/light/skoda.svg',
    alt: 'Skoda',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/volkswagen.svg',
    src: '/logos/light/volkswagen.svg',
    alt: 'Volkswagen',
    width: 100,
    height: 100,
  },
  {
    srcDark: '/logos/zaiks.svg',
    src: '/logos/light/zaiks.svg',
    alt: 'Zaiks',
    width: 100,
    height: 100,
  },
];

export default function PartnersLogosSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className='my-4'>
        <InfiniteLogoScroll logos={logos} />
      </section>
    </Suspense>
  );
}
