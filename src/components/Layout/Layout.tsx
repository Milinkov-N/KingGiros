import Head from 'next/head'
import { ReactNode } from 'react'

import{ Footer, Header, Nav } from '.'

import styles from './Layout.module.css'

export interface LayoutProps {
  title?: string
  children?: ReactNode
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{ title ? title : 'King Giros | Доставка еды' }</title>
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