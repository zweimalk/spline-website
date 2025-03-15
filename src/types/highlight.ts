export type AirtableBrandIcon = "LinkedIn" | "Behance" | "Instagram" | "Facebook" | "Dribbble";

export interface Highlight {
  _id: string;
  year: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaLabel?: string;
  ctaUrl?: string;
  brandIcon?: AirtableBrandIcon;
}
