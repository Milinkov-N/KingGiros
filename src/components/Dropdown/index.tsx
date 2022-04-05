import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
import useClassName from 'src/hooks/useClassName'
import useOutsideClick from 'src/hooks/useOutsideClick'
import Button from '../Button'

import styles from './Dropdown.module.css'

export interface DropdownProps {
  className?: string
  btnClassName?: string
  children?: ReactNode
}

export interface DropdownItemProps {
  label: string
  href: string
}

export default function Dropdown({ className, btnClassName, children }: DropdownProps) {
  const drodownRef = useRef(null)
  const [isShowing, setIsShowing] = useState(false)
  const dropdownClasses = useClassName([styles.dropdown, className])

  const toggleShow = () => setIsShowing(value => !value)

  const handleClickOutside = () => setIsShowing(false)

  useOutsideClick(drodownRef, handleClickOutside)

  return (
    <div className={ dropdownClasses }>
      <Button
        className={ btnClassName }
        variant='text'
        label='Другое'
        onClick={ toggleShow }
      />
      <AnimatePresence>
        { isShowing && (
          <motion.div
            ref={ drodownRef }
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