import { setAppAction, AppActionEnum } from './types'

const {
  SET_CART,
  SET_NAV
} = AppActionEnum

const AppActionCreators = {
  setOpenCart: ():setAppAction => ({ type: SET_CART, payload: true }),
  setCloseCart: ():setAppAction => ({ type: SET_CART, payload: false }),
  setOpenNav: ():setAppAction => ({ type: SET_NAV, payload: true }),
  setCloseNav: ():setAppAction => ({ type: SET_NAV, payload: false }),
}

export default AppActionCreators