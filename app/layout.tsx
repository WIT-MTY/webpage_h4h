import type { Metadata } from "next";
import { Questrial } from 'next/font/google'
import './globals.css'

// Fuentes H4H - WIT

const questrial = Questrial({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-questrial',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" 
      className={`${questrial.variable}`}>
      <body className={questrial.className}>{children}</body>
    </html>
  )
}