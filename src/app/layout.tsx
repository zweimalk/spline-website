import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";

const neueHaasGroteskDisplayPro = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasGrotesk/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${neueHaasGroteskDisplayPro.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
