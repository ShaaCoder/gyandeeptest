import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'B.K.Gyan Deep Public School - Nurturing Young Minds Since 1995',
  description: 'Excellence in foundational education from Nursery to Class 8. Holistic development, innovative learning, and a safe environment in Okhla, Delhi.',
  icons: {
    icon: '/favicon.png', // Updated: Points to your new favicon in /public/
  },
  openGraph: {
    images: [
      {
        url: '/school-hero.png', // Your hero image in /public
        width: 1200,
        height: 630,
        alt: 'B.K.Gyan Deep Public School Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/school-hero.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}