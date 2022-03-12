import Container from '../Container'
import { COLLECTIONS, PAGES_LINKS } from 'src/consts'

import styles from './Nav.module.css'
import Button from '../Button'

export default function Nav() {
  return (
    <nav
      className={ styles.nav }
      ref={ fixOnScroll }
    >
      <Container className={ styles.wrapper }>
        <ul className={ styles.navList }>
          <CollectionsLinks />
          <DropdownLinks />
          <PagesLinks />
        </ul>
        {/* TODO: open cart */}
      </Container>
    </nav>
  )
}

function CollectionsLinks() {
  return (
    <>
      { COLLECTIONS.map((collection, index) => {
        const href = collection.isPage
          ? `/${collection.handle}`
          : `/#${collection.handle}`

        while (index < 8) {
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
        }
      })}
    </>
  )
}

function DropdownLinks() {
  return (
    <li>
      {/* TODO: Dropdown */}
    </li>
  )
}

function PagesLinks() {
  return (
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
  )
}

function fixOnScroll(element: HTMLElement) {
  if (!element) return

  window.onscroll = () => {
    const elRectTop = element.getBoundingClientRect().top

    switch(true) {
      case elRectTop <= 0:
        element.classList.add(styles.navFixed)
        break;

      case elRectTop > 0:
        element.classList.remove(styles.navFixed)
        break;
    }
  }
}