import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Form } from 'src/components'
import Layout, { Container } from 'src/components/layout'
import { ContactInfo, OrderDetails, Error } from 'src/components/checkout'
import { useTypedSelector, useCheckout, useActions } from 'src/hooks'

import styles from 'styles/CheckoutPage.module.css'

export default function Checkout() {
  const router = useRouter()
  const handleSubmit = useCheckout()
  const cartState = useTypedSelector(state => state.cartReducer)
  const { orderSubmitted } = useTypedSelector(state => state.appReducer)
  const { resetCart, resetState, setOrderSubmitted } = useActions()
  const [showError, setShowError] = useState(false)
  const [phoneIsIncorrect, setPhoneIsIncorrect] = useState(false)

  const onFormSubmit = () => {
    handleSubmit({
      onSuccess: () => {
        setOrderSubmitted(true)
        router.push('/checkout/completed')
        resetCart()
        resetState()
      },
      onError: (errType) => {
        if (errType === 'req') {
          setShowError(true)
        }
        
        if (errType === 'input') {
          setPhoneIsIncorrect(true)
        }
      }
    })
  }

  useEffect(() =>{
    if (cartState.items.length <= 0 && !orderSubmitted) {
      router.back()
    }
  }, [cartState.items])

  return (
    <Layout title='Оформление заказа'>
      <Container>
        <Error
          show={ showError }
          onClose={ () => setShowError(false) }
        />
        { cartState.items.length > 0 && (
          <Form
            className={ styles.form }
            onSubmit={ onFormSubmit }
          >
            <ContactInfo
              phoneIsCorrect={ phoneIsIncorrect }
            />
            <OrderDetails />
          </Form>
        )}
      </Container>
    </Layout>
  )
}