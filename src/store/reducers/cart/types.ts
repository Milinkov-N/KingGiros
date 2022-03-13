import { ICartItem } from 'src/models/cart'

export interface CartState {
  items: ICartItem[]
  subtotal: number
  shipping: number
  total: number
}

export enum CartActionEnum {
  SET_CART_ITEM = 'SET_CART_ITEM'
}
export interface cartItemAction {
  type: CartActionEnum.SET_CART_ITEM
  payload: ICartItem
}

export type CartAction = cartItemAction