import { Link, Sticky, Typography } from '@okmtyuta/amatelas'
import styles from './header.module.css'
import { GitHubLogoSVG, YouTubeLogoSVG, ZennLogoSVG } from '../svg'

export const Header = () => {
  return (
    <Sticky position="top" className={styles['header']}>
      <div className={styles['header-content']}>
        <Typography color="primary" fontFamily="anton">
          <Link href="/">okmtyuta</Link>
        </Typography>
        <div className={styles['links']}>
          <Link href="https://github.com/okmtyuta">
            <div className={styles['github-logo-svg-exterior']}>
              <GitHubLogoSVG className={styles['github-logo-svg']} />
            </div>
          </Link>
          <Link href="https://zenn.dev/okmtyuta">
            <div className={styles['zenn-logo-svg-exterior']}>
              <ZennLogoSVG className={styles['zenn-logo-svg']} />
            </div>
          </Link>
          <Link href="https://youtube.com/@okmtyuta?si=IIyK50KH3XzG5QM8">
            <div className={styles['youtube-logo-svg-exterior']}>
              <YouTubeLogoSVG className={styles['youtube-logo-svg']} />
            </div>
          </Link>
        </div>
      </div>
    </Sticky>
  )
}
