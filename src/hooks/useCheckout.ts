import { FormEvent } from 'react'
import { ICartItem } from 'src/models/cart'
import { UserState } from 'src/store/reducers/user'
import { getCartItemsStr, newOrderMessage, sendBotMessage } from 'src/utils'

export interface handleSubmitOptions {
  items: ICartItem[]
  userInfo: UserState
  total: number
}

export function handleSubmit(
  onSuccess: () => void,
  onError: () => void,
  { items, userInfo, total }: handleSubmitOptions) {
  return (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const orderDetails = getCartItemsStr(items)
    const text = newOrderMessage(userInfo, orderDetails, total)
    const chat_id = `${ process.env.NEXT_PUBLIC_TELEGRAM_KG_CHAT_ID }`

    async function fetchDataToTelegram() {
      const res = await sendBotMessage(chat_id, text)

      res ? onSuccess() : onError()
    }

    fetchDataToTelegram()
  }
}