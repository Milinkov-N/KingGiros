import { AppAction, AppActionEnum, AppState, setAppAction } from './types'
import AppActionCreators from './action-creators'

const initialState: AppState = {
  cartIsOpened: false,
  navIsOpened: false,
  navResponsive: false,
  orderSubmitted: false,
}

export default function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionEnum.SET_CART_OPENED:
      return { ...state, cartIsOpened: action.payload }
    case AppActionEnum.SET_NAV_OPENED:
      return { ...state, navIsOpened: action.payload }
    case AppActionEnum.SET_NAV_RESPONSIVE:
      return { ...state, navResponsive: action.payload }
    case AppActionEnum.SET_ORDER_SUBMITTED:
      return { ...state, orderSubmitted: action.payload }
    default:
      return state
  }
}

export {
  type AppAction,
  type AppState,
  type setAppAction,
  AppActionEnum,
  AppActionCreators
}