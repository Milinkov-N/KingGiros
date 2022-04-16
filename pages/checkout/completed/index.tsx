import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useActions, useTypedSelector } from 'src/hooks'
import Layout, { Container, Stack } from 'src/components/layout'
import { Button, Img } from 'src/components'
import Illustration from 'public/undraw_completing.svg'

export default function CheckoutCompletedPage() {
  const router = useRouter()
  const { setOrderSubmitted } = useActions()
  const { orderSubmitted } = useTypedSelector(state => state.appReducer)

  useEffect(() => {
    if (!orderSubmitted) {
      router.push('/')
    }

    () => setOrderSubmitted(false)
  }, [])

  return (
    <Layout title='Заказ оформлен'>
      <Container>
        { orderSubmitted && (
          <Stack direction='col' align='center' gap='lg'>
            <h2 className='heading-2'>Ваш заказ принят!</h2>
            <p>Скоро с вами свяжется оператор для подтверждения заказа</p>
            <Img
              src={ Illustration }
              size={ '30%' }
              style={{ maxWidth: '450px', minWidth: '280px' }}
              alt='Order completing illustration'
            />
            <Button
              label='Вернуться в меню'
              href='/'
              size='large'
              glowing
            />
          </Stack>
        )}
      </Container>
    </Layout>
  )
}
