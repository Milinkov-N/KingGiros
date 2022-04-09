import { ComponentPropsWithRef, forwardRef } from 'react'
import IMask from 'imask'
import useClassName from 'src/hooks/useClassName'
import styles from './Form.module.css'

export default function Form({
  className,
  onSubmit,
  children,
  ...rest
}: ComponentPropsWithRef<'form'>) {
  const classNames = useClassName([styles.form, className])
  return (
    <form
      className={ classNames }
      onSubmit= { onSubmit }
      { ...rest }
    >
      { children }
    </form>
  )
}
export interface InputProps extends ComponentPropsWithRef<'input'> {
  label: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  label,
  ...rest
}: InputProps, ref) => {
  return (
    <div className={ className }>
      <label className={ styles.label } htmlFor={ rest.id }>
        { label }
      </label>
      <input
        ref={ ref }
        className={ styles.input }
        { ...rest }
      />
    </div>
  )
})

Input.displayName = 'Input'

function MaskedTel(props: InputProps) {
  const setInputMask = (el: HTMLInputElement) => {
    el && IMask(el as HTMLElement, {
      mask: '+{7} (000) 000-00-00'
    })
  }

  return (
    <Input
      ref={ setInputMask }
      { ...props } 
    />
  )
}

export interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  label: string
}

function Textarea({
  className,
  name,
  placeholder,
  label,
  required,
  onSelect
}: TextareaProps) {
  const classNames = useClassName([styles.form, className])

  return (
    <div className={ classNames }>
      <label className={ styles.label } htmlFor={ name }>
        { label }
      </label>
      <textarea
        className={ `${ styles.input } ${ styles.textarea }` }
        name={ name }
        placeholder={ placeholder }
        required={ required }
        onSelect={ onSelect }
      />
    </div>
  )
}

export interface SelectProps extends ComponentPropsWithRef<'select'> {
  label: string
}

function Select({
  className,
  name,
  placeholder,
  label,
  required,
  children
}: TextareaProps) {
  const classNames = useClassName([styles.form, className])

  return (
    <div className={ classNames }>
      <label className={ styles.label } htmlFor={ name }>
        { label }
      </label>
      <select
        className={ `${ styles.input }` }
        name={ name }
        placeholder={ placeholder }
        required={ required }
      >
        { children }
      </select>
    </div>
  )
}

Form.Input     = Input
Form.MaskedTel = MaskedTel
Form.Textarea  = Textarea
Form.Select    = Select