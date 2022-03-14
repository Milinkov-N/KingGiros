import { ChangeEvent, useState } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'

export interface QuantitySelectorProps {
  initialQuantity?: number
  onChange?: (qty: number) => void
}

export default function QuantitySelector({
  initialQuantity = 1,
  onChange
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const increment = () => setQuantity(qty => {
    onChange && onChange(qty + 1)

    return qty + 1
  })

  const decrement = () => setQuantity(qty => {
    if (qty === 1) {
      onChange && onChange(0)

      return 1
    }

    onChange && onChange(qty - 1)

    return qty - 1
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const parsedValue = parseInt(value)

    if (parsedValue < 1) {
      setQuantity(1)

      onChange && onChange(0)
    } else {
      setQuantity(parsedValue)
    }

    onChange && onChange(parsedValue)
  }

  return (
    <div className='quantity-selector'>
      <button className='selector-el selector-btn' onClick={ decrement }>
        <HiMinus />
      </button>
      <input
        className='selector-el selector-amount'
        type='number'
        value={ quantity }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => handleOnChange(e) }
      />
      <button className='selector-el selector-btn' onClick={ increment }>
        <HiPlus />
      </button>
    </div>
  )
}