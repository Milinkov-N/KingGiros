import { HiOutlineX } from 'react-icons/hi'
import { COLLECTIONS, PAGES_LINKS } from 'src/consts'
import useActions from 'src/hooks/useActions'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { Button, Logo, Modal } from 'src/components'
import { OpenCart } from 'src/components/cart'

import styles from './NavModal.module.css'

export default function NavModal() {
  const { navIsOpened } = useTypedSelector(state => state.appReducer)
  const { setNavOpened } = useActions()

  const closeNav = () => setNavOpened(false)
  
  return (
    <Modal show={ navIsOpened } onClose={ closeNav }>
      <nav className={ styles.nav }>
        <Button
          className={ styles.closeNav }
          variant='icon'
          onClick={ closeNav }
        >
          <HiOutlineX />
        </Button>
        <Logo className={ styles.logo } size={ 120 } />
        <OpenCart className={ styles.openCart }/>
        <ul className={ styles.navList }>
          { COLLECTIONS.map(collection => {
            const href = collection.isPage
            ? `/${collection.handle}`
            : `/#${collection.handle}`

            return (
              <li key={ collection.tag }>
                <Button
                  className={ styles.link }
                  href={ href }
                  variant='text'
                  size='small'
                  label={ collection.name }
                  onClick={ closeNav }
                />
              </li>
            )
          })}

          { PAGES_LINKS.map(link => (
            <li key={ link.name }>
              <Button
                className={ styles.link }
                href={ link.href }
                variant='text'
                size='small'
                label={ link.name }
                onClick={ closeNav }
              />
            </li>
          ))}
        </ul>
      </nav>
    </Modal>
  )
}