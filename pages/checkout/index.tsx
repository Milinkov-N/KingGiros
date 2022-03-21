import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Form from 'src/components/Form'
import Layout, { Container } from 'src/components/layout'
import { ContactInfo, OrderDetails } from 'src/components/checkout'
import { useTypedSelector, useCheckout, useActions } from 'src/hooks'

import styles from 'styles/CheckoutPage.module.css'

export default function Checkout() {
  const router = useRouter()
  const handleSubmit = useCheckout()
  const { orderSubmitted } = useTypedSelector(state => state.appReducer)
  const userInfo = useTypedSelector(state => state.userReducer)
  const { items, total } = useTypedSelector(state => state.cartReducer)
  const { resetCart, resetState, setOrderSubmitted } = useActions()

  const onSuccess = () => {
    setOrderSubmitted(true)
    router.push('/checkout/completed')
    resetCart()
    resetState()
  }

  const onError = () => console.log('Something went wrong')

  useEffect(() =>{
    if (items.length <= 0 && !orderSubmitted) {
      router.back()
    }
  }, [items])

  return (
    <Layout title='Оформление заказа'>
      <Container>
        { items.length > 0 && (
          <Form
            className={ styles.form }
            onSubmit={ handleSubmit(onSuccess, onError, {items, userInfo, total}) }
          >
            <ContactInfo />
            <OrderDetails />
            {/* TODO: Popup Modal for order status completion */}
          </Form>
        )}
      </Container>
    </Layout>
  )
}