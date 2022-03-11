import Head from 'next/head'
import { ReactNode } from 'react'

import Footer from '../Footer'
import Header from '../Header'

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
        <main className={ styles.main }>
          { children }
        </main>
        <Footer />
      </div>
    </>
  )
}