import { FormEvent, useEffect, useRef } from 'react'
import IMask from 'imask'

import { Img } from 'src/components'
import Button from 'src/components/Button'
import Form from 'src/components/Form'
import Layout, { Container } from 'src/components/layout'
import useActions from 'src/hooks/useActions'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { PaymentTypes } from 'src/store/reducers/user'
import { currencyFormatter } from 'src/utils'

import styles from 'styles/CheckoutPage.module.css'

export default function Checkout() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Layout title='Оформление заказа'>
      <Container>
        <Form className={ styles.form } onSubmit={ handleSubmit }>
          <ContactInfo />
          <OrderDetails />
        </Form>
      </Container>
    </Layout>
  )
}

function ContactInfo() {
  const {
    firstName,
    lastName,
    phone,
    email,
    address,
    paymentType,
  } = useTypedSelector(state => state.userReducer)

  const {
    setFirstName,
    setLastName,
    setPhoneNumber,
    setEmail,
    setAddress,
    setPaymentType,
  } = useActions()

  const PhoneNumberRef = useRef<HTMLInputElement>(null)

  const isSelected = (value: PaymentTypes): boolean => value === paymentType
  const handleRadioClick = (paymentType: PaymentTypes) => setPaymentType(paymentType)

  useEffect(() =>  {
    const firstNameEl = PhoneNumberRef.current!
    const maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    const mask = IMask(firstNameEl, maskOptions)

    setPhoneNumber(mask.value)    
  }, [phone])

  return (
    <div>
      <h2 className='heading-3'>Контактная информация</h2>
      <div className={ styles.formInputs }>
        <Form.Input
          id='firstNameInput'
          type='text'
          name='firstname'
          placeholder='Никита'
          label='Имя*'
          value={ firstName }
          onChange={ (e) => setFirstName(e.target.value) }
          required
        />
        <Form.Input
          type='text'
          name='lastname'
          placeholder='Милиньков'
          label='Фамилия'
          value={ lastName }
          onChange={ (e) => setLastName(e.target.value) }
        />
        <Form.Input
          className='col-span-2'
          type='text'
          name='address'
          placeholder='ул. 1 Мая, 28 п.6 кв. 74'        
          label='Адрес*'
          value={ address }
          onChange={ (e) => setAddress(e.target.value) }
          required
        />
        <Form.Input
          className='col-span-2'
          type='email'
          name='email'
          placeholder='example@gmail.com'
          label='Эл. почта'
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <Form.Input
          ref={ PhoneNumberRef }
          className='col-span-2'
          type='tеl'
          name='phone'
          placeholder='8 (982) 992-39-59'
          label='Телефон*'
          value={ `${ phone || '' }` }
          onChange={ (e) => setPhoneNumber(e.target.value) }
          required
        />
      </div>
      <h2 className='heading-3'>Оплата</h2>
      <div className={ styles.paymentTypes }>
        <Form.Input
          className={ styles.paymentType }
          name='payment_type'
          id='online'
          type='radio'
          label='Оплата на сайте (временно недоступно)'
          value='online'
          checked={ isSelected('online') }
          onChange={ () => handleRadioClick('online') }
          disabled
          required
        />
        <Form.Input
          className={ styles.paymentType }
          name='payment_type'
          id='on-delivery'
          type='radio'
          label='Оплата при получении'
          value='on-delivery'
          checked={ isSelected('on-delivery') }
          onChange={ () => handleRadioClick('on-delivery') }
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
          onChange={ () => handleRadioClick('pickup') }
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