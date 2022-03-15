import { forwardRef } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import useActions from 'src/hooks/useActions'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { currencyFormatter } from 'src/utils'
import Button, { ButtonProps } from '../Button'

export interface OpenCartProps extends ButtonProps {
  className?: string
  color?: string
}

const OpenCart = forwardRef<HTMLDivElement, OpenCartProps>(({ className, color }, ref) => {
  const { subtotal } = useTypedSelector(state => state.cartReducer)
  const { setCartOpened } = useActions()
  const openCartModal = () => setCartOpened(true)
  
  return (
    <div ref={ ref } className={ className }>
      <Button
        className='flex ai-center gap-2sm'
        variant='text'
        onClick={ openCartModal }
      >
        <FaShoppingCart style={{ color }}/>
        <span style={{ color }}>{ currencyFormatter(subtotal) }</span>
      </Button>
    </div>
  )
})

export default OpenCart