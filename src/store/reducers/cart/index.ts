import { CartAction, CartActionEnum, CartState, cartSubtotalAction, cartItemAction } from './types'
import CartActionCreators from './action-creators'

const initialState: CartState = {
  items: [],
  subtotal: 0,
  shipping: 350,
  total: 350
}

export default function cartReducer(state = initialState, action: CartAction): CartState {
  switch (action.type) {
    case CartActionEnum.ADD_TO_SUBTOTAL: {
      const newSubtotal = state.subtotal + action.payload

      isFreeShipping(newSubtotal, state)

      return {
        ...state,
        subtotal: newSubtotal,
        total: newSubtotal + state.shipping
      }
    }

    case CartActionEnum.REMOVE_FROM_SUBTOTAL: {
      const newSubtotal = state.subtotal - action.payload

      isFreeShipping(newSubtotal, state)

      return {
        ...state,
        subtotal: newSubtotal,
        total: newSubtotal + state.shipping
      }
    }

    case CartActionEnum.SET_CART_ITEM: {
      const newCartItem = action.payload
      let sameItemIndex: number | undefined

      const sameItem = state.items.find((item, index) => {
        const isSameItem = item.id === newCartItem.id
        if (isSameItem) sameItemIndex = index

        return isSameItem
      })

      if (!sameItem) return {
        ...state,
        items: [
          ...state.items,
          newCartItem
        ]
      }

      const newSubtotal = state.subtotal + newCartItem.price * newCartItem.amount

      return {
        ...state,
        subtotal: newSubtotal + state.shipping,
        total: newSubtotal + state.shipping,
        items: [
          ...state.items.slice(0, sameItemIndex),
          {
            ...newCartItem,
            amount: sameItem.amount + newCartItem.amount
          },
          ...state.items.slice(sameItemIndex ? sameItemIndex + 1 : 2)
        ]
      }
    }
  
    default:
      return state
  }
}

function isFreeShipping(subtotal: number, state: CartState) {
  if (subtotal >= 500) {
    return {
      ...state,
      subtotal: subtotal,
      shipping: 0,
      total: subtotal - state.shipping
    }
  }

  return {
    ...state,
    subtotal: subtotal,
    shipping: 350,
    total: subtotal + state.shipping
  }
}

export {
  type CartAction,
  type CartState,
  type cartSubtotalAction,
  type cartItemAction,
  CartActionEnum,
  CartActionCreators
}