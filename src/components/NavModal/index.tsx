import { COLLECTIONS, PAGES_LINKS } from 'src/consts'
import useActions from 'src/hooks/useActions'
import useTypedSelector from 'src/hooks/useTypedSelector'
import Button from '../Button'
import Modal from '../Modal'

import styles from './NavModal.module.css'

export default function NavModal() {
  const { navIsOpened } = useTypedSelector(state => state.appReducer)
  const { setNavOpened } = useActions()

  const closeNav = () => setNavOpened(false)
  
  return (
    <Modal show={ navIsOpened } onClose={ closeNav }>
      <nav className={ styles.nav }>
        <ul>
          <>
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
                  />
                </li>
              )
            })}
          </>
          <>
            { PAGES_LINKS.map(link => (
              <li key={ link.name }>
                <Button
                  className={ styles.link }
                  href={ link.href }
                  variant='text'
                  size='small'
                  label={ link.name }
                />
              </li>
            ))}
          </>
        </ul>
      </nav>
    </Modal>
  )
}