import { ComponentPropsWithoutRef, useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import { Product } from 'src/components'
import storefront from 'src/utils/shopify'
import { IShopifyCollection, IShopifyProductEdges } from 'src/models/shopify'

import styles from './RelatedProducts.module.css'

export default function RelatedProducts({ className, ...rest }: ComponentPropsWithoutRef<'div'>) {
  const [products, setProducts] = useState<IShopifyProductEdges[]>([])

  useEffect(() => {
    async function getProducts() {
      const { data } = await storefront<IShopifyCollection>(query)

      setProducts(data.collection.products.edges)
    }

    getProducts()
  }, [setProducts])

  return (
    <div className={ `${ styles.wrapper } ${ className }` } { ...rest }>
      <h2 className='heading-2'>Рекомендуем</h2>
      <Swiper
        className={ styles.swiper }
        slidesPerView={ 2 }
        spaceBetween={ 10 }
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {
          products.map(product => {
            return (
              <SwiperSlide className={ styles.swiperSlide } key={ product.node.id }>
                <Product
                  product={ product.node }
                />
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
    collection(handle: "related-products") {
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
                  url(transform: {scale: 1})
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
