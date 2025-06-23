import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalNavigation from '../components/GlobalNavigation';
import { SearchProvider } from '../contexts/SearchContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "RandomAccessMind - Steve Campbell's 50+ Tab Brain",
    template: '%s | RandomAccessMind',
  },
  description:
    "Steve Campbell's organized chaos - frameworks, live thoughts, and deep insights from a naturally random access mind.",
  keywords: [
    'AI',
    'content adaptation',
    'FCL',
    'language learning',
    'personalized content',
    'live thoughts',
    'frameworks',
  ],
  authors: [{ name: 'Steven Campbell' }],
  creator: 'Steven Campbell',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://randomaccessmind.com',
    title: "RandomAccessMind - Steve Campbell's 50+ Tab Brain",
    description:
      "Steve Campbell's organized chaos - frameworks, live thoughts, and deep insights.",
    siteName: 'RandomAccessMind',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RandomAccessMind - Steve Campbell's 50+ Tab Brain",
    description:
      "Steve Campbell's organized chaos - frameworks, live thoughts, and deep insights.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <GlobalNavigation>{children}</GlobalNavigation>
        </SearchProvider>
      </body>
    </html>
  );
}
