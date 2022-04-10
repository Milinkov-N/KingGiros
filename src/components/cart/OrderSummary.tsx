import useTypedSelector from 'src/hooks/useTypedSelector'
import { currencyFormatter } from 'src/utils'
import { Button } from 'src/components'

import styles from './Cart.module.css'

export interface OrderSummaryProps {
  handle: () => void
}

export default function OrderSummary({ handle }: OrderSummaryProps) {
  const {
    subtotal,
    shipping,
    total
  } = useTypedSelector(state => state.cartReducer)
  return (
    <>
      <div className={ styles.orderSummary }>
        <h3 className={ styles.orderTitle }>Сумма заказа</h3>
        <table className={ styles.summaryTable }>
          <tbody>
            <tr className={ styles.tableRow }>
              <td>Подытог</td>
              <td>{ currencyFormatter(subtotal) }</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Доставка (в течение 40 минут)</td>
              <td>{ shipping === 0 ? 'бесплатно' : currencyFormatter(shipping) }</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Итого</td>
              <td>{ currencyFormatter(total) }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        className={ styles.checkoutBtn }
        href={ '/checkout' }
        variant='primary'
        label='Оформить заказ'
        onClick={ handle }
      />
    </>   
  )
}