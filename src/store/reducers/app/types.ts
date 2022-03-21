export interface AppState {
  cartIsOpened: boolean
  navIsOpened: boolean
  navResponsive: boolean
  orderSubmitted: boolean
}

export enum AppActionEnum {
  SET_CART_OPENED     = 'SET_CART_OPENED',
  SET_NAV_OPENED      = 'SET_NAV_OPENED',
  SET_NAV_RESPONSIVE  = 'SET_NAV_RESPONSIVE',
  SET_ORDER_SUBMITTED = 'SET_ORDER_SUBMITTED'
}

export interface setAppAction {
  type: AppActionEnum
  payload: boolean
}

export type AppAction = setAppAction