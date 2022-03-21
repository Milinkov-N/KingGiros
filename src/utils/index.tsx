import { FaPepperHot, FaLeaf } from 'react-icons/fa'
import { ICartItem } from 'src/models/cart'
import { UserState } from 'src/store/reducers/user'

export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: 'rub',
  style: 'currency',
  currencyDisplay: 'code',
  minimumFractionDigits: 0,
}).format

export function setTags(tags: string[]) {
  const output: JSX.Element[] = []

    for (const tag of tags) {
      switch (tag) {
        case 'spicy': {
          output.push(<FaPepperHot
            key={ tag }
            className='spicy'
          />)
          break
        }
        case 'vegetarian': {
          output.push(<FaLeaf
            key={ tag }
            className='vegetarian'
          />)
          break
        }
      }
    }

  return output
}

export async function sendBotMessage(chat_id: string, text: string): Promise<boolean> {
  try {
    const res = await fetch(`https://api.telegram.org/bot${ process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN }/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id,
        text
      })
    })

    const data = await res.json()

    return data.ok
  } catch (e) {
    console.log(e)
    return false
  }
}

export function newOrderMessage({
  firstName,
  lastName,
  phone,
  address,
  email,
  paymentType
}: UserState, orderDetails: string, total: number): string {
  const currentDate = new Date()
  const dateStr = currentDate.toLocaleDateString()
  const timeStr = currentDate.toLocaleTimeString()

  return `
Новый заказ на сайте KingGiros!
${ dateStr } / ${ timeStr }

ИНФОРМАЦИЯ О КЛИЕНТЕ:
Имя - ${ firstName } ${ lastName }
Телефон - ${ phone }
Email - ${ email || 'не указан' }
Адрес доставки - ${ address } 
Метод оплаты - ${ paymentType }

ДЕТАЛИ ЗАКАЗА:
${ orderDetails }
ИТОГО: ${ currencyFormatter(total) }
  `
}

export const getCartItemsStr = (items: ICartItem[]):string => items.reduce((prevStr, item) => `${ prevStr }${ item.title } x${ item.amount } - ${ currencyFormatter(item.price) }\n`, '')