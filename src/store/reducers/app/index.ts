import { AppAction, AppActionEnum, AppState, setAppAction } from './types'
import AppActionCreators from './action-creators'

const initialState: AppState = {
  cartIsOpened: false,
  navIsOpened: false
}

export default function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionEnum.SET_CART:
      return { ...state, cartIsOpened: action.payload }
  
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