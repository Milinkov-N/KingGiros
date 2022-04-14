import { ComponentPropsWithoutRef } from 'react'
import useClassName from 'src/hooks/useClassName'
import CSS from 'csstype'

export type StackDirection = CSS.Property.FlexDirection | 'col'

export type StackGap = '2sm'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'

export type StackJustify = CSS.Property.JustifyContent

export type StackAlign = CSS.Property.AlignItems

export interface StackProps extends ComponentPropsWithoutRef<'div'> {
  direction?: StackDirection
  gap?: StackGap
  justify?: StackJustify
  align?: StackAlign
  wrap?: boolean
}

export default function Stack({
  className,
  direction,
  gap,
  justify,
  align,
  wrap,
  children,
  ...all
}: StackProps) {
  const classNames = useClassName([
    'flex',
    `flex-${direction}`,
    `gap-${gap}`,
    `jc-${justify}`,
    `ai-${align}`,
    `${ wrap && 'wrap' }`,
    className
  ])

  return (
    <div className={ classNames } { ...all }>
      { children }
    </div>
  )
}