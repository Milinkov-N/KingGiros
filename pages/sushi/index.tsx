import { GetStaticProps } from 'next'

import Layout from 'src/components/layout'
import { CollectionList } from 'src/components'
import storefront from 'src/utils/shopify'
import { IShopifyAllProducts } from 'src/models/shopify'
import { HomePageProps } from 'pages'

export default function SushiPage({ products }: HomePageProps) {
  const sushiRollsTag = 'sushi_and_rolls'
  const sushiSetsTag = 'sushi_set'

  return (
    <Layout title='Суши, маки, роллы'>
      <CollectionList
        key={ sushiRollsTag }
        products={ products }
        title='Суши, маки, роллы'
        sortBy={ sushiRollsTag }
        handle={ sushiRollsTag }
      />
      <CollectionList
        key={ sushiSetsTag }
        products={ products }
        title='Суши, маки, роллы'
        sortBy={ sushiSetsTag }
        handle='sushi_sets'
      />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await storefront<IShopifyAllProducts>(productsQuery)

  return {
    props: {
      products: data.products.edges,
    }
  }
}

const productsQuery = `
  query getFirstCourseProducts {
    products(first: 250, query: "sushi") {
      edges {
        node {
          handle
          id
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
          variants(first: 3) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`