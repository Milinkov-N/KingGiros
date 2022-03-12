import { ComponentPropsWithoutRef, ReactNode } from 'react'
import useClassName from 'src/hooks/useClassName'

export type StackDirection = 'col'
  | 'col-reverse'
  | 'row'
  | 'row-reverse'
  | 'inherit'

export type StackGap = '2sm'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'

export type StackJustify = 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'

export type StackAlign = 'center'
  | 'flex-end'
  | 'flex-start'
  | 'stretch'

export interface StackProps extends ComponentPropsWithoutRef<'div'> {
  direction?: StackDirection
  gap?: StackGap
  justify?: StackJustify
  align?: StackAlign
}

export default function Stack({
  className,
  direction,
  gap,
  justify,
  align,
  children,
  ...all
}: StackProps) {
  const classNames = useClassName([
    'flex',
    `flex-${direction}`,
    `gap-${gap}`,
    `jc-${justify}`,
    `ai-${align}`,
    className
  ])

  return (
    <div className={ classNames } { ...all }>
      { children }
    </div>
  )
}