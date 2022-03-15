import Link from 'next/link'

import useClassName from 'src/hooks/useClassName'
import Image from 'next/image'
import logoImage from 'public/logo_2022.png'

import styles from './Logo.module.css'
export interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className, size = 150 }: LogoProps) {
  const classNames = useClassName([styles.logo, className])

  const logoWidth = size
  const logoHeight = logoImage.height / (logoImage.width / logoWidth)

  return (
    <Link  href="/">
      <a className={ classNames }>
        <Image
          priority
          src={ logoImage.src }
          width={ logoWidth }
          height={ logoHeight }
          alt='King Giros logo'
        />
      </a>
    </Link>
  )
}