import Link from 'next/link'
import { ComponentPropsWithRef } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'icon' | 'text'
export type ButtonSize    = 'small' | 'medium' | 'large'

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  label?: string
  glowing?: boolean
  onClick?: () => void
}

export default function Button({
  className,
  href,
  variant = 'primary',
  size = 'medium',
  glowing,
  label,
  onClick,
  children,
  ...all
}: ButtonProps) {
  const btnClasses = ['btn']
  btnClasses.push(`btn-${variant}`)
  btnClasses.push(`btn-${size}`)
  glowing && btnClasses.push(`btn-primary-glowing`)
  className && btnClasses.push(className)

  const AsLink = () => (
    <Link href={ href! }>
      <a>
        <button
          className={ btnClasses.join(' ') }
          onClick={ onClick }
          { ...all }
        >
          { children ? children : label }
        </button>
      </a>
    </Link>
  )

  const AsButton = () => (
    <button
      className={ btnClasses.join(' ') }
      onClick={ onClick }
      { ...all }
    >
      { children ? children : label }
    </button>
  )

  return href ? <AsLink /> : <AsButton />
}
