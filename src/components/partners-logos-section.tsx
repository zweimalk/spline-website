import { Suspense } from 'react';
import { InfiniteScroller } from './InfiniteTryout/InfiniteScroller';

export default function PartnersLogosSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <InfiniteLogoScroll logos={logos} /> */}
      <InfiniteScroller />
    </Suspense>
  );
}
