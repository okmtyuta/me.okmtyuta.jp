import { Link, Sticky, Typography } from '@okmtyuta/amatelas/server'
import styles from './header.module.css'
import { ComponentProps } from 'react'
import clsx from 'clsx'

type DefaultHeaderProps = ComponentProps<'div'>
type HeaderProps = {
  label?: string
} & DefaultHeaderProps

export const Header = ({ className, label, ...props }: HeaderProps) => {
  return (
    <Sticky as="header" {...props} position="top" className={clsx(styles['header'], className)}>
      <div className={styles['header-content']}>
        <Typography>
          <Link href="/">{label ?? 'okmtyuta'}</Link>
        </Typography>
        {props.children}
      </div>
    </Sticky>
  )
}
