import { IShopifyProductEdges } from 'src/models/shopify'
import { Container } from '../layout'
import { Product } from 'src/components'

import styles from './CollectionList.module.css'

export interface CollectionListProps {
  products: IShopifyProductEdges[]
  title: string
  sortBy: string
  handle: string
}

export default function CollectionList({
  products,
  title,
  sortBy,
  handle,
}: CollectionListProps) {
  const isEmptyCategory = title === 'Пицца' || title === 'Комбо'
  return (
    <section className={styles.section} id={handle}>
      <Container>
        <h2 className={`heading-2 ${styles.title}`}>
          {isEmptyCategory ? `${title} (скоро будет)` : title}
        </h2>
        <div className={styles.grid}>
          {products.map((product) => {
            let isSorted = false

            product.node.tags!.forEach((tag) => {
              if (tag === sortBy) {
                isSorted = true

                return
              }
            })

            return (
              isSorted && (
                <Product key={product.node.id} product={product.node} />
              )
            )
          })}
        </div>
      </Container>
    </section>
  )
}
