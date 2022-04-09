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
  const { orderSubmitted } = useTypedSelector(state => state.appReducer)
  const userInfo = useTypedSelector(state => state.userReducer)
  const { items, total } = useTypedSelector(state => state.cartReducer)
  const { resetCart, resetState, setOrderSubmitted } = useActions()
  const [showError, setShowError] = useState(false)

  const onSuccess = () => {
    setOrderSubmitted(true)
    router.push('/checkout/completed')
    resetCart()
    resetState()
  }

  const onError = () => setShowError(true)

  useEffect(() =>{
    if (items.length <= 0 && !orderSubmitted) {
      router.back()
    }
  }, [items])

  return (
    <Layout title='Оформление заказа'>
      <Container>
        <Error
          show={ showError }
          onClose={ () => setShowError(false) }
        />
        { items.length > 0 && (
          <Form
            className={ styles.form }
            onSubmit={ handleSubmit(onSuccess, onError, {items, userInfo, total}) }
          >
            <ContactInfo />
            <OrderDetails />
          </Form>
        )}
      </Container>
    </Layout>
  )
}