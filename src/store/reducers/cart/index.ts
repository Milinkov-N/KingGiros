import {
  CartAction,
  CartActionEnum,
  CartState,
  setCartItemAction,
  changeCartItemAction,
  deleteCartItemAction
} from './types'

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

      const cartDetails = handleCartDetails({ subtotal, shipping, total })

      if (!sameItem) return {
        ...state,
        ...cartDetails,
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
        ...cartDetails,
        items: [...state.items]
      }
    }

    case CartActionEnum.DELETE_CART_ITEM: {
      const filteredItems = state.items.filter(item => item.id !== action.payload.id)
      const deletingItem = state.items.find(item => item.id === action.payload.id)
      const subtract = deletingItem ? deletingItem.price * deletingItem.amount : 0
      let { subtotal, shipping, total } = state

      const cartDetails = handleCartDetails({ subtotal, shipping, total }, subtract)

      return {
        ...state,
        ...cartDetails,
        items: filteredItems
      }
    }

    case CartActionEnum.CHANGE_CART_ITEM_AMOUNT: {
      let { amount } = action.payload
      if(isNaN(amount)) amount = 1

      const item = state.items.find(item => item.id === action.payload.id)!
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
      const { subtotal, shipping, total } = state
      const updatedSubtotal = subtotal - (item.price * item.amount) + (item.price * amount)

      const cartDetails = handleCartDetails({
        subtotal: updatedSubtotal,
        shipping,
        total
      })

      state.items[itemIndex] = {
        ...item,
        amount: amount
      } 

      return {
        ...state,
        ...cartDetails,
        items: [...state.items]
      }
    }
  
    default:
      return state
  }
}

export interface HandleCartDetailsProps {
  subtotal: number
  shipping: number
  total: number
}

function handleCartDetails({
  subtotal,
  shipping,
  total
}: HandleCartDetailsProps, subtract = 0) {
  subtotal = subtotal - subtract

  if (subtotal >= 500) {
    shipping = 0
    total = subtotal - shipping
  } else {
    shipping = 350
    total = subtotal + shipping
  }

  return {
    subtotal,
    shipping,
    total
  }
}

export {
  type CartAction,
  type CartState,
  type setCartItemAction,
  type changeCartItemAction,
  type deleteCartItemAction,
  CartActionEnum,
  CartActionCreators
}