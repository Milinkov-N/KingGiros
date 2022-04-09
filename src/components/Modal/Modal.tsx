import { motion, AnimatePresence, MotionProps } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import { Portal } from 'src/components'

export interface ModalProps extends MotionProps {
  show: boolean
  onClose: () => void
  children?: ReactNode
}

export default function Modal({
  show,
  onClose,
  initial = { x: '-100%' },
  animate = { x: 0 },
  exit = { x: '-100%' },
  transition = { duration: 0.3, ease: 'easeInOut' },
  children
}: ModalProps) {

  useEffect(() => {
    if (show) {
      document.body.classList.add('scroll-lock')
    } else {
      document.body.classList.remove('scroll-lock')
    }
  }, [show])

  return (
    <Portal selector='#portal'>
      <AnimatePresence>
        { show && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
          }}>
            <motion.div
              className='overlay'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={ onClose }
            />

            <motion.aside
              initial={ initial }
              animate={ animate }
              exit={ exit }
              transition={ transition }
            >
              { children }
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  )
}