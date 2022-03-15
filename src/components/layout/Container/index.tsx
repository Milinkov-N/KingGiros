import { ReactNode } from 'react'
import useClassName from 'src/hooks/useClassName'

export interface ContainerProps {
  className?: string
  children?: ReactNode
}

export default function Container({ className, children }: ContainerProps) {
  const classNames = useClassName(['container', className])

  return (
    <div className={ classNames }>
      { children }
    </div>
  )
}
