import '../styles/globals.css'
import '../styles/pf-square-sans-pro.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import { Provider } from 'react-redux'
import appStore from 'src/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={ `https://www.googletagmanager.com/gtag/js?id=${ process.env.NEXT_PUBLIC_GA_ID }` }
      />
      <Script strategy='lazyOnload' id='google-analytics'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${ process.env.NEXT_PUBLIC_GA_ID }');
      `}</Script>
      <Provider store={ appStore }>
        
        <Component {...pageProps} />
      </Provider>
    </>
    
  )
}