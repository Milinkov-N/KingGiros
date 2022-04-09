import Link from 'next/link'
import { useEffect } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'

import CartModal, { OpenCart } from 'src/components/cart'
import { Container } from '..'
import { Button, Logo, NavModal } from 'src/components'
import useTypedSelector from 'src/hooks/useTypedSelector'
import useActions from 'src/hooks/useActions'

import styles from './Header.module.css'

export default function Header() {
  const { navResponsive } = useTypedSelector(state => state.appReducer)
  const { setNavResp } = useActions()
  
  useEffect(() =>{
    if (window.innerWidth <= 1000) {
      setNavResp(true)
    }
  }, [])

  return (
    <>
      <header className={ `${ styles.header } ${ navResponsive ? styles.headerResponsive : '' }` }>
        <Container>
          { navResponsive
            ? <ResponsiveHeader />
            : (
              <Container className={ styles.container }>
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
          )}
        </Container>
      </header>
      <CartModal />
      <NavModal />
    </>
  )
}

const ResponsiveHeader = () => {
  const { setNavOpened } = useActions()

  const openNav = () => setNavOpened(true)

  return (
    <div className={ styles.respHeaderWrapper }>
      <Button
        className={ styles.openNav }
        variant='icon'
        onClick={ openNav }
      >
        <HiMenu />
      </Button>
      <Link href='/'>
        <a>
          <h2 className={ styles.respHeaderTitle }>King Giros</h2>
        </a>
      </Link>
      <OpenCart className={ styles.openCart } color='#fff' />
    </div>
  )
}