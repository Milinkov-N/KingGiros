import type { NextPage } from 'next'

import { IShopifyAllProducts, IShopifyProductEdges } from 'src/models/shopify'
import storefront from 'src/utils/shopify'

import { CollectionList, Hero, Layout } from 'src/components'
import useTypedSelector from 'src/hooks/useTypedSelector'
export interface HomePageProps {
  products: IShopifyProductEdges[]
}

const Home: NextPage<HomePageProps> = ({ products }) => {

  const { items } = useTypedSelector(state => state.cartReducer)

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