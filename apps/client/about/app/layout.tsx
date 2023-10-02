import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header, Footer } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Link } from '@okmtyuta/amatelas/server'
import { GitHubLogoSVG, ZennLogoSVG, YouTubeLogoSVG } from '@/components/svg'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'
import headerStyles from './header.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'okmtyuta | about',
  description: 'okmtyuta about page'
}

const Links = () => {
  return (
    <div className={headerStyles['links']}>
      <Link href="https://github.com/okmtyuta">
        <div className={headerStyles['github-logo-svg-exterior']}>
          <GitHubLogoSVG className={headerStyles['github-logo-svg']} />
        </div>
      </Link>
      <Link href="https://zenn.dev/okmtyuta">
        <div className={headerStyles['zenn-logo-svg-exterior']}>
          <ZennLogoSVG className={headerStyles['zenn-logo-svg']} />
        </div>
      </Link>
      <Link href="https://youtube.com/@okmtyuta?si=IIyK50KH3XzG5QM8">
        <div className={headerStyles['youtube-logo-svg-exterior']}>
          <YouTubeLogoSVG className={headerStyles['youtube-logo-svg']} />
        </div>
      </Link>
    </div>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header label="okmtyuta about">
          <Links />
        </Header>
        <Frame>{children}</Frame>
        <Footer />
      </body>
    </html>
  )
}
