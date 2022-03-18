import Form from 'src/components/Form'
import Layout, { Container } from 'src/components/layout'
import { ContactInfo, OrderDetails } from 'src/components/checkout'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { handleSubmit } from 'src/hooks/useCheckout'

import styles from 'styles/CheckoutPage.module.css'

export default function Checkout() {
  const userInfo = useTypedSelector(state => state.userReducer)
  const { items, total } = useTypedSelector(state => state.cartReducer)

  return (
    <Layout title='Оформление заказа'>
      <Container>
        <Form
          className={ styles.form }
          onSubmit={ handleSubmit( items, userInfo, total) }
        >
          <ContactInfo />
          <OrderDetails />
        </Form>
      </Container>
    </Layout>
  )
}