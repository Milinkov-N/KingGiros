import Link from 'next/link'
import { HiOutlineX } from 'react-icons/hi'
import Button from '../Button'
import { AnimatePresence, motion } from 'framer-motion'

import styles from 'styles/CheckoutPage.module.css'

export interface ErrorProps {
  show: boolean
  onClose: () => void
}

export default function Error({ show, onClose }: ErrorProps) {
  return (
    <AnimatePresence>
      { show && (
        <motion.div
          className={ styles.errorMessage }
          initial={{ left: '-25%', opacity: 0 }}
          animate={{ left: '0', opacity: 1 }}
          exit={{ left: '-25%', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h3>Ошибка оформления заказа</h3>
          <p>
            При попытке оформить заказ произошла неизвестная ошибка. Попробуйте еще раз или
            <Link href='/contact-us'>
              <a> сообщите нам о ней.</a>
            </Link>
          </p>
          <Button
            className={ styles.errorClose }
            variant='icon'
            onClick={ onClose }
          >
            <HiOutlineX />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>  
  )
}