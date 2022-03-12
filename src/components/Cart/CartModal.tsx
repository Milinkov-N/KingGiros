import { HiOutlineX } from 'react-icons/hi'

import useActions from 'src/hooks/useActions'
import useTypedSelector from 'src/hooks/useTypedSelector'
import Button from '../Button'
import Modal from '../Modal'
import AddToOrder from './AddToOrder'
import CartList from './CartList'

import styles from './Cart.module.css'

export default function CartModal() {
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
        <div className={ styles.grid }>
          <CartList />
          <AddToOrder />
        </div>
      </div>
    </Modal>
  )
}