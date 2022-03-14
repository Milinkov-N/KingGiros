import { HiOutlineX } from 'react-icons/hi'
import useActions from 'src/hooks/useActions'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { ICartItem } from 'src/models/cart'
import { currencyFormatter } from 'src/utils'
import Img from '../Img'
import QuantitySelector from '../QuantitySelector'

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
  const { deleteCartItem, changeCartItem } = useActions()

  const handleOnChange = (qty: number) => {
    qty === 0
      ? deleteCartItem(item.id)
      : changeCartItem({ id: item.id, amount: qty })
  }

  return (
    <div className={ styles.cartItem }>
      <Img
        priority
        className={ styles.image }
        src={ item.image }
        alt={ item.handle }
        size={ 85 }
        layout='fill'
        objectFit='contain' 
      />
      <div className={ styles.itemInfo }>
        <h3 className={ styles.itemName }>{ item.title }</h3>
        <div className={ styles.itemFlex }>
          <QuantitySelector
            initialQuantity={ item.amount }
            onChange={ handleOnChange }
          />
          <span className={ styles.itemPrice }>
            { currencyFormatter(item.price * item.amount) }
          </span>
        </div>              
      </div>
      <button
        className={ styles.deleteItemBtn }
        onClick={ () => deleteCartItem(item.id) }
      >
        <HiOutlineX />
      </button>
    </div>
  )
}