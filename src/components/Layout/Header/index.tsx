import CartModal from '../../cart'
import { Container } from '../../layout'
import Logo from '../../Logo'
import NavModal from '../../NavModal'
import Button from '../../Button'
import useTypedSelector from 'src/hooks/useTypedSelector'
import useActions from 'src/hooks/useActions'

import { FaPhoneAlt } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'

import styles from './Header.module.css'

export default function Header() {
  const { navResponsive } = useTypedSelector(state => state.appReducer)
  const { setNavOpened } = useActions()

  const openNav = () => setNavOpened(true)

  return (
    <>
      <header className={ `${ styles.header } ${ navResponsive ? styles.headerResponsive : '' }` }>
        <Container className={ styles.container }>
          <>
            { navResponsive && (
              <Button
                className={ styles.openNav }
                variant='icon'
                onClick={ openNav }
              >
                <HiMenu />
              </Button>
            )}
          </>
          <div className={ styles.title }>
            <div>
              <h2>Вкусная еда</h2>
              <h3>И напитки</h3>
            </div>
          </div>
          <Logo size={ 150 } />
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