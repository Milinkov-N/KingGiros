import { setCartAction, CartActionEnum } from './types'

const { SET_CART } = CartActionEnum

const CartActionCreators = {
  setOpenCart: ():setCartAction => ({ type: SET_CART, payload: true }),
  setCloseCart: ():setCartAction => ({ type: SET_CART, payload: false }),
}

export default CartActionCreators