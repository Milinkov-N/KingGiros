import {
  UserActionEnum,
  setFirstNameAction,
  setLastNameAction,
  setPhoneNumberAction,
  setEmailAction,
  setAddressAction,
  setPaymentAction,
  PaymentTypes
} from './types'

const {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PHONE_NUMBER,
  SET_EMAIL,
  SET_ADDRESS,
  SET_PAYMENT_TYPE
} = UserActionEnum

const UserActionCreators = {
  setFirstName: (payload: string): setFirstNameAction => ({ type: SET_FIRST_NAME, payload }),
  setLastName: (payload: string): setLastNameAction => ({ type: SET_LAST_NAME, payload }),
  setPhoneNumber: (payload: string): setPhoneNumberAction => ({ type: SET_PHONE_NUMBER, payload }),
  setEmail: (payload: string): setEmailAction => ({ type: SET_EMAIL, payload }),
  setAddress: (payload: string): setAddressAction => ({ type: SET_ADDRESS, payload }),
  setPaymentType: (payload: PaymentTypes): setPaymentAction => ({ type: SET_PAYMENT_TYPE, payload }),
}

export default UserActionCreators