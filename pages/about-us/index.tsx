import Layout , { Container } from 'src/components/layout'
import shaurmaImage from 'public/shaurmaC.png'
import hotdogImage from 'public/hot-dogC.png'

import styles from 'styles/AboutUsPage.module.css'
import { Img, Logo } from 'src/components'

export default function AboutUsPage() {
  return (
    <Layout title='King Giros | О нас'>
      <Container>
        <h1 className='heading-2'>Мы <span>King Giros</span> и...</h1>
        <section className='flex flex-col gap-md margin-v-xl'>
          <div className={ styles.card }>
              <div className="image">
                  <Img
                    src={ shaurmaImage.src }
                    size={ 200 }
                    alt='shaurma'
                  />
              </div>
              <div>
                <p>...Мы первое кафе по приготовлению шаурмы, а также самая крупная доставка в г. Воткинске</p>
                <p>И скоро будет самой быстрой!</p>
              </div>
          </div>
          <div className={ `${styles.card} ${ styles.right }` }>
              <p>...Работаем для вас с 2014 года!</p>
              <div className="image">
                  <Img
                    src={ hotdogImage.src }
                    size={ 200 }
                    alt='hotdog'
                  />
              </div>
          </div>
          <div className={ `${styles.card} ${ styles.center }` }>
              <p>Получив многолетний опыт мы пришли к идеальному вкусу. Заказывая у нас, Вы получаете, вкусный продукт из лучших ингредиентов и качественный сервис</p>
              <div className="image">
                  <Logo size={ 200 } />
              </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}