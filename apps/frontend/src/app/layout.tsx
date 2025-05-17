import type { Metadata } from 'next';
import { IBM_Plex_Sans, Pixelify_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Footer, Header } from '@/components';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

const pixelifySans = Pixelify_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-pixelify-sans',
});

export const metadata: Metadata = {
  title: 'Powder App',
  description: 'Powder application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${pixelifySans.variable}`}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
