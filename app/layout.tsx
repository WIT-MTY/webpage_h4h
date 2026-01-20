import type { Metadata } from "next";
import { Questrial } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

// Fuentes H4H - WIT

const questrial = Questrial({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-questrial',
})

const highCruiser = localFont({
  src: '../public/fonts/highcruiser-personal-use-only.otf', 
  weight: '400',
  style: 'normal',
  variable: '--font-high-cruiser',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" 
      className={`${questrial.variable} ${highCruiser.variable}`}>
      <body className={questrial.className}>{children}</body>
    </html>
  )
}