import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export interface IPortal {
  selector: string
  children?: ReactNode
}

export default function Portal({ selector, children }: IPortal) {
  const [mounted, setMounted] = useState(false)
  let ref: any = useRef(null)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [ref, selector])

  return mounted ? createPortal(children, ref.current) : null
}