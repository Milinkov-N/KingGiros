import { ICartItem } from 'src/models/cart'
import { cartItemAction, CartActionEnum } from './types'

const {
  SET_CART_ITEM
} = CartActionEnum

const CartActionCreators = {
  addToCart: (payload: ICartItem):cartItemAction => ({ type: SET_CART_ITEM, payload })
}

export default CartActionCreators