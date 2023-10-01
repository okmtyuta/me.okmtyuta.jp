import type { Metadata } from 'next'
import { clsx } from 'clsx'
import { Inter } from 'next/font/google'
import { Frame } from '@okmtyuta/amatelas'

import './reset.css'
import '@okmtyuta/amatelas/style.css'
import styles from './layout.module.css'

import { Header, Footer } from '@okmtyuta/me.okmtyuta.jp.ui'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'okmtyuta | auth',
  description: 'okmtyuta auth'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, styles['body'])}>
        <Header className={styles['header']} />
        <main className={styles['main']}>
          <Frame>{children}</Frame>
        </main>
        <Footer className={styles['footer']} />
      </body>
    </html>
  )
}
