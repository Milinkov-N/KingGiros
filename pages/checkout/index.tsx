import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Img } from 'src/components'
import Button from 'src/components/Button'
import Form from 'src/components/Form'
import Layout, { Container } from 'src/components/layout'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { currencyFormatter } from 'src/utils'

import styles from 'styles/CheckoutPage.module.css'

export default function Checkout() {
  const [paymentType, setPaymentType] = useState('on-delivery-payment')
  const isSelected = (value: string): boolean => value === paymentType
  const handleRadioClick = (e: ChangeEvent<HTMLInputElement>): void => setPaymentType(e.target.value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.target)
  }

  useEffect(() => console.log(paymentType), [paymentType])

  return (
    <Layout title='Оформление заказа'>
      <Container>
        <Form className={ styles.form } onSubmit={ handleSubmit }>
          <ContactInfo
            isSelected={ isSelected }
            handleRadioClick={ handleRadioClick }
          />
          <OrderDetails />
        </Form>
      </Container>
    </Layout>
  )
}

export interface ContactInfoProps {
  isSelected: (value: string) => boolean
  handleRadioClick: (e: ChangeEvent<HTMLInputElement>) => void
}

function ContactInfo({ isSelected, handleRadioClick }: ContactInfoProps) {
  return (
    <div>
      <h2 className='heading-3'>Контактная информация</h2>
      <div className={ styles.formInputs }>
        <Form.Input
          name='firstname'
          placeholder='Никита'
          type='text'
          label='Имя'
          required
        />
        <Form.Input
          name='lastname'
          placeholder='Милиньков'
          type='text'
          label='Фамилия'
        />
        <Form.Input
          className='col-span-2'
          name='address'
          placeholder='ул. 1 Мая, 28 п.6 кв. 74'
          type='text'
          label='Адрес'
          required
        />
        <Form.Input
          className='col-span-2'
          name='email'
          placeholder='example@gmail.com'
          type='email'
          label='Эл. почта'
        />
        <Form.Input
          className='col-span-2'
          name='phone'
          placeholder='8 (982) 992-39-59'
          type='tеl'
          label='Телефон'
          required
        />
      </div>
      <h2 className='heading-3'>Оплата</h2>
      <div className={ styles.paymentTypes }>
        <Form.Input
          className={ styles.paymentType }
          name='payment_type'
          id='online-payment'
          type='radio'
          label='Оплата на сайте (временно недоступно)'
          value='online-payment'
          checked={ isSelected('online-payment') }
          onChange={ handleRadioClick }
          disabled
          required
        />
        <Form.Input
          className={ styles.paymentType }
          name='payment_type'
          id='on-delivery-payment'
          type='radio'
          label='Оплата при получении'
          value='on-delivery-payment'
          checked={ isSelected('on-delivery-payment') }
          onChange={ handleRadioClick }
          required
        />
        <Form.Input
          className={ styles.paymentType }
          name='payment_type'
          id='pickup'
          type='radio'
          label='Самовывоз'
          value='pickup'
          checked={ isSelected('pickup') }
          onChange={ handleRadioClick }
          required
        />
      </div>
    </div>
   )
}


function OrderDetails() {
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