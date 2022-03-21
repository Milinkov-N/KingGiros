import { ICartItem } from 'src/models/cart'

export interface CartState {
  items: ICartItem[]
  subtotal: number
  shipping: number
  total: number
}

export enum CartActionEnum {
  SET_CART_ITEM           = 'SET_CART_ITEM',
  DELETE_CART_ITEM        = 'DELETE_CART_ITEM',
  CHANGE_CART_ITEM_AMOUNT = 'CHANGE_CART_ITEM_AMOUNT',
  RESET_CART              = 'RESET_CART',
}
export interface setCartItemAction {
  type: CartActionEnum.SET_CART_ITEM
  payload: ICartItem
}
export interface deleteCartItemAction {
  type: CartActionEnum.DELETE_CART_ITEM
  payload: {
    id: string
  }
}
export interface changeCartItemAction {
  type: CartActionEnum.CHANGE_CART_ITEM_AMOUNT
  payload: changeCartItemPayload
}

export interface changeCartItemPayload {
  id: string
  amount: number
}

export interface resetCart {
  type: CartActionEnum.RESET_CART
}

export type CartAction = setCartItemAction
  | deleteCartItemAction
  | changeCartItemAction
  | resetCart