import Link from 'next/link'

import Img from '../Img'
import logoImage from 'public/logo_2022.png'

import styles from './Logo.module.css'
import useClassName from 'src/hooks/useClassName'

export interface LogoProps {
  className?: string
  size?: string | number
}

export default function Logo({ className, size = 200 }: LogoProps) {
  const classNames = useClassName([styles.logo, className])

  return (
    <Link  href="/">
      <a className={ classNames }>
        <Img
          size={ size }
          src={ logoImage.src }
        />
      </a>
    </Link>
  )
}