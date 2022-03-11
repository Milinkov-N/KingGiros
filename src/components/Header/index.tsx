import CartModal from '../CartModal'
import Container from '../Container'
import Logo from '../Logo'
import NavModal from '../NavModal'
import { FaPhoneAlt } from 'react-icons/fa'

import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={ styles.header }>
        <Container className={ styles.container }>
          <div className={ styles.title }>
            <div>
              <h2>Вкусная еда</h2>
              <h3>И напитки</h3>
            </div>
          </div>
          <Logo size={ 120 } />
          <div className={ styles.delivery }>
            <p>Доставка еды <span>Воткинск</span></p>
            <a href='tel:+79508389999' className={ styles.phone }>
              <div className={ styles.iconWrap }>
                <FaPhoneAlt className={ styles.icon }/>
              </div>
              <span>8 950 838 99 99</span>
            </a>
        </div>
        </Container>
      </header>
      <CartModal />
      <NavModal />
    </>
  )
}