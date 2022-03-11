import CartModal from '../CartModal'
import Container from '../Container'
import Logo from '../Logo'
import NavModal from '../NavModal'

import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={ styles.header }>
        <Container className={ styles.container }>
          <h2 className={ styles.title }>
            <span>Вкусная еда</span>
            <span>И напитки</span>
          </h2>
          <Logo size={ 120 } />
          <div className={ styles.delivery }>
            <p>Доставка еды <span>Воткинск</span></p>
            <a href='tel:+79508389999' className={ styles.phone }>
              <div className={ styles.iconWrap }>
                {/* <FontAwesomeIcon className={ styles.icon } icon={ faPhoneAlt }/> */}
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