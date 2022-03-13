import { FaTimes } from 'react-icons/fa'
import { HiOutlineX } from 'react-icons/hi'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { ICartItem } from 'src/models/cart'
import { currencyFormatter } from 'src/utils'
import Img from '../Img'
import styles from './Cart.module.css'

export interface CartItemProps {
  item: ICartItem
}

export default function CartList() {
  const { items } = useTypedSelector(state => state.cartReducer)
  return (
    <div className={ styles.itemsList }>
      {
        items.map(item =><CartItem item={ item } key={ item.id } />)
      }
    </div>
  )
}

function CartItem({ item }: CartItemProps) {
  return (
    <div className={ styles.cartItem }>
      <Img
        priority
        src={ item.image }
        alt={ item.handle }
        size={ 85 }
        layout='fill'
        objectFit='contain' 
      />
      <div className={ styles.itemInfo }>
        <h3 className={ styles.itemName }>{ item.title }</h3>
        <div className={ styles.flex }>
          {/* <QuantitySelector
            quantity={ item.amount }
            increment={ incrementItemAmount }
            decrement={ decrementItemAmount }
            handleOnChange={ handleOnChange }
          /> */}
          <span className={ styles.itemPrice }>
            { currencyFormatter(item.price * item.amount) }
          </span>
        </div>              
      </div>
      <button
        className={ styles.deleteItemBtn }
        onClick={ () => console.log('TODO: handleDelete') }
      >
        <HiOutlineX />
      </button>
    </div>
  )
}