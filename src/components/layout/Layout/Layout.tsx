import Head from 'next/head'
import { ReactNode } from 'react'

import { Footer, Header, Nav } from '..'
import LogoImg from 'public/logo_2022.png'

import styles from './Layout.module.css'

export interface LayoutProps {
  title?: string
  children?: ReactNode
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{ title ? `King Giros | ${ title }` : 'King Giros | Доставка еды' }</title>
        <link rel="shortcut icon" href={ LogoImg.src } type="image/x-icon" />
      </Head>
      <div className={ styles.layout }>
        <Header />
        <Nav />
        <main className={ styles.main }>
          { children }
        </main>
        <Footer />
      </div>
    </>
  )
}