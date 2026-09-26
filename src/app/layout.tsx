import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const satoshi = localFont({
  src: [
    { path: '../../public/fonts/Satoshi/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Satoshi/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Satoshi/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ventrex',
    template: '%s - Ventrex',
  },
  description: 'VENTREX is the partner of choice for valve technology solutions for the mobility of the future.',
  icons: {
    icon: [
      { url: '/images/branding/favicon-32x32.png', sizes: '32x32' },
      { url: '/images/branding/favicon-192x192.png', sizes: '192x192' },
    ],
    apple: '/images/branding/favicon-180x180.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={`home wp-singular page-template page-template-template-homepage page-template-template-homepage-php page page-id-7 wp-theme-playpresswp ${satoshi.variable}`} data-lang="en" data-type="template" data-name="homepage">
        {children}
      </body>
    </html>
  );
}
