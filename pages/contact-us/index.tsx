import Layout, { Container, Stack } from 'src/components/layout'
import { Button, Img } from 'src/components'
import illustration from 'public/about-us.svg'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import Form from 'src/components/Form'

import styles from 'styles/ContactUsPage.module.css'

export default function ContactUsPage() {
  return (
    <Layout title='King Giros | Связаться с нами'>
      <Container>
        <h2 className='heading-2'>Остались вопросы или нашли проблему на сайте?</h2>
        <div className={`${ styles.content } grid-col-2 gap-xl`}>
          <div className='flex flex-col'>
            <div className={ styles.info }>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis tempora sapiente corrupti distinctio inventore suscipit esse voluptatum maxime perspiciatis, officia iure facilis ut impedit,</p>
              <ul className='flex flex-col gap-sm'>
                <li>
                  <Stack align='center' gap='md'>
                    <FaLocationArrow style={{ fontSize: '1rem' }} />
                    г. Воткинск, улица 1 Мая, 102
                  </Stack>
                </li>
                <li>
                  <Stack align='center' gap='md'>
                    <FaPhoneAlt style={{ fontSize: '1rem' }} />
                    8 (950) 838 99 99
                  </Stack>  
                </li>
                <li>
                  <Stack align='center' gap='md'>
                    <FaEnvelope style={{ fontSize: '1rem' }} />
                    spik@mail.ru
                  </Stack>
                </li>
              </ul>
            </div>
            
            <Form className={ `${ styles.form } grid-col-4  gap-md` }>
              <Form.Input
                className='col-span-2'
                name='firstname'
                placeholder='Никита'
                type='text'
                label='Имя'
                required
              />
              <Form.Input
                className='col-span-2'
                name='lastname'
                placeholder='Милиньков'
                type='text'
                label='Фамилия'
              />
              <Form.Input
                className='col-span-4'
                name='email'
                placeholder='example@gmail.com'
                type='email'
                label='Эл. почта'
              />
              <Form.Textarea
                className='col-span-4'
                name='message'
                placeholder='Ваше сообщение'
                label='Сообщение'
              />
              <Button
                className='col-span-4'
                variant='secondary'
                label='Отправить'
              />
            </Form>
          </div>
          <div className='flex jc-center ai-center'>
              <Img
                src={ illustration.src }
                size={ '90%' }
                alt='illustration'
              />
          </div>
        </div>
      </Container>
    </Layout>
  )
}