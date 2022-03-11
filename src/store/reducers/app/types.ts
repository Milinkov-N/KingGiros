export interface AppState {
  cartIsOpened: boolean
  navIsOpened: boolean
}

export enum AppActionEnum {
  SET_CART = 'SET_CART',
  SET_NAV  = 'SET_NAV'
}

export interface setAppAction {
  type: AppActionEnum
  payload: boolean
}

export type AppAction = setAppAction