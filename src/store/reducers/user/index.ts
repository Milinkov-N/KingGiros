import {
  UserAction,
  UserActionEnum,
  UserState,
  setFirstNameAction,
  setLastNameAction,
  setPhoneNumberAction,
  setEmailAction,
  setAddressAction,
  setPaymentAction,
  PaymentTypes
} from './types'

import UserActionCreators from './action-creators'

const initialState: UserState = {
  firstName: '',
  lastName: '',
  phone: null,
  email: '',
  address: '',
  paymentType: 'on-delivery',
}

export default function userReducer(state = initialState, action: UserAction): UserState {
  switch(action.type) {
    case UserActionEnum.SET_FIRST_NAME:
      return { ...state, firstName: action.payload }
    case UserActionEnum.SET_LAST_NAME:
      return { ...state, lastName: action.payload }
    case UserActionEnum.SET_PHONE_NUMBER:
      return { ...state, phone: action.payload }
    case UserActionEnum.SET_EMAIL:
      return { ...state, email: action.payload }
    case UserActionEnum.SET_ADDRESS:
      return { ...state, address: action.payload }
    case UserActionEnum.SET_PAYMENT_TYPE:
      return { ...state, paymentType: action.payload }
  
    default:
      return state
  }
}

export {
  type UserAction,
  type UserState,
  type setFirstNameAction,
  type setLastNameAction,
  type setPhoneNumberAction,
  type setEmailAction,
  type setAddressAction,
  type setPaymentAction,
  type PaymentTypes,
  UserActionEnum,
  UserActionCreators,
}