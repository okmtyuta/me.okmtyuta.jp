import { Space, Typography } from '@okmtyuta/amatelas'
import styles from './footer.module.css'
import { ComponentProps } from 'react'
import { clsx } from 'clsx'

type DefaultFooterProps = ComponentProps<'footer'>
type FooterProps = DefaultFooterProps

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer {...props} className={clsx(styles['footer'], className)}>
      Designed by
      <Space />
      <Typography fontFamily="anton">okmtyuta</Typography>
    </footer>
  )
}
