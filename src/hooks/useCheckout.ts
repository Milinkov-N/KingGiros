import { FormEvent } from 'react'
import useTypedSelector from './useTypedSelector'

import { CartState } from 'src/store/reducers/cart'
import { UserState } from 'src/store/reducers/user'
import { getCartItemsStr, newOrderMessage, sendBotMessage } from 'src/utils'

export interface handleSubmitState {
  userState: UserState
  cartState: CartState
}

export type ErrType = 'req' | 'input'

export interface handleSubmitProps {
  onSuccess: () => void
  onError: (errType: ErrType) => void
}

export default function useCheckout() {
  const userState = useTypedSelector(state => state.userReducer)
  const cartState = useTypedSelector(state => state.cartReducer)

  function handleSubmit({ onSuccess, onError }: handleSubmitProps) {
    return (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const orderDetails = getCartItemsStr(cartState.items)
      const text = newOrderMessage({ userState, cartState, orderDetails })
      const chat_id =
        process.env.NODE_ENV !== 'development'
          ? `${process.env.NEXT_PUBLIC_TELEGRAM_KG_CHAT_ID}`
          : `${process.env.NEXT_PUBLIC_TELEGRAM_KG_DEV_CHAT_ID}`

      async function fetchData() {
        try {
          const tgRes = await sendBotMessage(chat_id, text)

          tgRes ? onSuccess() : onError('req')
        } catch (e) {
          console.error(e)
          onError('req')
        }
      }

      userState.phone.length < 18 ? onError('input') : fetchData()
    }
  }

  return handleSubmit
}
