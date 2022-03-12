import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState } from 'react'
import Button from '../Button'

import styles from './Dropdown.module.css'

export interface DropdownProps {
  children?: ReactNode
}

export interface DropdownItemProps {
  label: string
  href: string
}

export default function Dropdown({ children }: DropdownProps) {
  const [isShowing, setIsShowing] = useState(false)
  const toggleShow = () => setIsShowing(value => !value)

  return (
    <div className={ styles.dropdown }>
      <Button
        className={ styles.btn }
        variant='text'
        label='Другое'
        onClick={ toggleShow }
      />
      <AnimatePresence>
        { isShowing && (
          <motion.div
            className={ styles.menu }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ul
              className={ styles.list }
              onClick={ () => setIsShowing(false) }
            >
              { children }
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function DropdownItem({ label, href }: DropdownItemProps) {
  return (
    <li>
      <Button
        className={ styles.menuItemBtn }
        variant='text'
        href={ href }
        label={ label }
      />
    </li>
  )
}

Dropdown.Item = DropdownItem