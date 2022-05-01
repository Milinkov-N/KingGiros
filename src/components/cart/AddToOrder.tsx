import { useEffect, useState } from 'react'

import { IShopifyCollection, IShopifyProductEdges } from 'src/models/shopify'
import storefront from 'src/utils/shopify'
import { Img } from 'src/components'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'

import styles from './Cart.module.css'
import { currencyFormatter } from 'src/utils'
import useActions from 'src/hooks/useActions'
import { ICartItem } from 'src/models/cart'

export default function AddToOrder() {
  const { addToCart } = useActions()
  const [products, setProducts] = useState<IShopifyProductEdges[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await storefront<IShopifyCollection>(query)

      setProducts(data.collection.products.edges)
    }

    fetchProducts()
  }, [])

  return (
    <div className='add-to-order'>
      <h3 className='heading-4' style={{ marginBottom: '.75em' }}>
        Добавить к заказу?
      </h3>
      <Swiper
        className={styles.swiper}
        slidesPerView={'auto'}
        spaceBetween={20}
        freeMode={false}
        modules={[FreeMode]}
      >
        {products.map(product => {
          const price = Math.floor(
            parseInt(product.node.priceRange.minVariantPrice.amount)
          )
          const image = product.node.images.edges[0].node.transformedSrc

          const cartItem: ICartItem = {
            id: product.node.id,
            title: product.node.title,
            handle: product.node.handle,
            image,
            price,
            amount: 1,
          }

          return (
            <SwiperSlide key={product.node.id} className={styles.swiperSlide}>
              <div className={styles.addToOrderItem}>
                <Img
                  priority
                  src={image || '/'}
                  alt={product.node.images.edges[0].node.altText}
                  size={72}
                  onClick={() => addToCart(cartItem)}
                  style={{
                    height: '75px',
                    width: 'auto',
                    borderRadius: '6px',
                    overflow: 'hidden',
                  }}
                />
                <div>
                  <h4
                    className={styles.orderOfferItemTitle}
                    onClick={() => addToCart(cartItem)}
                  >
                    {product.node.title}
                  </h4>
                  <span>{currencyFormatter(price)}</span>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
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
