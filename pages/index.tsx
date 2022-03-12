import type { NextPage } from 'next'

import { IShopifyAllProducts, IShopifyProduct } from 'src/models/shopify'
import storefront from 'src/utils/shopify'

import { Hero, Layout } from 'src/components'
export interface HomePageProps {
  products: IShopifyProduct[]
}

const Home: NextPage<HomePageProps> = ({ products }) => {
  // console.log(products)

  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const { data } = await storefront<IShopifyAllProducts>(query)

  return {
    props: {
      products: data.products.edges,
    }
  }
}

const query = `
  query Products {
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
`