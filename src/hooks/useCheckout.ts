import { FormEvent } from 'react'
import { CartState } from 'src/store/reducers/cart'
import { UserState } from 'src/store/reducers/user'
import { getCartItemsStr, newOrderMessage, sendBotMessage } from 'src/utils'

export interface handleSubmitOptions {
  userState: UserState
  cartState: CartState
}

export default function useCheckout() {
  function handleSubmit(
    onSuccess: () => void,
    onError: () => void,
    { userState, cartState }: handleSubmitOptions) {
    return (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
      const orderDetails = getCartItemsStr(cartState.items)
      const text = newOrderMessage({ userState, cartState, orderDetails })
      const chat_id = `${ process.env.NEXT_PUBLIC_TELEGRAM_KG_CHAT_ID }`
  
      async function fetchDataToTelegram() {
        const res = await sendBotMessage(chat_id, text)
  
        res ? onSuccess() : onError()
      }
  
      fetchDataToTelegram()
    }
  }

  return handleSubmit
}