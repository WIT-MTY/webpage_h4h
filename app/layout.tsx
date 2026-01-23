import type { Metadata } from "next";
import { Questrial, Montserrat } from 'next/font/google'
import './globals.css'

// Fuentes H4H - WIT

const questrial = Questrial({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-questrial',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
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
      className={`${questrial.variable} ${montserrat.variable}`}>
      <body className={questrial.className}>{children}</body>
    </html>
  )
}