import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Form from 'src/components/Form'
import Layout, { Container } from 'src/components/layout'
import { ContactInfo, OrderDetails } from 'src/components/checkout'
import { useTypedSelector, useCheckout } from 'src/hooks'

import styles from 'styles/CheckoutPage.module.css'

export default function Checkout() {
  const router = useRouter()
  const handleSubmit = useCheckout()
  const userInfo = useTypedSelector(state => state.userReducer)
  const { items, total } = useTypedSelector(state => state.cartReducer)

  const onSuccess = () => router.push('/checkout/completed')
  const onError = () => console.log('Something went wrong')

  useEffect(() =>{
    if (items.length <= 0) {
      router.back()
    }
  }, [items])

  return (
    <Layout title='Оформление заказа'>
      <Container>
        <Form
          className={ styles.form }
          onSubmit={ handleSubmit(onSuccess, onError, {items, userInfo, total}) }
        >
          <ContactInfo />
          <OrderDetails />
          {/* TODO: Popup Modal for order status completion */}
        </Form>
      </Container>
    </Layout>
  )
}