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
      edges: IShopifyProductEdgesWithCursor[]
      pageInfo: {
        hasNextPage: boolean
      }
    }
  }
}

export interface IShopifyProductEdgesWithCursor {
  node: IShopifyProduct,
  cursor?: string
}