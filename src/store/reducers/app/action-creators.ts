import { setAppAction, AppActionEnum } from './types'

const {
  SET_CART_OPENED,
  SET_NAV_OPENED,
  SET_NAV_RESPONSIVE,
} = AppActionEnum

const AppActionCreators = {
  setCartOpened: (payload: boolean):setAppAction => ({ type: SET_CART_OPENED, payload }),
  setNavOpened: (payload: boolean):setAppAction => ({ type: SET_NAV_OPENED, payload }),
  setNavResp: (payload: boolean):setAppAction => ({ type: SET_NAV_RESPONSIVE, payload }),
}

export default AppActionCreators