
import { Img } from 'src/components'
import Button from 'src/components/Button'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { currencyFormatter } from 'src/utils'

import styles from 'styles/CheckoutPage.module.css'

export default function OrderDetails() {
  const {
    items,
    subtotal,
    shipping,
    total
  } = useTypedSelector(state => state.cartReducer)
  
  return (
    <div className={ styles.orderDetails }>
      <h2 className='heading-3'>Детали заказа</h2>
      <div className={ styles.orderItems }>
        {
          items.map(item => (
            <div className={ styles.orderItem } key={ item.id }>
                <Img
                  className={ styles.image }
                  priority
                  src={ item.image }
                  size={ 90 }
                  alt={ item.title }
                />
              <div className={ styles.itemInfo }>
                <h3 className={ styles.itemName }>
                  { `${ item.title } x${ item.amount }` }
                </h3>
                <span className={ styles.itemPrice }>
                  { currencyFormatter(item.price) }
                </span>             
              </div>
            </div>
          ))
        }
      </div>
      <div className={ styles.orderSummary }>
        <table className={ styles.summaryTable }>
          <tbody>
            <tr className={ styles.tableRow }>
              <td>Подытог</td>
              <td>{ currencyFormatter(subtotal) }</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Доставка</td>
              <td>{ currencyFormatter(shipping) }</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Итого</td>
              <td>{ currencyFormatter(total) }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        className={ styles.btn }
        // href={ '/checkout/fondy' }
        type='submit'
        variant='secondary'
        label='Подтвердить заказ'
      />
    </div>
  )
}