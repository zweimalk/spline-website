'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import './InfiniteScroller.css';

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

export const InfiniteScroller = () => {
  const { resolvedTheme } = useTheme();

  const renderStamp = Date.now();

  return (
    <div
      className='infinite-scroller-container'
      data-direction={'horizontal'}
      data-translate={'items'}
      data-play-state={'running'}
      data-spill={false}
      style={
        {
          '--speed': 40,
          '--count': logos.length,
          '--scale': 1,
          '--inset': 4,
          '--outset': 4,
        } as React.CSSProperties
      }
    >
      <ul>
        {logos.map((logo, index) => {
          return (
            <li
              key={`index-${renderStamp}--${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
              style={{ '--index': index } as React.CSSProperties}
            >
              <Image
                src={resolvedTheme === 'dark' ? logo.srcDark : logo.src}
                className='block w-18 h-18 md:w-24 md:h-24'
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                draggable={false}
                loading='eager'
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
