import { useEffect, useState } from 'react'

import { IShopifyCollection, IShopifyProductEdges } from 'src/models/shopify'
import storefront from 'src/utils/shopify'
import Img from '../Img'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, } from 'swiper'
import 'swiper/css'

import styles from './Cart.module.css'
import { currencyFormatter } from 'src/utils'

export default function AddToOrder() {
  const [products, setProducts] = useState<IShopifyProductEdges[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await storefront<IShopifyCollection>(query)

      setProducts(data.collection.products.edges)
    }

    fetchProducts()
  }, [])

  return (
    <div className="add-to-order">
      <h3
        className='heading-4'
        style={{ marginBottom: '.75em' }}
      >
        Добавить к заказу?
      </h3>
      <Swiper
        className={ styles.swiper }
        slidesPerView={ 'auto' }
        spaceBetween={ 20 }
        freeMode={ false }
        modules={[FreeMode]}
      >
        {
          products.map(product => {
            const price = Math.floor(parseInt(product.node.priceRange.minVariantPrice.amount))
            return (
              <SwiperSlide
                key={ product.node.id }
                className={ styles.swiperSlide }
              >
                <div className={ styles.addToOrderItem }>
                  <Img
                    priority
                    src={ product.node.images.edges[0].node.transformedSrc || '/' }
                    alt={ product.node.images.edges[0].node.altText }
                    size={ 64 }
                    layout='fill'
                    objectFit='contain'
                    onClick={ () => console.log('TODO: handleAddToCart') }
                  />
                  <div>
                    <h4
                      className={ styles.orderOfferItemTitle }
                      onClick={ () => console.log('TODO: handleAddToCart') }
                    >
                      { product.node.title }
                    </h4>
                    <span>{ currencyFormatter(price) }</span>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

const query = `
  query relatedProducts {
    collection(handle: "cart-offer") {
      handle
      id
      descriptionHtml
      products(first: 250) {
        edges {
          node {
            id
            handle
            title
            description
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
            tags
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  }
`