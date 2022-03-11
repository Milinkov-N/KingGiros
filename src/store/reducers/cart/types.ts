export interface CartState {
  cartIsOpened: boolean
}

export enum CartActionEnum {
  SET_CART = 'SET_CART'
}

export interface setCartAction {
  type: CartActionEnum
  payload: boolean
}

export type CartAction = setCartAction