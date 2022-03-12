import { forwardRef } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Button, { ButtonProps } from '../Button'

import styles from './Cart.module.css'

export interface OpenCartProps extends ButtonProps {
  className?: string
}

export default function Cart() {
  return (
    <div>Cart</div>
  )
}

const OpenCart = forwardRef<HTMLDivElement, OpenCartProps>(({ className }, ref) => (
  <div ref={ ref } className={ className }>
    <Button variant='text'>
      <FaShoppingCart />
      <span>0 RUB</span>
    </Button>
  </div>
))

export { OpenCart }