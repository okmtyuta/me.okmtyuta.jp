import type { Metadata } from 'next'
import { Inter, Anton } from 'next/font/google'

import { Header, Footer } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Space } from '@okmtyuta/amatelas/server'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

const inter = Inter({ subsets: ['latin'] })
const anton = Anton({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'okmtyuta | about',
  description: 'okmtyuta about page'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header className={anton.className} label="okmtyuta about" />
        <Frame>{children}</Frame>
        <Footer>
          Designed by
          <Space />
          <span className={anton.className}>okmtyuta</span>
        </Footer>
      </body>
    </html>
  )
}
