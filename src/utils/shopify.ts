import { IShopifyAllProducts, IShopifyProduct, IShopifyProductEdges } from 'src/models/shopify'

export default async function storefront<T>(query: string, variables = {}): Promise<T> {
  const url: any = process.env.NEXT_PUBLIC_API_URL
  const accessToken: any = process.env.NEXT_PUBLIC_ACCESS_TOKEN

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': accessToken,
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query, variables })
  }

  const res = await fetch(url, options)
  return res.json()
}

async function getSingleProduct(handle: string): Promise<IShopifyProduct> {
  const query =  `
    query GetProductsByHandle($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        descriptionHtml
        tags
        variants(first: 3) {
          edges {
            node {
              id
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          edges {
            node {
              altText
              transformedSrc
            }
          }
        }
      }
    }
  `

  const data = await storefront<IShopifyProduct>(query, { handle })

  return data
}

async function recursiveCatalog(cursor: string | undefined = ''): Promise<IShopifyProductEdges[]> {
  let data

  if (cursor === '') {
    const query = `
      query Products {
        products(first: 50) {
          edges {
            cursor
            node {
              id
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
      
    `

    const res = await storefront<IShopifyAllProducts>(query)
    data = res.data.products.edges ? res.data.products.edges : []
    const { hasNextPage } = res.data.products.pageInfo

    if (!hasNextPage) return data

    const lastEl = res.data.products.edges.length - 1
    const cursor = res.data.products.edges[lastEl].cursor
    
    return data.concat(await recursiveCatalog(cursor))
  }

  const query = `
    query Products {
      products(after: "${cursor}", first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `

  const res = await storefront<IShopifyAllProducts>(query)
  data = res.data.products.edges ? res.data.products.edges : []
  const { hasNextPage } = res.data.products.pageInfo

  if (!hasNextPage) return data

  const lastEl = res.data.products.edges.length - 1
  cursor = res.data.products.edges[lastEl].cursor

  return data.concat(await recursiveCatalog(cursor))
}

export { getSingleProduct, recursiveCatalog }