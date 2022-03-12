import Container from '../Container'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={ styles.nav }>
      <Container className={ styles.wrapper }>
        <ul className={ styles.navList }>
          <li>
            {/* TODO: nav list items */}
          </li>
          <li>
            {/* TODO: Dropdown */}
          </li>
          <li>
            {/* TODO: page links */}
          </li>
        </ul>
        {/* TODO: open cart */}
      </Container>
    </nav>
  )
}

function fixOnScroll(element: HTMLElement) {
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