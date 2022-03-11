import type { NextPage } from 'next'
import { IShopifyAllProducts, IShopifyProduct } from 'src/models/shopify'
import storefront from 'src/utils/shopify'

export interface HomePageProps {
  products: IShopifyProduct[]
}

const Home: NextPage<HomePageProps> = ({ products }) => {
  console.log(products);

  return (
    <div>a</div>
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
        cursor
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