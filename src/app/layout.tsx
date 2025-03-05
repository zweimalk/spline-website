import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const neueHaasGroteskDisplayPro = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasGrotesk/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasGrotesk/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neue-haas", // Add variable for consistent usage
});

export const metadata: Metadata = {
  title: "Spline 2025",
  description: "Enabling the future of design",
  other: {
    "next-font-preload": "true",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueHaasGroteskDisplayPro.className} antialiased`}>{children}</body>
    </html>
  );
}
