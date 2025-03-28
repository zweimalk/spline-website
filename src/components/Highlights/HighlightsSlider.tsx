"use client";

import { Highlight } from "@/types/highlight";
import { useCallback, useEffect, useRef, useState } from "react";
import { HighlightCard } from "./HighlightCard";
import { cn } from "@/lib/utils";

interface HighlightsSliderProps {
  highlights: Highlight[];
  autoplayInterval?: number;
}

/**
 * Displays a slider of testimonials with pagination dots and touch swipe support
 */
export function HighlightsSlider({
  highlights,
  autoplayInterval = 5000,
}: HighlightsSliderProps) {
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToNextSlide = useCallback(() => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = sliderRef.current.clientWidth;
      const newScrollLeft = Math.max(
        0,
        Math.min(scrollLeft + clientWidth, scrollWidth - clientWidth)
      );
      sliderRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }, [scrollLeft]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.scrollLeft || 0));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - startX;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = -x;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [goToNextSlide, isAutoPlaying, autoplayInterval]);

  return (
    <div
      className="relative w-full overflow-hidden p-3"
      onMouseEnter={() => setIsAutoPlaying(false)}
    >
      <div
        ref={sliderRef}
        className={cn("relative overflow-x-scroll scrollbar-hide p-1")}
        style={{
          scrollBehavior: isDragging ? "auto" : "smooth",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className={cn(scrollLeft === 0 && "translate-x-12")}>
          <div className="flex gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight._id}
                className="w-full shrink-0"
                onClick={() => {
                  window.open(highlight.ctaUrl, "_blank");
                }}
              >
                <HighlightCard highlight={highlight} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
