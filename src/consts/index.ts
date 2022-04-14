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
    isPage: false
  },
  {
    name: 'Хот-доги',
    handle: 'hotdogs',
    tag: 'hotdog',
    isPage: false
  },
  {
    name: 'Чебуреки',
    handle: 'chebureki',
    tag: 'cheburek',
    isPage: false
  },
  {
    name: 'Добавки',
    handle: 'addons',
    tag: 'addon',
    isPage: false
  },
  {
    name: 'Супчики',
    handle: 'soups',
    tag: 'soup',
    isPage: true
  },
  {
    name: 'Второе',
    handle: 'first-course',
    tag: 'first_course',
    isPage: true
  },
  {
    name: 'Пицца',
    handle: 'pizza',
    tag: 'pizza',
    isPage: false
  },
  {
    name: 'Бургеры',
    handle: 'burgers',
    tag: 'burger',
    isPage: false
  },
  {
    name: 'Суши',
    handle: 'sushi',
    tag: 'sushi',
    isPage: true
  },
  {
    name: 'Напитки',
    handle: 'beverages',
    tag: 'beverage',
    isPage: false
  },
  {
    name: 'Закуски',
    handle: 'snacks',
    tag: 'snack',
    isPage: false
  },
  {
    name: 'Сендвичи',
    handle: 'sandwiches',
    tag: 'sandwich',
    isPage: false
  },
  {
    name: 'Сладкое',
    handle: 'sweets',
    tag: 'sweet',
    isPage: false
  },
  {
    name: 'Комбо',
    handle: 'combo',
    tag: 'combo',
    isPage: false
  },
]

export const PAGES_LINKS: IPageLinks[] = [
  {
    name: 'Сотрудничество',
    href: '/contact-us'
  },
  // {
  //   name: 'Работа',
  //   href: '/work'
  // },
  // {
  //   name: 'Обратная связь',
  //   href: '/contact-us'
  // },
]