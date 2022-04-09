import { Container } from 'src/components/layout'
import { Button } from 'src/components'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={ styles.hero }>
      <Container className={ styles.container }>
        <h1 className={`heading-1 ${ styles.title }`}>
          Вкуснейшие еда и напитки в <span>King Giros</span>
        </h1>
        <p className={ styles.subtitle }>
          Мы первое кафе по приготовлению шаурмы, а также самая крупная доставка в г. Воткинске... И скоро будем самой быстрой!
        </p>
        <Button
          href='/#shaurma'
          label='Перейти к витрине'
          variant='primary'
          glowing
          size='large'
        />
      </Container>
    </div>
  )
}
