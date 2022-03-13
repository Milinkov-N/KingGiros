import { CartAction, CartActionEnum, CartState, cartItemAction } from './types'
import CartActionCreators from './action-creators'

const initialState: CartState = {
  items: [],
  subtotal: 0,
  shipping: 350,
  total: 350
}

export default function cartReducer(state = initialState, action: CartAction): CartState {
  switch (action.type) {
    case CartActionEnum.SET_CART_ITEM: {
      const newCartItem = action.payload      
      const sameItem = state.items.find(item => item.id === newCartItem.id)
      const sameItemIndex = state.items.findIndex(item => item.id === newCartItem.id)
      const subtotal = state.subtotal + newCartItem.price * newCartItem.amount
      let { shipping, total } = state

      if (subtotal >= 500) {
        shipping = 0
        total = subtotal - shipping
      } else {
        shipping = 350
        total = subtotal + shipping
      }

      if (!sameItem) return {
        ...state,
        subtotal: subtotal,
        shipping,
        total,
        items: [
          ...state.items,
          newCartItem
        ]
      }

      state.items[sameItemIndex] = {
        ...newCartItem,
        amount: sameItem.amount + newCartItem.amount
      }   

      return {
        ...state,
        subtotal,
        shipping,
        total,
        items: [...state.items]
      }
    }
  
    default:
      return state
  }
}

export {
  type CartAction,
  type CartState,
  type cartItemAction,
  CartActionEnum,
  CartActionCreators
}