import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'

import Layout from 'src/components/layout'
import { Container, Img } from 'src/components'
import Button from 'src/components/Button'
import QuantitySelector from 'src/components/QuantitySelector'
import { IShopifyProduct } from 'src/models/shopify'
import { currencyFormatter } from 'src/utils'
import { getSingleProduct, recursiveCatalog } from 'src/utils/shopify'
import defaultImg from 'public/logo_2022.png'

import styles from 'styles/ProductPage.module.css'
import useActions from 'src/hooks/useActions'
import { ICartItem } from 'src/models/cart'

export interface ProductPageProps {
  product: IShopifyProduct
}

export default function ProductPage({ product }: ProductPageProps) {
  const { addToCart } = useActions()
  const [quantity, setQuantity] = useState(1)

  const price = Math.floor(+product.priceRange.minVariantPrice.amount)
  const image = product.images.edges[0].node.transformedSrc

  const cartItem: ICartItem = {
    id: product.id,
    handle: product.handle,
    title: product.title,
    image,
    price,
    amount: quantity
  }

  const handleClick = () => {
    addToCart(cartItem)
    setQuantity(1)
  }
  
  return (
    <Layout>
      <Container>
        <div className={ styles.grid }>
          <div className={ styles.productImage }>
            <Img
              src={ image || defaultImg.src }
              size={ '100%' }
              alt='product image'
              />
          </div>
          <div className={ styles.info }>
            <h2 className={ `${styles.title} heading-2` }>
              <span>{ product?.title }</span>
              {/* { setTags(product.tags).map( item => {
                  return item
                })
              } */}
            </h2>
            <h3 className={ styles.price }>{ currencyFormatter(price) }</h3>
            <div className={ styles.description } dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
            <div className={ styles.action }>
              <QuantitySelector
                initialQuantity={ quantity }
                onChange={ (qty) => setQuantity(qty === 0 ? 1 : qty) }
              />
              <Button
                variant='primary'
                size='medium'
                label='В корзину'
                onClick={ handleClick }
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await recursiveCatalog()
  const paths = products.map(product => {
    const product_id = product.node.handle

    return {
      params: { product_id }
    }
  })

  return {
    paths,
    fallback: false
  }
} 

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await getSingleProduct(String(params!.product_id))

  return {
    props: {
      product
    }
  }
}