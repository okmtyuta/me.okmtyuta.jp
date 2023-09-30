import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { Frame } from '@okmtyuta/amatelas'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'okmtyuta | about',
  description: 'okmtyuta about page'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Frame>{children}</Frame>
        <Footer />
      </body>
    </html>
  )
}