import { ICartItem } from 'src/models/cart'

export interface CartState {
  items: ICartItem[]
  subtotal: number
  shipping: number
  total: number
}

export enum CartActionEnum {
  ADD_TO_SUBTOTAL = 'ADD_TO_SUBTOTAL',
  REMOVE_FROM_SUBTOTAL = 'REMOVE_FROM_SUBTOTAL',
  SET_CART_ITEM = 'SET_CART_ITEM'
}

export interface cartSubtotalAction {
  type: CartActionEnum.ADD_TO_SUBTOTAL | CartActionEnum.REMOVE_FROM_SUBTOTAL
  payload: number
}
export interface cartItemAction {
  type: CartActionEnum.SET_CART_ITEM
  payload: ICartItem
}

export type CartAction = cartSubtotalAction 
  | cartItemAction