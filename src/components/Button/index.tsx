import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

export type ButtonVariant = 'primary' | 'white' | 'black' | 'icon' | 'text'
export type ButtonSize    = 'small' | 'medium' | 'large'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  as?: 'link' | 'button'
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  label?: string
  onClick?: () => void
}

export default function Button({
  className,
  as = 'button',
  href,
  variant = 'primary',
  size = 'medium',
  label,
  onClick,
  children,
  ...all
}: ButtonProps) {
  const btnClasses = ['btn']
  btnClasses.push(`btn-${variant}`)
  btnClasses.push(`btn-${size}`)
  className && btnClasses.push(className)

  const AsLink = () => (
    <button
      className={ btnClasses.join(' ') }
      onClick={ onClick }
      { ...all }
    >
      <Link href={ href! }>
        <a>
          { children ? children : label }
        </a>
      </Link>
    </button>
    
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

  return as === 'link' ? <AsLink /> : <AsButton />
}
