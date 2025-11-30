import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Singapore Life City by Chouhan Group - Premium Plots & Bungalows | Phase 1, 2 & 4',
  description: 'Singapore Life City - A landmark plotted township along the Bhilai–Durg corridor. Premium plots and bungalows across three phases. Phase 1: Ready-to-build plots. Phase 2: Pre-launch offers. Phase 4: Premium plots & bungalows near IIT Bhilai.',
}

import { Playfair_Display, Lato } from 'next/font/google'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans bg-cream text-dark-green antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}

