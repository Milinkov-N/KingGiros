import { CartAction, CartActionEnum, CartState, setCartAction } from './types'
import CartActionCreators from './action-creators'

const initialState: CartState = {
  cartIsOpened: false
}

export default function cartReducer(state = initialState, action: CartAction): CartState {
  switch (action.type) {
    case CartActionEnum.SET_CART:
      return { ...state, cartIsOpened: action.payload }
  
    default:
      return state
  }
}

export {
  type CartAction,
  type CartState,
  type setCartAction,
  CartActionEnum,
  CartActionCreators
}