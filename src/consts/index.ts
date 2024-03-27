export interface ICollections {
  name: string
  handle: string
  tag: string
  isPage: boolean
}

export interface IPageLinks {
  name: string
  href: string
}

export const COLLECTIONS: ICollections[] = [
  {
    name: 'Шаурма',
    handle: 'shaurma',
    tag: 'shaurma',
    isPage: false,
  },
  {
    name: 'Хот-доги',
    handle: 'hotdogs',
    tag: 'hotdog',
    isPage: false,
  },
  {
    name: 'Добавки',
    handle: 'addons',
    tag: 'addon',
    isPage: false,
  },
  {
    name: 'Пицца',
    handle: 'pizza',
    tag: 'pizza',
    isPage: false,
  },
  {
    name: 'Напитки',
    handle: 'beverages',
    tag: 'beverage',
    isPage: false,
  },
  {
    name: 'Закуски',
    handle: 'snacks',
    tag: 'snack',
    isPage: false,
  },
  {
    name: 'Сендвичи',
    handle: 'sandwiches',
    tag: 'sandwich',
    isPage: false,
  },
  {
    name: 'Сладкое',
    handle: 'sweets',
    tag: 'sweet',
    isPage: false,
  },
]

export const PAGES_LINKS: IPageLinks[] = [
  {
    name: 'Сотрудничество',
    href: '/contact-us',
  },
  {
    name: 'Работа',
    href: '/work',
  },
  {
    name: 'Обратная связь',
    href: '/contact-us',
  },
]
