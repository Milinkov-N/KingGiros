import { ReactNode } from 'react'
import { FaPepperHot, FaLeaf } from 'react-icons/fa'

export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: 'rub',
  style: 'currency',
  currencyDisplay: 'code',
  minimumFractionDigits: 0,
}).format

export function setTags(tags: string[]) {
  const output: JSX.Element[] = []

    for (const tag of tags) {
      switch (tag) {
        case 'spicy': {
          output.push(<FaPepperHot
            key={ tag }
            className='spicy'
          />)
          break
        }
        case 'vegetarian': {
          output.push(<FaLeaf
            key={ tag }
            className='vegetarian'
          />)
          break
        }
      }
    }

  return output
}