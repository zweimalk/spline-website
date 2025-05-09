import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Providers from '@/components/providers';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
const neueHaasGroteskDisplayPro = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasGrotesk/NeueHaasDisplayLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasGrotesk/NeueHaasDisplayRoman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasGrotesk/NeueHaasDisplayMediu.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-neue-haas', // Add variable for consistent usage
});

export const metadata: Metadata = {
  title: 'Spline 2025',
  description: 'Enabling the future of design',
  other: {
    'next-font-preload': 'true',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script type='application/javascript' src='https://spline.traffit.com/public/an/generateJs/' />
      </head>
      <body className={`${neueHaasGroteskDisplayPro.className} antialiased`}>
        <Providers>
          <ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange>
            <Header />
            <main>{children}</main>
            <Footer />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
