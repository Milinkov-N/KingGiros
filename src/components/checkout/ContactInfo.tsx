import IMask from 'imask'
import { ChangeEvent } from 'react'

import { Form } from 'src/components'
import useActions from 'src/hooks/useActions'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { PaymentTypes } from 'src/store/reducers/user'

import styles from 'styles/CheckoutPage.module.css'

export interface ContactInfoProps {
  phoneIsCorrect: boolean
}

export default function ContactInfo({ phoneIsCorrect }: ContactInfoProps) {
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

  const isSelected = (value: PaymentTypes): boolean => value === paymentType
  const handleRadioClick = (paymentType: PaymentTypes) => setPaymentType(paymentType)
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const mask = IMask(e.target, {
      mask: '+{7} (000) 000-00-00'
    })

    setPhoneNumber(mask.value)
  }

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
          minLength={ 10 }
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
          className='col-span-2'
          type='tеl'
          name='phone'
          placeholder='+7 (982) 992-39-59'
          label='Телефон*'
          value={ `${ phone }` }
          onChange={ handlePhoneChange }
          minLength={ 18 }
          error={{
            status: phoneIsCorrect,
            message: 'Введите номер телефона полностью'
          }}
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