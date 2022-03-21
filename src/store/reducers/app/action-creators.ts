import { setAppAction, AppActionEnum } from './types'

const {
  SET_CART_OPENED,
  SET_NAV_OPENED,
  SET_NAV_RESPONSIVE,
  SET_ORDER_SUBMITTED
} = AppActionEnum

const AppActionCreators = {
  setCartOpened: (payload: boolean):setAppAction => ({ type: SET_CART_OPENED, payload }),
  setNavOpened: (payload: boolean):setAppAction => ({ type: SET_NAV_OPENED, payload }),
  setNavResp: (payload: boolean):setAppAction => ({ type: SET_NAV_RESPONSIVE, payload }),
  setOrderSubmitted: (payload: boolean):setAppAction => ({ type: SET_ORDER_SUBMITTED, payload })
}

export default AppActionCreators