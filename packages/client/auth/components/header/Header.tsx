import { Link, Sticky, Typography } from '@okmtyuta/amatelas'
import styles from './header.module.css'
import { clsx } from 'clsx'

export const Header = ({ className }: { className?: string }) => {
  return (
    <Sticky position="top" className={clsx(styles['header'], className)}>
      <div className={styles['header-content']}>
        <Typography color="primary" fontFamily="anton">
          <Link href="/">AmatelasUI</Link>
        </Typography>
      </div>
    </Sticky>
  )
}
