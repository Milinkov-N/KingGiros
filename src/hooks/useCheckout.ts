import { FormEvent } from 'react'
import { ICartItem } from 'src/models/cart'
import { UserState } from 'src/store/reducers/user'
import { getCartItemsStr, newOrderMessage, sendBotMessage } from 'src/utils'

export function handleSubmit(items: ICartItem[], userInfo: UserState, total: number) {
  return (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const orderDetails = getCartItemsStr(items)
    const text = newOrderMessage(userInfo, orderDetails, total)
    const chat_id = `${ process.env.NEXT_PUBLIC_TELEGRAM_KG_CHAT_ID }`

    async function fetchDataToTelegram() {
      const res = await sendBotMessage(chat_id, text)

      res
        ? console.log('successfully send order to Telegram!')
        : console.log('Oops... something went wrong with sending order to Telegram') 
    }

    fetchDataToTelegram()
  }
}