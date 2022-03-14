import Link from 'next/link'
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

import { Container } from '..'
import Logo from 'src/components/Logo'
import Stack from '../Stack'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <Container>
        <Stack className={ styles.main } justify='space-between' gap='lg'>
          <LogoImage />
          <ContactUs />
          <Company />
          <Info />
        </Stack>
        <hr />
        <Stack>
          <span>Copyright © 2022 by King Giros. All rights reserved.</span>
        </Stack>
      </Container>
    </footer>
  )
}

const LogoImage = () => (
  <Stack direction='col' align='center' gap='sm'>
    <Logo size={ 130 } />
  </Stack>
)

const ContactUs = () => (
  <div className={ styles.list }>
    <h2 className='heading-3'>Связаться с нами</h2>
    <ul className='flex flex-col gap-2sm'>
      <li>
        <Stack align='center' gap='sm'>
          <FaLocationArrow className={ styles.listIcon }/>
          г. Воткинск, улица 1 Мая, 102
        </Stack>
      </li>
      <li>
        <Stack align='center' gap='sm'>
          <FaPhoneAlt className={ styles.listIcon }/>
          8 (950) 838 99 99
        </Stack>  
      </li>
      <li>
        <Stack align='center' gap='sm'>
          <FaEnvelope className={ styles.listIcon }/>
          spik@mail.ru
        </Stack>
      </li>
    </ul>
  </div>
)

const Company = () => (
  <div className={ styles.list }>
    <h2 className='heading-3'>Комания</h2>
    <ul className='flex flex-col gap-2sm'>
      <li>
        <Link href='/about-us'>
          <a>О нас</a>
        </Link>
      </li>
      <li>
        <Link href='/work'>
          <a>Работа</a>
        </Link>
      </li>
    </ul>
  </div>
)

const Info = () => (
  <div className={ styles.list }>
    <h2 className='heading-3'>Информация</h2>
    <ul className='flex flex-col gap-2sm'>
      <li>
        <Link href='/contact-us'>
          <a>Связаться с нами</a>
        </Link>
      </li>
      <li>
        <Link href='/privacy-policy'>
          <a>Политика конфиденциальности</a>
        </Link>
      </li>
    </ul>
  </div>  
)