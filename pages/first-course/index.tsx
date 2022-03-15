import Layout from 'src/components/layout'
import { CollectionList } from 'src/components'
import storefront from 'src/utils/shopify'
import { COLLECTIONS } from 'src/consts'
import { GetStaticProps } from 'next'
import { IShopifyAllProducts } from 'src/models/shopify'
import { HomePageProps } from 'pages'

export default function FirstCoursePage({ products }: HomePageProps) {
  const { handle, name, tag } = COLLECTIONS.find(collection => collection.tag === 'first_course')!
  
  return (
    <Layout title='King Giros | Горячее'>
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
    products(first: 250, query: "first_course") {
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