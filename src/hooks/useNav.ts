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
    if (!navEl.current) return

    window.onresize = () => {
      if (window.innerWidth >=1000) {
        setNavResp(false)
      }
    }

    fixOnScroll(navEl.current)

    const navContentWidth = navListWidth.current + openCartWidth.current + 120

    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      const navWidth = entries[0].contentRect.width

      if (navWidth <= navContentWidth) {
        setNavResp(true)
      } else {
        setNavResp(false)
      }
    })

    observer.observe(navEl.current)

    return () => observer.disconnect()
  },[navEl.current])

  return {
    getNavListWidth,
    getOpenCartWidth,
    fixOnScroll
  }
}