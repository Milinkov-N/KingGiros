import { forwardRef } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import useActions from 'src/hooks/useActions'
import Button, { ButtonProps } from '../Button'

export interface OpenCartProps extends ButtonProps {
  className?: string
}

const OpenCart = forwardRef<HTMLDivElement, OpenCartProps>(({ className }, ref) => {
  const { setCartOpened } = useActions()
  const openCartModal = () => setCartOpened(true)
  
  return (
    <div ref={ ref } className={ className }>
      <Button
        variant='text'
        onClick={ openCartModal }
      >
        <FaShoppingCart />
        <span>0 RUB</span>
      </Button>
    </div>
  )
})

export default OpenCart