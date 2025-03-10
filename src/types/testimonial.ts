/**
 * Represents a client testimonial
 */
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company?: string;
  content: string;
  avatarUrl: string;
}
