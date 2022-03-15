import { useEffect, RefObject, MutableRefObject } from 'react'
import useActions from './useActions'
export interface useNavProps {
  navEl: RefObject<HTMLElement>
  navListWidth: MutableRefObject<number>
  openCartWidth: MutableRefObject<number>
}

export default function useNav({
    navEl,
    navListWidth,
    openCartWidth,
  }: useNavProps,
  styles: { readonly [key: string]: string }
) {
  const { setNavResp } = useActions()

  const getNavListWidth = (el: HTMLUListElement) => {
    if (!el) return
    navListWidth.current = el?.getBoundingClientRect().width
  }

  const getOpenCartWidth = (el: HTMLDivElement) => {
    if (!el) return
    openCartWidth.current = el.getBoundingClientRect().width
  }

  function fixOnScroll(element: HTMLElement) {
    if (!element) return
  
    window.onscroll = () => {
      const elRectTop = element.getBoundingClientRect().top
  
      switch(true) {
        case elRectTop <= 0:
          element.classList.add(styles.navFixed)
          break;
  
        case elRectTop > 0:
          element.classList.remove(styles.navFixed)
          break;
      }
    }
  }

  useEffect(() => {
    if (!navEl.current) return () => {
      setNavResp(false)
    }

    const navContentWidth = navListWidth.current + openCartWidth.current + 120

    if (window.innerWidth <= navContentWidth + 30) {
      setNavResp(true)
    }

    window.onresize = () => {
      if (window.innerWidth >= navContentWidth + 30) {
        setNavResp(false)
      } else {
        setNavResp(true)
      }
    }

    fixOnScroll(navEl.current)
  },[navEl])

  return {
    getNavListWidth,
    getOpenCartWidth,
    fixOnScroll
  }
}