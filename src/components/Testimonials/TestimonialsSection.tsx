import { Testimonial } from "@/types/testimonial";
import { TestimonialSlider } from "./TestimonialSlider";

/**
 * Sample testimonial data with avatars from Unsplash
 * Using high-quality, free-to-use portrait images
 */
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "David Richardson",
    position: "Managing Director",
    company: "WA Consultant",
    content:
      "We especially liked Spline's precise adherence to deadlines and flexibility as well as the quality of project execution.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "David Mark",
    position: "Managing Director",
    company: "WA Consultant",
    content:
      "We especially liked Spline's precise adherence to deadlines and flexibility as well as the quality of project execution.",
    avatarUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechForward",
    content:
      "Spline delivered our project on time and exceeded our expectations. Their technical expertise and communication were outstanding.",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Michael Chen",
    position: "Product Manager",
    company: "InnovateCorp",
    content:
      "Working with Spline transformed our product development process. Their team brought innovative solutions to complex problems.",
    avatarUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&auto=format&fit=crop",
  },
];

/**
 * Displays the testimonials section with heading and slider
 */
export function TestimonialsSection() {
  return <TestimonialSlider testimonials={testimonials} />;
}
