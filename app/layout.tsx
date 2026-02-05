import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Md. Akash - Web Developer & SEO Specialist',
  description: 'High-performance web development and SEO optimization for modern businesses',
  keywords: ['web developer', 'SEO specialist', 'next.js', 'react', 'web performance'],
  authors: [{ name: 'Md. Akash' }],
  creator: 'Md. Akash',
  publisher: 'Md. Akash',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quiz.mdakash.me',
    title: 'Md. Akash - Web Developer & SEO Specialist',
    description: 'High-performance web development and SEO optimization',
    siteName: 'Md. Akash Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Akash - Web Developer & SEO Specialist',
    description: 'High-performance web development and SEO optimization',
    creator: '@mdakash',
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-0 text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
