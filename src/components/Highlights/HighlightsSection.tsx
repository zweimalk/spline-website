'use client';
import { Highlight } from '@/types/highlight';
import { useQuery } from 'convex/react';
import { Suspense } from 'react';
import { api } from '../../../convex/_generated/api';
import { HighlightsSlider } from './HighlightsSlider';

/**
 * Displays the testimonials section with heading and slider
 */
export function HighlightsSection() {
  const highlights = useQuery(api.highlights.get);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HighlightsSlider highlights={(highlights as unknown as Highlight[]) ?? []} />
    </Suspense>
  );
}
