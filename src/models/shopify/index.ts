export interface IShopifyImage {
  node: {
     transformedSrc: string
     altText: string
  }
}

export interface IShopifyProduct {
  id?: string
  handle?: string
  title?: string
  description?: string
  descriptionHtml?: any
  tags?: string[]
  priceRange?: {
    minVariantPrice: {
      amount: string
    }
  }
  images?: {
    edges: IShopifyImage[]
  }
  variants?: {
    edges: [
      node: {
        id: string
      }
    ]
  }
}

export interface IShopifyAllProducts {
  data: {
    products: {
      edges: IShopifyProductEdges[]
      pageInfo: {
        hasNextPage: boolean
      }
    }
  }
}

export interface IShopifyCollection {
  data: {
    collection: {
        products: {
        edges: IShopifyProductEdges[]
        pageInfo: {
          hasNextPage: boolean
        }
      }
    }
  }
}
export interface IShopifyProductEdges {
  node: IShopifyProduct,
  cursor?: string
}