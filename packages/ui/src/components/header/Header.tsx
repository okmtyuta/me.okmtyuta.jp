import { Link, Sticky, Typography } from '@okmtyuta/amatelas'
import styles from './header.module.css'
import { ComponentProps } from 'react'
import clsx from 'clsx'

type DefaultHeaderProps = ComponentProps<'div'>
type HeaderProps = DefaultHeaderProps

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <Sticky {...props} position="top" className={clsx(styles['header'], className)}>
      <div className={styles['header-content']}>
        <Typography color="primary" fontFamily="anton">
          <Link href="/">okmtyuta About</Link>
        </Typography>
        {props.children}
      </div>
    </Sticky>
  )
}
