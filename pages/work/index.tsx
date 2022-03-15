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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis tempora sapiente corrupti distinctio inventore suscipit esse voluptatum maxime perspiciatis, officia iure facilis ut impedit,</p>
            </div>
            <Form className={ `${ styles.form } grid-col-4 gap-md` }>
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
                name='phone'
                placeholder='8 (982) 992-39-59'
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