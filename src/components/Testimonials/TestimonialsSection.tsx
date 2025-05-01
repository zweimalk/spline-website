import type { Testimonial } from '@/types/testimonial';
import { TestimonialSlider } from './TestimonialSlider';

/**
 * Sample testimonial data with avatars from Unsplash
 * Using high-quality, free-to-use portrait images
 */
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Bartosz Mielecki',
    position: 'Cluster Manager',
    company: 'PGM',
    content:
      'The company creates an ideal space for development for its specialists, who are willing to share know-how in implemented projects, Their abitity to predict, their understanding of the specifics of the market, and their abitity to adapt to dynamicaLty chenging ensure effective cooperation.',
    avatarUrl: '/images/avatar_man.svg',
  },
  {
    id: '2',
    name: 'Henning Meyer',
    position: 'Head of Surfacing',
    company: 'Bertrandt',
    content:
      "We especially liked Spline's adherence to deadlines and flexibility as well as the quality of projects execution.",
    avatarUrl: '/images/avatar_man.svg',
  },
  {
    id: '3',
    name: 'Anja Müller',
    position: 'Senior Project Manager',
    company: 'Olympus',
    content:
      "I had the pleasure of collaborating with Spline's software engineering teams, and I was impressed by their professionalism, technical expertise, and ability to seamlessly integrate with our project needs. Their team was highly responsive, and the quality of work delivered exceeded our expectations.",
    avatarUrl: '/images/avatar_woman.svg',
  },
  {
    id: '4',
    name: 'Natalia Madera',
    position: 'Category Buyer IT',
    company: 'Advalmed',
    content:
      'Spline ensures the best possible customer care. We can always count on clear and consistent messages, which builds trust and certainty in our relationships.',
    avatarUrl: '/images/avatar_woman.svg',
  },
];

/**
 * Displays the testimonials section with heading and slider
 */
export function TestimonialsSection() {
  return <TestimonialSlider testimonials={testimonials} />;
}
