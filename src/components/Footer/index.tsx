import Link from 'next/link'

import Container from '../Container'
import Img from '../Img'
import Stack from '../Stack'
import Logo from 'public/logo_2022.png'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <Container>
        <Stack className={ styles.main } justify='space-between' gap='lg'>
          <Stack direction='col' align='center' gap='sm'>
            <Img
              src={ Logo.src }
              size={ 120 }
              alt='King Giros logo'
            />
          </Stack>
          <div className={ styles.list }>
            <h2 className='heading-3'>Связаться с нами</h2>
            <ul className='flex flex-col gap-2sm'>
              <li>
                <Stack align='center' gap='sm'>
                  {/* <FontAwesomeIcon icon={ faLocationArrow } style={{ fontSize: '.8rem' }} /> */}
                  г. Воткинск, улица 1 Мая, 102
                </Stack>
              </li>
              <li>
                <Stack align='center' gap='sm'>
                  {/* <FontAwesomeIcon icon={ faPhoneAlt } style={{ fontSize: '.8rem' }} /> */}
                  8 (950) 838 99 99
                </Stack>  
              </li>
              <li>
                <Stack align='center' gap='sm'>
                  {/* <FontAwesomeIcon icon={ faEnvelope } style={{ fontSize: '.8rem' }} /> */}
                  spik@mail.ru
                </Stack>
              </li>
            </ul>
          </div>
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
        </Stack>
        <hr />
        <Stack>
          <span>Copyright © 2022 by King Giros. All rights reserved.</span>
        </Stack>
      </Container>
    </footer>
  )
}