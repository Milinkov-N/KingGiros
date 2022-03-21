import { ICartItem } from 'src/models/cart'
import { CartActionEnum, setCartItemAction, deleteCartItemAction, changeCartItemAction, changeCartItemPayload } from './types'

const {
  SET_CART_ITEM,
  DELETE_CART_ITEM,
  CHANGE_CART_ITEM_AMOUNT,
  RESET_CART,
} = CartActionEnum

const CartActionCreators = {
  addToCart: (payload: ICartItem):setCartItemAction => ({ type: SET_CART_ITEM, payload }),
  deleteCartItem: (id: string):deleteCartItemAction => ({ type: DELETE_CART_ITEM, payload: { id } }),
  changeCartItem: (payload: changeCartItemPayload):changeCartItemAction => ({ type: CHANGE_CART_ITEM_AMOUNT, payload }),
  resetCart: () => ({ type: RESET_CART })
}

export default CartActionCreators