import { GetStaticProps } from 'next'

import Layout from 'src/components/layout'
import { CollectionList } from 'src/components'
import storefront from 'src/utils/shopify'
import { COLLECTIONS } from 'src/consts'
import { IShopifyAllProducts } from 'src/models/shopify'
import { HomePageProps } from 'pages'

export default function SoupsPage({ products }: HomePageProps) {
  const { handle, name, tag } = COLLECTIONS.find(collection => collection.tag === 'soup')!

  return (
    <Layout title='Супы'>
      <CollectionList
        key={ handle }
        products={ products }
        title={ name }
        sortBy={ tag }
        handle={ handle }
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
    products(first: 250, query: "soup") {
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