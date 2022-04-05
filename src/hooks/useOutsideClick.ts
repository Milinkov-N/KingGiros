import { RefObject, useEffect } from 'react'

export default function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>, 
  callback: (e: MouseEvent) => void
) {
  useEffect(() => {

    // Alert if clicked on outside of element
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e)
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}