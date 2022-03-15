import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import appStore from 'src/store'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ appStore }>
      <Script
        src='https://pay.fondy.eu/latest/checkout-vue/checkout.js'
        strategy='beforeInteractive'
      />  
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
