import { HiOutlineX } from 'react-icons/hi'

import useActions from 'src/hooks/useActions'
import useTypedSelector from 'src/hooks/useTypedSelector'
import Button from '../Button'
import Modal from '../Modal'
import AddToOrder from './AddToOrder'
import CartList from './CartList'
import OrderSummary from './OrderSummary'
import Img from '../Img'
import EmptyCartSVG from 'public/undraw_taken.svg'

import styles from './Cart.module.css'

export default function CartModal() {
  const { items } = useTypedSelector(state => state.cartReducer)
  const { cartIsOpened } = useTypedSelector(state => state.appReducer)
  const { setCartOpened } = useActions()

  const closeCartModal = () => setCartOpened(false)  

  return (
    <Modal
      show={ cartIsOpened }
      onClose={ closeCartModal }
      initial={{ x: '100%' }}
      exit={{ x: '100%' }}
    >
      <div className={ styles.cartModal }>
        <Button
          className={ styles.closeCartModal }
          variant='icon'
          onClick={ closeCartModal }
        >
          <HiOutlineX />
        </Button>
        {
          items.length === 0
            ? (
              <div className={ styles.emptyCart }>
                <Img
                  className={ styles.emptyCartImg }
                  src={ EmptyCartSVG }
                  size={ '70%' }
                />
                <h2 className={ styles.emptyCartTitle }>Упс...</h2>
                <p className={ styles.emptyCartDesc }>Кажется, ваша корзина пуста</p>
                <Button
                  href='/'
                  label='Перейти  в меню'
                  size='large'
                  glowing
                  onClick={ closeCartModal }
                />
              </div>
            )
            : (
              <div className={ styles.grid }>
                <div className={ styles.scroll }>
                  <CartList />
                  <AddToOrder />
                </div>
                <OrderSummary handle={ closeCartModal } />
              </div>
            )
        }
      </div>
    </Modal>
  )
}