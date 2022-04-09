import Layout, { Container, Stack } from 'src/components/layout'
import { Button, Img } from 'src/components'
import illustration from 'public/work.svg'
import Form from 'src/components/Form'

import styles from 'styles/ContactUsPage.module.css'

export default function WorkPage() {
  return (
    <Layout title='Связаться с нами'>
      <Container>
        <h2 className='heading-2'>Работа с нами</h2>
        <div className={`${ styles.content } grid-col-2 gap-xl`}>
          <div className='flex flex-col'>
            <div className={ styles.info }>
              <p>Приглашаем всех желающих на работу в King Giros! Мы обещаем:</p>
              <ul style={{ listStyle: 'inside', marginLeft: '1rem' }}>
                <li>Своевременную выплату заработной платы и премий</li>
                <li>Сменный график работы с возможностью подработок</li>
                <li>Униформу и бесплатное питание</li>
                <li>Доставку сотрудников до дома в позднее время</li>
                <li>Дружный коллектив</li>
              </ul>
            </div>
            <Form className={ `${ styles.form } grid-col-4 gap-md` }>
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
              <Form.MaskedTel
                className='col-span-4'
                name='phone'
                placeholder='8 (950) 950-50-50'
                type='tеl'
                label='Телефон'
                required
              />
              <Form.Input
                className='col-span-4'
                name='email'
                placeholder='example@gmail.com'
                type='email'
                label='Эл. почта'
              />
              <Form.Select
                className='col-span-4'
                name='vacancy'
                label='Должность'
              >
                <option value="kassir">Кассир</option>
                <option value="chief">Повар</option>
              </Form.Select>
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
                size={ '80%' }
                alt="illustration"
              />
          </div>
        </div>
      </Container>
    </Layout>
  )
}