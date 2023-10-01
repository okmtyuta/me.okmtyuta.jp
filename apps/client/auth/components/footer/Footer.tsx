import { Space, Typography, Link } from '@okmtyuta/amatelas'
import styles from './footer.module.css'
import clsx from 'clsx'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={clsx(styles['footer'], className)}>
      Designed by
      <Space />
      <Typography color="primary" fontFamily="anton">
        <Link href="/">okmtyuta</Link>
      </Typography>
    </footer>
  )
}
