import Button from '../Button'

import styles from './Cart.module.css'

export default function OrderSummary() {
  return (
    <>
      <div className={ styles.orderSummary }>
        <h3 className={ styles.orderTitle }>Сумма заказа</h3>
        <table className={ styles.summaryTable }>
          <tbody>
            <tr className={ styles.tableRow }>
              <td>Подытог</td>
              <td>{ `0 RUB` }</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Доставка</td>
              <td>0 RUB</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Итого</td>
              <td>{ `0 RUB` }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        className={ styles.checkoutBtn }
        href={ '/checkout' }
        variant='primary'
        label='Оформить заказ'
      />
    </>   
  )
}