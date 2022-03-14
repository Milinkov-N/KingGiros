import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            src='https://pay.fondy.eu/latest/checkout-vue/checkout.js'
          />
          <link
            rel='stylesheet'
            href='https://pay.fondy.eu/latest/checkout-vue/checkout.css'
          />
        </Head>
        <body>
          <Main />
          <div id='portal' />
          <NextScript />
        </body>
      </Html>
    )
  }
}