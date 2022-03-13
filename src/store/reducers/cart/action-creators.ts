import { ICartItem } from 'src/models/cart'
import { cartItemAction, cartSubtotalAction, CartActionEnum } from './types'

const {
  ADD_TO_SUBTOTAL,
  REMOVE_FROM_SUBTOTAL,
  SET_CART_ITEM
} = CartActionEnum

const CartActionCreators = {
  addToSubtotal: (payload: number):cartSubtotalAction => ({ type: ADD_TO_SUBTOTAL, payload }),
  removeFromSubtotal: (payload: number):cartSubtotalAction => ({ type: REMOVE_FROM_SUBTOTAL, payload }),
  addToCart: (payload: ICartItem):cartItemAction => ({ type: SET_CART_ITEM, payload })
}

export default CartActionCreators