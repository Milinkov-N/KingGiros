import Layout, { Container, Stack } from 'src/components/layout'
import { Button, Img, Form } from 'src/components'
import illustration from 'public/about-us.svg'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'

import styles from 'styles/ContactUsPage.module.css'

export default function ContactUsPage() {
  return (
    <Layout title='Связаться с нами'>
      <Container>
        <h2 className='heading-2'>
          По вопросам сотрудничества и обратная связь
        </h2>
        <div className={`${styles.content} grid-col-2 gap-xl`}>
          <div className='flex flex-col'>
            <div className={styles.info}>
              <p>Наша компания предлагает услуги в виде:</p>
              <ul className={styles.list}>
                <li>Обеспечения питанием ваших сотрудников;</li>
                <li>Обслуживание банкетов</li>
              </ul>
              <p>
                И все это по доступным ценам и с отличным сервисом. Оставьте
                ваши данные для связи в форме ниже и мы свяжемся с вами.
              </p>
              <p>
                Также, если вы заметили какие-то проблемы на сайте или у Вас
                возникли вопросы - сообщите нам!
              </p>
              <ul className='flex flex-col gap-sm'>
                <li>
                  <Stack align='center' gap='md'>
                    <FaLocationArrow style={{ fontSize: '1rem' }} />
                    г. Воткинск, улица 1 Мая, 102
                  </Stack>
                </li>
                <li>
                  <Stack align='center' gap='md'>
                    <FaPhoneAlt style={{ fontSize: '1rem' }} />8 (950) 838 99 99
                  </Stack>
                </li>
                <li>
                  <Stack align='center' gap='md'>
                    <FaEnvelope style={{ fontSize: '1rem' }} />
                    Spik555@mail.ru
                  </Stack>
                </li>
              </ul>
            </div>

            <Form
              className={`${styles.form} grid-col-4  gap-md`}
              action='https://formsubmit.co/spik555@mail.ru'
              method='POST'
            >
              <Form.Input
                className='col-span-2'
                type='hidden'
                name='_cc'
                value='milinkov.nik@gmail.com'
                label=''
              />
              <Form.Input
                className='col-span-2'
                type='hidden'
                name='_subject'
                value='Новое резюме на сайте kinggiros.ru'
                label=''
              />
              <Form.Input
                className='col-span-2'
                name='firstname'
                placeholder='Иван'
                type='text'
                label='Имя'
                required
              />
              <Form.Input
                className='col-span-2'
                name='lastname'
                placeholder='Иванов'
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
              <Form.MaskedTel
                className='col-span-4'
                name='phone'
                placeholder='8 (950) 500-50-50'
                type='tel'
                label='Телефон'
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
          <div className='flex jc-center ai-start'>
            <Img src={illustration.src} size={'90%'} alt='illustration' />
          </div>
        </div>
      </Container>
    </Layout>
  )
}
