import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { COLLECTIONS, PAGES_LINKS } from 'src/consts'
import Button from '../Button'
import Portal from '../Portal'

import styles from './NavModal.module.css'
export interface NavModalProps extends MotionProps {
  show: boolean
  onClose: () => void
}

export default function NavModal({ show = true, onClose }: NavModalProps) {
  return (
    <Portal selector='#portal'>
      <AnimatePresence>
        { show && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
            <motion.div
              className={ styles.overlay }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={ onClose }
            />

            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
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
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  )
}