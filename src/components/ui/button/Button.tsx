import React, {ReactNode} from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'

interface ButtonProps {
  href: string
  children: ReactNode
  variant: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({href, children, variant}) => {
  const buttonClassName =
    variant === 'primary' ? styles.primary : styles.secondary

  return (
    <Link href={href} className={`${styles.button} ${buttonClassName}`}>
      {children}
    </Link>
  )
}

export default Button
