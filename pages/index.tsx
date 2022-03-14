import type { NextPage } from 'next'

import { IShopifyAllProducts, IShopifyProductEdges } from 'src/models/shopify'
import storefront from 'src/utils/shopify'

import Layout from 'src/components/layout'
import { CollectionList, Hero } from 'src/components'
export interface HomePageProps {
  products: IShopifyProductEdges[]
}

const Home: NextPage<HomePageProps> = ({ products }) => {
  return (
    <div>
      <Layout>
        <Hero />
        <div className='collections'>
          <CollectionList
            products={ products }
            title='Шаурма'
            sortBy={ 'shaurma' }
            handle={ products[0].node.handle } 
          />
        </div>
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